import { Stack } from 'expo-router';

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="faculty"
        options={{
          title: 'Faculty Chat',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="house"
        options={{
          title: 'House Chat',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
