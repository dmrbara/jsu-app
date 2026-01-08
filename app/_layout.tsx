import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  // TODO: Add auth state check here to redirect to appropriate route group
  // const { isAuthenticated, userRole } = useAuth();
  // useEffect(() => {
  //   if (!isAuthenticated) router.replace('/(auth)/login');
  //   else if (userRole === 'participant') router.replace('/(participant)');
  //   else if (userRole === 'coordinator') router.replace('/(coordinator)');
  //   else if (userRole === 'admin') router.replace('/(admin)');
  // }, [isAuthenticated, userRole]);

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(participant)" />
        <Stack.Screen name="(coordinator)" />
        <Stack.Screen name="(admin)" />
        <Stack.Screen name="index" />
      </Stack>
      <PortalHost />
    </SafeAreaProvider>
  );
}
