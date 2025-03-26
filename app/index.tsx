import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { getTranslations } from './translations';
import LanguageSelector from './components/LanguageSelector';

// Главный экран выбора приложений
export default function Home() {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
  const translations = getTranslations(currentLanguage);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{translations.apps}</Text>
        <LanguageSelector />
      </View>
      
      <View style={styles.appsContainer}>
        <Link href="/dental" asChild>
          <TouchableOpacity style={styles.appCard}>
            <Image
              source={require('../assets/dental-icon.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appTitle}>{translations.dentalApp}</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/app2" asChild>
          <TouchableOpacity style={styles.appCard}>
            <Image
              source={require('../assets/real-estate-icon.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appTitle}>{translations.realEstateApp}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  appsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  appCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
  },
}); 