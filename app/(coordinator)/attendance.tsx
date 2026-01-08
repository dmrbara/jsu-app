import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function AttendanceScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Attendance</Text>
      <Text className="text-muted-foreground mt-2">Mark participant attendance here</Text>
    </View>
  );
}
