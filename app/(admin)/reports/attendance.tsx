import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function AttendanceReportScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Attendance Report</Text>
      <Text className="text-muted-foreground mt-2">Attendance statistics here</Text>
    </View>
  );
}
