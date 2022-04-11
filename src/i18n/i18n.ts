import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from './locales/en/translation.json';
import translationRu from './locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEn
  },
  ru: {
    translation: translationRu
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    resources,
    lng: 'ru',
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  }

  );

export default i18n;
