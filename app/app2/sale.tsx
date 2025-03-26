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

// Моковые данные для продажи
const saleProperties: Property[] = [
  {
    id: 1,
    title: 'Элитная квартира с панорамным видом',
    price: 15000000,
    location: 'Центр города',
    type: 'Продажа',
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: 'Загородный дом с бассейном',
    price: 35000000,
    location: 'Загородный поселок',
    type: 'Продажа',
    bedrooms: 5,
    bathrooms: 3,
    area: 250,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Таунхаус в зеленом районе',
    price: 18000000,
    location: 'Пригород',
    type: 'Продажа',
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3',
  },
];

export default function SaleScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.propertiesList}>
        {saleProperties.map(property => (
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