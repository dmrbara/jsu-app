import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function CreateEventScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Create Event</Text>
      <Text className="text-muted-foreground mt-2">Create a new event here</Text>
    </View>
  );
}
