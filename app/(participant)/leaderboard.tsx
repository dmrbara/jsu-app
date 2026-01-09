import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function LeaderboardScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Clasament</Text>
      <Text className="text-muted-foreground mt-2">Clasamentul va fi afișat aici</Text>
    </View>
  );
}
