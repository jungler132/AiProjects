import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PropertyCardProps {
  id: number;
  title: string;
  price: number;
  location: string;
  type: 'Продажа' | 'Аренда';
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  onPress: () => void;
}

export default function PropertyCard({
  title,
  price,
  location,
  type,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  onPress,
}: PropertyCardProps) {
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (type === 'Аренда' ? ' ₽/мес' : ' ₽');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          <Text style={styles.price}>{formatPrice(price)}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color="#7F8C8D" />
            <Text style={styles.location} numberOfLines={1}>{location}</Text>
          </View>
          <View style={styles.features}>
            <View style={styles.feature}>
              <Ionicons name="bed" size={16} color="#7F8C8D" />
              <Text style={styles.featureText}>{bedrooms}</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="water" size={16} color="#7F8C8D" />
              <Text style={styles.featureText}>{bathrooms}</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="resize" size={16} color="#7F8C8D" />
              <Text style={styles.featureText}>{area} м²</Text>
            </View>
          </View>
        </View>
        <View style={[styles.tag, type === 'Продажа' ? styles.saleTag : styles.rentTag]}>
          <Text style={styles.tagText}>{type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 15,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#16A085',
  },
  details: {
    marginTop: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  location: {
    marginLeft: 5,
    fontSize: 14,
    color: '#7F8C8D',
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  featureText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#7F8C8D',
  },
  tag: {
    position: 'absolute',
    top: 15,
    right: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  saleTag: {
    backgroundColor: '#E74C3C',
  },
  rentTag: {
    backgroundColor: '#3498DB',
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
}); 