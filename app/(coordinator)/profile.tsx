import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import { View } from 'react-native';

export default function CoordinatorProfile() {
  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace('/(auth)/login');
  }

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Profil</Text>
      <Text className="text-muted-foreground mt-2 text-center">Aici vom avea profilul coordonatorului</Text>
      
      <Button className="mt-8" variant="destructive" onPress={handleLogout}>
        <Text>Deconectare</Text>
      </Button>
    </View>
  );
}
