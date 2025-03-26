import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function RealEstateLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#2C3E50' },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#2C3E50' },
        tabBarActiveTintColor: '#E74C3C',
        tabBarInactiveTintColor: '#95A5A6',
        headerRight: () => (
          <TouchableOpacity 
            onPress={() => router.push('/')}
            style={{ marginRight: 15 }}
          >
            <Ionicons name="home" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Поиск',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sale"
        options={{
          title: 'Продажа',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetag" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rent"
        options={{
          title: 'Аренда',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="key" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
} 