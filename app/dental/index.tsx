import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function DoctorInfoScreen() {
  return (
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
}

const styles = StyleSheet.create({
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
}); 