import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const reviews = [
  {
    id: 1,
    name: 'Анна С.',
    date: '15.03.2024',
    text: 'Отличный врач! Очень внимательный и профессиональный. Лечение прошло без боли.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Михаил К.',
    date: '10.03.2024',
    text: 'Профессионал своего дела. Установил импланты, результат превзошел все ожидания!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Елена В.',
    date: '05.03.2024',
    text: 'Прекрасный специалист! Очень аккуратно и безболезненно вылечил зуб. Всем рекомендую!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Дмитрий П.',
    date: '01.03.2024',
    text: 'Отличная клиника и замечательный врач. Современное оборудование, профессиональный подход.',
    rating: 5,
  },
];

export default function ReviewsScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Отзывы пациентов</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Общий рейтинг:</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons key={star} name="star" size={24} color="#FFD700" />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.reviewsContainer}>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewItem}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewName}>{review.name}</Text>
              <Text style={styles.reviewDate}>{review.date}</Text>
            </View>
            <Text style={styles.reviewText}>"{review.text}"</Text>
            <View style={styles.rating}>
              {[...Array(review.rating)].map((_, i) => (
                <Ionicons key={i} name="star" size={20} color="#FFD700" />
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 10,
  },
  stars: {
    flexDirection: 'row',
  },
  reviewsContainer: {
    padding: 15,
  },
  reviewItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    lineHeight: 20,
  },
  rating: {
    flexDirection: 'row',
  },
}); 