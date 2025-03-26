import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App2SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Второй экран приложения 2</Text>
      <Text style={styles.subtext}>В разработке...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
  },
}); 