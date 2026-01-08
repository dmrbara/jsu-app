import { View } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { supabase } from '@/lib/supabase';

export default function DashboardScreen() {
  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error);
      }
    } catch (e) {
      console.error('Logout exception:', e);
    }
    // Navigate directly to login screen
    router.replace('/(auth)/login');
  }

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Dashboard</Text>
      <Text className="text-muted-foreground mt-2">Admin overview will be displayed here</Text>
      
      <Button className="mt-8" variant="destructive" onPress={handleLogout}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
}
