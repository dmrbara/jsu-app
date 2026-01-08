import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function ScheduleScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Schedule</Text>
      <Text className="text-muted-foreground mt-2">Event schedule will be displayed here</Text>
    </View>
  );
}
