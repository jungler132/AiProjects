export type Language = 'ru' | 'az' | 'tr' | 'en';

export interface Translations {
  dental: {
    title: string;
    description: string;
  };
  realEstate: {
    title: string;
    description: string;
  };
  language: {
    ru: string;
    az: string;
    tr: string;
    en: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    dental: {
      title: 'Стоматология',
      description: 'Запись к стоматологу и информация о клинике',
    },
    realEstate: {
      title: 'Недвижимость',
      description: 'Поиск и аренда недвижимости',
    },
    language: {
      ru: 'Русский',
      az: 'Азербайджанский',
      tr: 'Турецкий',
      en: 'Английский',
    },
  },
  az: {
    dental: {
      title: 'Stomatologiya',
      description: 'Stomatoloqa qeydiyyat və klinika haqqında məlumat',
    },
    realEstate: {
      title: 'Əmlak',
      description: 'Əmlak axtarışı və icarəsi',
    },
    language: {
      ru: 'Rus',
      az: 'Azərbaycan',
      tr: 'Türk',
      en: 'İngilis',
    },
  },
  tr: {
    dental: {
      title: 'Diş Hekimliği',
      description: 'Diş hekimine randevu ve klinik bilgileri',
    },
    realEstate: {
      title: 'Emlak',
      description: 'Emlak arama ve kiralama',
    },
    language: {
      ru: 'Rusça',
      az: 'Azerice',
      tr: 'Türkçe',
      en: 'İngilizce',
    },
  },
  en: {
    dental: {
      title: 'Dental',
      description: 'Dental appointment and clinic information',
    },
    realEstate: {
      title: 'Real Estate',
      description: 'Property search and rental',
    },
    language: {
      ru: 'Russian',
      az: 'Azerbaijani',
      tr: 'Turkish',
      en: 'English',
    },
  },
}; 