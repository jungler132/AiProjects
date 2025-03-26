import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

// Главный экран выбора приложений
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appGrid}>
        <Link href="/dental" asChild>
          <TouchableOpacity style={styles.appButton}>
            <Ionicons name="medical" size={50} color="#007AFF" />
            <Text style={styles.appText}>Стоматология</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/app2" asChild>
          <TouchableOpacity style={styles.appButton}>
            <Ionicons name="game-controller" size={50} color="#FF3B30" />
            <Text style={styles.appText}>Приложение 2</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
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
}); 