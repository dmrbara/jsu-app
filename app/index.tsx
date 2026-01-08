import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import * as React from 'react';
import { Image, ScrollView, View, type TextInput } from 'react-native';

export default function Index() {
  const passwordInputRef = React.useRef<TextInput>(null);

  function onUsernameSubmitEditing() {
    passwordInputRef.current?.focus();
  }

  function onLogin() {
    // TODO: Handle login
  }

  function onForgotPassword() {
    // TODO: Navigate to forgot password screen
  }

  function onCreateAccount() {
    // TODO: Navigate to create account screen
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
            className="mb-8 h-48 w-48"
            resizeMode="contain"
          />

          {/* Form inputs */}
          <View className="w-full gap-3">
            <Input className='h-12'
              placeholder="Username"
              keyboardType="default"
              autoComplete="username"
              autoCapitalize="none"
              onSubmitEditing={onUsernameSubmitEditing}
              returnKeyType="next"
              submitBehavior="submit"
            />
            <Input className='h-12'
              ref={passwordInputRef}
              placeholder="Password"
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={onLogin}
            />
          </View>

          {/* Log in button */}
          <Button className="mt-2 w-full" onPress={onLogin}>
            <Text>Log in</Text>
          </Button>

          {/* Forgot password link */}
          <Button variant="link" onPress={onForgotPassword}>
            <Text className="text-muted-foreground text-sm">Forgot password?</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
