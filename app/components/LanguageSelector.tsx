import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Language } from '../translations';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const countryCodes: Record<Language, string> = {
  ru: 'ru',
  az: 'az',
  tr: 'tr',
  en: 'gb',
};

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <View style={styles.container}>
      {(Object.keys(countryCodes) as Language[]).map((lang) => (
        <TouchableOpacity
          key={lang}
          style={[
            styles.flagButton,
            currentLanguage === lang && styles.activeFlag,
          ]}
          onPress={() => onLanguageChange(lang)}
        >
          <Image
            source={{ uri: `https://flagcdn.com/24x18/${countryCodes[lang]}.png` }}
            style={styles.flag}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  flagButton: {
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeFlag: {
    borderColor: '#2C3E50',
    backgroundColor: '#ECF0F1',
  },
  flag: {
    width: 24,
    height: 18,
  },
}); 