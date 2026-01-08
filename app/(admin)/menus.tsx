import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function MenusScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Menus</Text>
      <Text className="text-muted-foreground mt-2">Set menus and manage votes here</Text>
    </View>
  );
}
