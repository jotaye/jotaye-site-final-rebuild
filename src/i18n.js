// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website",
      description: "This is an example of internationalization."
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a nuestro sitio web",
      description: "Este es un ejemplo de internacionalización."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
