import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function DocumentsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Documents</Text>
      <Text className="text-muted-foreground mt-2">Upload and manage your documents here</Text>
    </View>
  );
}
