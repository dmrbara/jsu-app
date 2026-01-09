import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function GalleryScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-semibold">Galerie</Text>
      <Text className="text-muted-foreground mt-2">Fotografiile vor fi afișate aici</Text>
    </View>
  );
}
