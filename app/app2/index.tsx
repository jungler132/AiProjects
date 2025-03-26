import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

// Моковые данные для примера
const mockProperties: Property[] = [
  {
    id: 1,
    title: 'Современная квартира в центре',
    price: 12500000,
    location: 'Центральный район',
    type: 'Продажа',
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: 'Уютный дом с садом',
    price: 25000000,
    location: 'Загородный район',
    type: 'Продажа',
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Квартира с видом на парк',
    price: 45000,
    location: 'Зеленый район',
    type: 'Аренда',
    bedrooms: 1,
    bathrooms: 1,
    area: 40,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3',
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#7F8C8D" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Поиск по адресу, району..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={20} color="#2C3E50" />
            <Text style={styles.filterText}>Фильтры</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="map" size={20} color="#2C3E50" />
            <Text style={styles.filterText}>Карта</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.propertiesList}>
        {mockProperties.map(property => (
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
  searchContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ECF0F1',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#2C3E50',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  filterText: {
    marginLeft: 5,
    color: '#2C3E50',
    fontSize: 14,
  },
  propertiesList: {
    flex: 1,
    padding: 15,
  },
}); 