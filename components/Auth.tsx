import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import * as React from 'react'
import { Alert, AppState, Image, ScrollView, View, type TextInput } from 'react-native'
import { supabase } from '../lib/supabase'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Auth() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const passwordInputRef = React.useRef<TextInput>(null)

  function onEmailSubmitEditing() {
    passwordInputRef.current?.focus()
  }

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="flex-1 p-6 mt-safe"
      keyboardDismissMode="interactive">
      <View className="flex-1 items-center justify-between">
        {/* Top section with logo and form */}
        <View className="w-full max-w-sm flex-1 items-center justify-center gap-4">
          {/* Logo */}
          <Image
            source={require('@/assets/images/icon.png')}
            className="mb-8 h-32 w-32"
            resizeMode="contain"
          />

          {/* Form inputs */}
          <View className="w-full gap-3">
            <Input
              className="h-12"
              placeholder="Email"
              keyboardType="email-address"
              autoComplete="email"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={onEmailSubmitEditing}
              returnKeyType="next"
              submitBehavior="submit"
            />
            <Input
              className="h-12"
              ref={passwordInputRef}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              returnKeyType="done"
              onSubmitEditing={signInWithEmail}
            />
          </View>

          {/* Log in button */}
          <Button className="mt-2 w-full" onPress={signInWithEmail} disabled={loading}>
            <Text>{loading ? 'Loading...' : 'Log in'}</Text>
          </Button>

          {/* Forgot password link */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="link">
                <Text className="text-muted-foreground text-sm">Forgot password?</Text>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='max-w-[22rem]'>
              <AlertDialogHeader>
                <AlertDialogTitle>Forgot Password</AlertDialogTitle>
                <AlertDialogDescription>
                  Please get in touch with your coordinators to change your password.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>
                  <Text>OK</Text>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </View>
      </View>
    </ScrollView>
  )
}
