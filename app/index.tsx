import { Redirect } from 'expo-router'
import { useAuth } from '../lib/auth-context'

export default function Index() {
  const { session, profile, loading } = useAuth()

  if (loading) return null

  // Not logged in -> login screen
  if (!session) {
    return <Redirect href="/(auth)/login" />
  }

  // Logged in but no profile -> error state
  if (!profile) {
    return <Redirect href="/(auth)/login" />
  }

  // Route based on role
  switch (profile.role) {
    case 'admin':
      return <Redirect href="/(admin)" />
    case 'coordinator':
      return <Redirect href="/(coordinator)" />
    case 'participant':
    default:
      return <Redirect href="/(participant)" />
  }
}
