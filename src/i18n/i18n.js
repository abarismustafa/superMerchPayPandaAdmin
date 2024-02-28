import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../locales/en/translation.json";
import arTranslation from "../locales/ar/translation.json";
import hnTranslation from "../locales/hn/translation.json";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
    hn: {
      translation: hnTranslation,
    },
  },
});

export default i18n;
