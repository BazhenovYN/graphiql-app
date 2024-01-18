import flagEn from '@/assets/svg/EN.svg?react';
import flagRu from '@/assets/svg/RU.svg?react';
import en from '@/lang/en.json';
import ru from '@/lang/ru.json';
import type { Language, Translations } from '@/types';

export const translations: Translations = {
  en: en,
  ru: ru,
};

export const translate = (language: Language) => (key: string, defaultValue?: string) => {
  if (!translations[language]) {
    return defaultValue ?? key;
  }
  if (!translations[language][key]) {
    return defaultValue ?? key;
  }
  return translations[language][key];
};

export const getFlag = (language: Language) => {
  switch (language) {
    case 'en':
      return flagEn;
    case 'ru':
      return flagRu;
    default:
      return null;
  }
};
