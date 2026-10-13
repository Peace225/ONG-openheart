import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importation directe des traductions depuis le dossier src
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN }
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Passe i18n à react-i18next
  .init({
    resources,
    fallbackLng: 'fr',   // Langue par défaut
    debug: true,         // Laissez sur true pour voir les erreurs dans la console (F12)
    interpolation: {
      escapeValue: false // React s'occupe déjà de la sécurité XSS
    }
  });

export default i18n;