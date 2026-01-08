import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function RemindersScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Reminder Settings</Text>
      <Text className="text-muted-foreground mt-2">Configure reminder timing preferences here</Text>
    </View>
  );
}
