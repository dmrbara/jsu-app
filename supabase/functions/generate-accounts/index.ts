import { createClient } from "@supabase/supabase-js";
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// 1. FIXED INTERFACE: Added missing fields (pronouns, houseId, roomNumber)
interface AccountInput {
    firstName: string;
    lastName: string;
    role: 'participant' | 'coordinator' | 'admin';
    age: number;
    facultyId: string;
    houseId: string;
    roomNumber: string;
    pronouns: string;
}

serve(async (req: Request) => {
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        const { participants } = await req.json();

        if (!participants || !Array.isArray(participants)) {
            throw new Error("Invalid payload: 'participants' array is required.");
        }

        const results = [];
        const errors = [];

        for (const p of participants) {
            try {
                const account = await generateAccount(p);
                results.push(account);
            } catch (error: any) {
                errors.push({ participant: p, error: error.message });
            }
        }

        return new Response(JSON.stringify({created: results, failed: errors}), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 200,
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 400,
        });
    }
});

export async function generateAccount(input: AccountInput) {
    // Logic: firstname.lastname format
    const baseUsername = `${input.firstName.toLowerCase()}.${input.lastName.toLowerCase()}`
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/[^a-z.]/g, '');

    const username = await getUniqueUsername(baseUsername);
    const password = generateSecurePassword(16);

    const { data: user, error: authError } = await supabase.auth.admin.createUser({
        email: `${username}@jsu.internal`,
        password,
        email_confirm: true,
        user_metadata: { username }
    });

    if (authError) throw authError;
    if (!user.user) throw new Error("User creation failed");

    // 2. FIXED QR GENERATION: Now safely handles the ID
    const qrCodeData = generateQRData(user.user.id);

    const { error: profileError } = await supabase.from("profiles").insert({
        id: user.user.id,
        username: username,
        first_name: input.firstName,
        last_name: input.lastName,
        age: input.age,
        pronouns: input.pronouns,
        faculty_id: input.facultyId,
        house_id: input.houseId,
        room: input.roomNumber,
        role: "participant",
        qr_code_data: qrCodeData,
    });  

    if (profileError) {
        // Cleanup: If profile creation fails, delete the auth user
        await supabase.auth.admin.deleteUser(user.user.id);
        throw profileError;
    }
  
    return { username, password };
}

async function getUniqueUsername(baseUsername: string) {
    let username = baseUsername;
    let counter = 0;

    while (true) {
        const { data } = await supabase
            .from('profiles')
            .select('username')
            .eq('username', username)
            .maybeSingle(); // Changed single() to maybeSingle() to handle null gracefully

        if (!data) return username;

        counter++;
        username = `${baseUsername}${counter}`;
    }
}

function generateSecurePassword(length: number) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?'; 
    const allChars = uppercase + lowercase + digits + specialChars;

    let password = [];
    password.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    password.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    password.push(digits[Math.floor(Math.random() * digits.length)]);
    password.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    
    for (let i = password.length; i < length; i++) {
        password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }
    
    return password.sort(() => Math.random() - 0.5).join('');
}

function generateQRData(id: string) {
    // 3. FIXED SECRET HANDLING: Fallback if env var is missing
    const secret = Deno.env.get('QR_SECRET') || 'dev_fallback_secret';
    
    const encoder = new TextEncoder();
    const data = encoder.encode(id + secret);
    // Convert Uint8Array to string safely for btoa
    const binString = Array.from(data, (byte) => String.fromCharCode(byte)).join("");
    return `jsu19:${btoa(binString).slice(0, 32)}`;
}