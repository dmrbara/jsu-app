import { Stack } from 'expo-router';

export default function ShiftDetailLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="assign" />
    </Stack>
  );
}
