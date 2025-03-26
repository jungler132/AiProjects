import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DentalLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: '#f8f9fa' } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Информация',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="equipment"
        options={{
          title: 'Оборудование',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medical" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          title: 'Отзывы',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
} 