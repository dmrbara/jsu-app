import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function FacultyChatScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Chat Facultate</Text>
      <Text className="text-muted-foreground mt-2">Discută cu facultatea ta aici</Text>
    </View>
  );
}
