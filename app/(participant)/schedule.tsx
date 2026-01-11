import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function ParticipantSchedule() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Program</Text>
      <Text className="text-muted-foreground mt-2 text-center">Aici vom avea programul proiectului</Text>
    </View>
  );
}
