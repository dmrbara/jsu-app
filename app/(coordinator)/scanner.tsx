import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function ScannerScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Scanner QR</Text>
      <Text className="text-muted-foreground mt-2">Scanează coduri QR și urmărește băuturile aici</Text>
    </View>
  );
}
