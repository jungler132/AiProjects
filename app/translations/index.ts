export type Language = 'ru' | 'az' | 'tr' | 'en';

interface Translations {
  apps: string;
  dentalApp: string;
  realEstateApp: string;
}

const translations: Record<Language, Translations> = {
  ru: {
    apps: 'Мини Приложения',
    dentalApp: 'Стоматология',
    realEstateApp: 'Недвижимость',
  },
  az: {
    apps: 'Mini Tətbiqlər',
    dentalApp: 'Stomatologiya',
    realEstateApp: 'Əmlak',
  },
  tr: {
    apps: 'Mini Uygulamalar',
    dentalApp: 'Diş Hekimliği',
    realEstateApp: 'Emlak',
  },
  en: {
    apps: 'Mini Apps',
    dentalApp: 'Dental',
    realEstateApp: 'Real Estate',
  },
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
}; 