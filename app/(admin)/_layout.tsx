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
            title: 'Dashboard',
            drawerLabel: 'Dashboard',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="events"
          options={{
            title: 'Events',
            drawerLabel: 'Events',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="shifts"
          options={{
            title: 'Shifts',
            drawerLabel: 'Shifts',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="houses"
          options={{
            title: 'Houses',
            drawerLabel: 'Houses',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="alerts"
          options={{
            title: 'Alerts',
            drawerLabel: 'Alerts',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="megaphone-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="gallery"
          options={{
            title: 'Gallery',
            drawerLabel: 'Gallery',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="images-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="documents"
          options={{
            title: 'Documents',
            drawerLabel: 'Documents',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="reports"
          options={{
            title: 'Reports',
            drawerLabel: 'Reports',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bar-chart-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="menus"
          options={{
            title: 'Menus',
            drawerLabel: 'Menus',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="restaurant-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
