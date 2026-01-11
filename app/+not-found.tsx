import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Ups!' }} />
      <View className="flex-1 items-center justify-center bg-background p-4">
        <Text className="text-xl font-semibold">Pagină negăsită</Text>
        <Text className="text-muted-foreground mt-2 text-center">
          Pagina pe care o cauți nu există.
        </Text>
        <Link href="/" className="mt-4">
          <Text className="text-primary">Mergi la ecranul principal</Text>
        </Link>
      </View>
    </>
  );
}
