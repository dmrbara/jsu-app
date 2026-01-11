import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function RevealHousesScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Dezvăluire case</Text>
      <Text className="text-muted-foreground mt-2">Dezvăluie atribuirile caselor aici</Text>
    </View>
  );
}
