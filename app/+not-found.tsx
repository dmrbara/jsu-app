import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center bg-background p-4">
        <Text className="text-xl font-semibold">Page Not Found</Text>
        <Text className="text-muted-foreground mt-2 text-center">
          The page you're looking for doesn't exist.
        </Text>
        <Link href="/" className="mt-4">
          <Text className="text-primary">Go to home screen</Text>
        </Link>
      </View>
    </>
  );
}
