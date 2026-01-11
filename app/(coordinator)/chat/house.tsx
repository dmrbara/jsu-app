import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function HouseChatScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Chat Căsuță</Text>
      <Text className="text-muted-foreground mt-2">Discută cu casa ta aici</Text>
    </View>
  );
}
