import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function ProgramScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Program</Text>
      <Text className="text-muted-foreground mt-2">Schedule will be displayed here</Text>
    </View>
  );
}
