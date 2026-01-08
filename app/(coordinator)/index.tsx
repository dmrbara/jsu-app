import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function ParticipantsListScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Participants</Text>
      <Text className="text-muted-foreground mt-2">List of participants will be displayed here</Text>
    </View>
  );
}
