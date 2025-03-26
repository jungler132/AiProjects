import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EquipmentScreen() {
  return (
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
        <View style={styles.equipmentItem}>
          <Ionicons name="camera" size={40} color="#007AFF" />
          <Text style={styles.equipmentTitle}>Интраоральная камера</Text>
          <Text style={styles.equipmentDescription}>Детальный осмотр полости рта</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
  equipmentItem: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
}); 