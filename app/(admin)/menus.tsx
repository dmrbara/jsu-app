import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function MenusScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Meniuri</Text>
      <Text className="text-muted-foreground mt-2">Setează meniurile și administrează voturile aici</Text>
    </View>
  );
}
