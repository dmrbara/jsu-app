import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { useLocalSearchParams } from 'expo-router';

export default function EditShiftScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Editare tură</Text>
      <Text className="text-muted-foreground mt-2">Editare tură: {id}</Text>
    </View>
  );
}
