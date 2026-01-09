import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function DocumentsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Documente</Text>
      <Text className="text-muted-foreground mt-2">Încarcă și gestionează documentele tale aici</Text>
    </View>
  );
}
