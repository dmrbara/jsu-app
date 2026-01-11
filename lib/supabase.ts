
import { Database } from '@/types/database'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'

export const supabase = createClient<Database>(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!,
  {
    auth: {
      storage: {
        getItem: (key) => {
          if (typeof window !== 'undefined') {
            return AsyncStorage.getItem(key)
          }
          return Promise.resolve(null)
        },
        setItem: (key, value) => {
          if (typeof window !== 'undefined') {
            return AsyncStorage.setItem(key, value)
          }
          return Promise.resolve()
        },
        removeItem: (key) => {
          if (typeof window !== 'undefined') {
            return AsyncStorage.removeItem(key)
          }
          return Promise.resolve()
        },
      },
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })