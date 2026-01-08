import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { useLocalSearchParams } from 'expo-router';

export default function EditEventScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Edit Event</Text>
      <Text className="text-muted-foreground mt-2">Editing event: {id}</Text>
    </View>
  );
}
