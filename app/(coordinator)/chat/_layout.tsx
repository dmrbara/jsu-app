import { Stack } from 'expo-router';

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="faculty"
        options={{
          title: 'Chat Facultate',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="house"
        options={{
          title: 'Chat Casă',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
