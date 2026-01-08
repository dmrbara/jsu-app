import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Profile</Text>
      <Text className="text-muted-foreground mt-2">Your profile and QR code will be displayed here</Text>
    </View>
  );
}
