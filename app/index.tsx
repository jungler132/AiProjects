import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LanguageSelector from './components/LanguageSelector';
import { Language, translations } from './translations';

// Главный экран выбора приложений
export default function HomeScreen() {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ru');

  const t = translations[currentLanguage];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mini Apps</Text>
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
        />
      </View>

      <View style={styles.appsContainer}>
        <TouchableOpacity
          style={styles.appCard}
          onPress={() => router.push('/dental')}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#007AFF' }]}>
            <Ionicons name="medical" size={40} color="#fff" />
          </View>
          <Text style={styles.appTitle}>{t.dental.title}</Text>
          <Text style={styles.appDescription}>{t.dental.description}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.appCard}
          onPress={() => router.push('/app2')}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#2C3E50' }]}>
            <Ionicons name="home" size={40} color="#fff" />
          </View>
          <Text style={styles.appTitle}>{t.realEstate.title}</Text>
          <Text style={styles.appDescription}>{t.realEstate.description}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ECF0F1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
  },
  appsContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  appCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  appDescription: {
    fontSize: 14,
    color: '#7F8C8D',
    textAlign: 'center',
  },
}); 