import { View } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen() {
  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace('/(auth)/login');
  }

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Profile</Text>
      <Text className="text-muted-foreground mt-2">Your profile and QR code will be displayed here</Text>
      
      <Button className="mt-8" variant="destructive" onPress={handleLogout}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
}
