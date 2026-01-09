import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function RemindersScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Setări memento-uri</Text>
      <Text className="text-muted-foreground mt-2">Configurează preferințele pentru memento-uri aici</Text>
    </View>
  );
}
