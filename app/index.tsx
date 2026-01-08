import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: Check auth state and redirect to appropriate route group
  // For now, redirect to login screen
  return <Redirect href="/(auth)/login" />;
}
