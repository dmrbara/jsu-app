import { Stack } from 'expo-router';

export default function ReportsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="drinks" />
      <Stack.Screen name="attendance" />
      <Stack.Screen name="votes" />
    </Stack>
  );
}
