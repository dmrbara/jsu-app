import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import * as React from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, View, type TextInput } from 'react-native';
import {ErrorHandler} from "@/lib/error-handling/ErrorHandler";

export default function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const passwordInputRef = React.useRef<TextInput>(null);

  function onUsernameSubmitEditing() {
    passwordInputRef.current?.focus();
  }

  async function onLogin() {
    if (!username || !password) {
      Alert.alert('Eroare', 'Completează toate câmpurile.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: `${username.trim().toLowerCase()}@jsu.internal`,
      password,
    });

    if (error) {
      ErrorHandler.show(error);
      setLoading(false);
    } else {
      router.replace('/');
    }
  }

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="flex-1 p-6 mt-safe"
        keyboardDismissMode="interactive">
        <View className="flex-1 items-center">
          {/* Top section with logo and form */}
          <View className="w-full max-w-sm items-center gap-4 pt-20">
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
                placeholder="Utilizator"
                keyboardType="default"
                autoComplete="username"
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
                onSubmitEditing={onUsernameSubmitEditing}
                returnKeyType="next"
                submitBehavior="submit"
              />
              <Input
                className="h-12"
                ref={passwordInputRef}
                placeholder="Parolă"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                returnKeyType="done"
                onSubmitEditing={onLogin}
              />
            </View>

            {/* Log in button */}
            <Button className="mt-2 w-full" onPress={onLogin} disabled={loading}>
              <Text>{loading ? 'Se conectează...' : 'Conectare'}</Text>
            </Button>

            {/* Forgot password link */}
            <Button variant="link" onPress={() => Alert.alert('Ai uitat parola?', 'Contactează coordonatorii pentru a-ți schimba parola.')}>
              <Text className="text-muted-foreground text-sm">Ai uitat parola?</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
