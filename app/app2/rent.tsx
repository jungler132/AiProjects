import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropertyCard from '../components/PropertyCard';

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  type: 'Продажа' | 'Аренда';
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
}

// Моковые данные для аренды
const rentProperties: Property[] = [
  {
    id: 1,
    title: 'Стильная студия в новостройке',
    price: 35000,
    location: 'Деловой центр',
    type: 'Аренда',
    bedrooms: 1,
    bathrooms: 1,
    area: 40,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: 'Просторная квартира с мебелью',
    price: 55000,
    location: 'Спальный район',
    type: 'Аренда',
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Коттедж для долгосрочной аренды',
    price: 150000,
    location: 'Загородный район',
    type: 'Аренда',
    bedrooms: 4,
    bathrooms: 2,
    area: 200,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3',
  },
];

export default function RentScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.propertiesList}>
        {rentProperties.map(property => (
          <PropertyCard
            key={property.id}
            {...property}
            onPress={() => {
              // Навигация к деталям объекта
              console.log('Открыть детали объекта:', property.id);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  propertiesList: {
    flex: 1,
    padding: 15,
  },
}); 