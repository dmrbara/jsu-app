import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function AdminLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: '#000',
          headerShown: true,
        }}>
        <Drawer.Screen
          name="index"
          options={{
            title: 'Panou de control',
            drawerLabel: 'Panou de control',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="events"
          options={{
            title: 'Evenimente',
            drawerLabel: 'Evenimente',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="shifts"
          options={{
            title: 'Ture',
            drawerLabel: 'Ture',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="houses"
          options={{
            title: 'Case',
            drawerLabel: 'Case',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="alerts"
          options={{
            title: 'Alerte',
            drawerLabel: 'Alerte',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="megaphone-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="gallery"
          options={{
            title: 'Galerie',
            drawerLabel: 'Galerie',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="images-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="documents"
          options={{
            title: 'Documente',
            drawerLabel: 'Documente',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="reports"
          options={{
            title: 'Rapoarte',
            drawerLabel: 'Rapoarte',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bar-chart-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="menus"
          options={{
            title: 'Meniuri',
            drawerLabel: 'Meniuri',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="restaurant-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
