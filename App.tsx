import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Экран с информацией о стоматологе
const DoctorInfoScreen = () => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.doctorHeader}>
      <Image
        source={{ uri: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg' }}
        style={styles.doctorImage}
      />
      <Text style={styles.doctorName}>Др. Александр Петров</Text>
      <Text style={styles.doctorTitle}>Главный стоматолог</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Образование</Text>
      <Text style={styles.sectionText}>• Московский государственный медицинский университет (2015)</Text>
      <Text style={styles.sectionText}>• Специализация по стоматологии (2017)</Text>
      <Text style={styles.sectionText}>• Сертификат по имплантологии (2019)</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Опыт работы</Text>
      <Text style={styles.sectionText}>• 8 лет практики в стоматологии</Text>
      <Text style={styles.sectionText}>• Более 1000 успешных операций</Text>
      <Text style={styles.sectionText}>• Специализация на имплантации и протезировании</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Специализация</Text>
      <Text style={styles.sectionText}>• Имплантация зубов</Text>
      <Text style={styles.sectionText}>• Протезирование</Text>
      <Text style={styles.sectionText}>• Лечение кариеса</Text>
      <Text style={styles.sectionText}>• Отбеливание зубов</Text>
    </View>
  </ScrollView>
);

// Экран с оборудованием
const EquipmentScreen = () => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Современное оборудование</Text>
      <View style={styles.equipmentItem}>
        <Ionicons name="medical" size={40} color="#007AFF" />
        <Text style={styles.equipmentTitle}>3D-томограф</Text>
        <Text style={styles.equipmentDescription}>Точная диагностика и планирование лечения</Text>
      </View>
      <View style={styles.equipmentItem}>
        <Ionicons name="scan" size={40} color="#007AFF" />
        <Text style={styles.equipmentTitle}>Цифровой сканер</Text>
        <Text style={styles.equipmentDescription}>Создание точных 3D-моделей зубов</Text>
      </View>
      <View style={styles.equipmentItem}>
        <Ionicons name="flash" size={40} color="#007AFF" />
        <Text style={styles.equipmentTitle}>Лазерное оборудование</Text>
        <Text style={styles.equipmentDescription}>Безболезненное лечение и отбеливание</Text>
      </View>
    </View>
  </ScrollView>
);

// Экран с отзывами
const ReviewsScreen = () => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Отзывы пациентов</Text>
      
      <View style={styles.reviewItem}>
        <View style={styles.reviewHeader}>
          <Text style={styles.reviewName}>Анна С.</Text>
          <Text style={styles.reviewDate}>15.03.2024</Text>
        </View>
        <Text style={styles.reviewText}>"Отличный врач! Очень внимательный и профессиональный. Лечение прошло без боли."</Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
        </View>
      </View>

      <View style={styles.reviewItem}>
        <View style={styles.reviewHeader}>
          <Text style={styles.reviewName}>Михаил К.</Text>
          <Text style={styles.reviewDate}>10.03.2024</Text>
        </View>
        <Text style={styles.reviewText}>"Профессионал своего дела. Установил импланты, результат превзошел все ожидания!"</Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
        </View>
      </View>
    </View>
  </ScrollView>
);

// Навигация для первого мини-приложения (Стоматология)
const App1Navigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Информация" 
      component={DoctorInfoScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Оборудование" 
      component={EquipmentScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="medical" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Отзывы" 
      component={ReviewsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="star" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

// Моковые экраны для второго мини-приложения
const App2Screen1 = () => (
  <View style={styles.screen}>
    <Text>Экран 1 - Приложение 2</Text>
  </View>
);

const App2Screen2 = () => (
  <View style={styles.screen}>
    <Text>Экран 2 - Приложение 2</Text>
  </View>
);

const App2Screen3 = () => (
  <View style={styles.screen}>
    <Text>Экран 3 - Приложение 2</Text>
  </View>
);

// Навигация для второго мини-приложения
const App2Navigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Tab1" 
      component={App2Screen1}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="star" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Tab2" 
      component={App2Screen2}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Tab3" 
      component={App2Screen3}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

// Главный экран выбора приложений
const HomeScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <View style={styles.appGrid}>
      <TouchableOpacity 
        style={styles.appButton}
        onPress={() => navigation.navigate('App1')}
      >
        <Ionicons name="medical" size={50} color="#007AFF" />
        <Text style={styles.appText}>Стоматология</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.appButton}
        onPress={() => navigation.navigate('App2')}
      >
        <Ionicons name="game-controller" size={50} color="#FF3B30" />
        <Text style={styles.appText}>Приложение 2</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Выберите приложение' }}
        />
        <Stack.Screen 
          name="App1" 
          component={App1Navigator}
          options={{ title: 'Стоматология' }}
        />
        <Stack.Screen 
          name="App2" 
          component={App2Navigator}
          options={{ title: 'Приложение 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  appButton: {
    width: 150,
    height: 150,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  appText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  doctorHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  doctorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  doctorTitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007AFF',
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  equipmentItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  equipmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  equipmentDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  reviewItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewDate: {
    color: '#666',
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  rating: {
    flexDirection: 'row',
  },
}); 