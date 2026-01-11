import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function AlertsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Alerte</Text>
      <Text className="text-muted-foreground mt-2">Trimite alerte către toți participanții aici</Text>
    </View>
  );
}
