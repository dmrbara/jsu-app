import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function ScannerScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">QR Scanner</Text>
      <Text className="text-muted-foreground mt-2">Scan QR codes and track drinks here</Text>
    </View>
  );
}
