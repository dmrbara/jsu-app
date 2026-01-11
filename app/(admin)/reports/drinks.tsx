import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function DrinksReportScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Raport băuturi</Text>
      <Text className="text-muted-foreground mt-2">Statistici consum băuturi aici</Text>
    </View>
  );
}
