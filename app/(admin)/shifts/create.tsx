import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function CreateShiftScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Creare tură</Text>
      <Text className="text-muted-foreground mt-2">Creează o tură nouă pentru coordonatori aici</Text>
    </View>
  );
}
