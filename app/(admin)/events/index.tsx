import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function EventsListScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Evenimente</Text>
      <Text className="text-muted-foreground mt-2">Lista evenimentelor va fi afișată aici</Text>
    </View>
  );
}
