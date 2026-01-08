import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function ShiftsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Shifts</Text>
      <Text className="text-muted-foreground mt-2">Full shift timetable will be displayed here</Text>
    </View>
  );
}
