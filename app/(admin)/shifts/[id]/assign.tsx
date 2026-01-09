import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { useLocalSearchParams } from 'expo-router';

export default function AssignCoordinatorsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Atribuire coordonatori</Text>
      <Text className="text-muted-foreground mt-2">Atribuie coordonatori la tura: {id}</Text>
    </View>
  );
}
