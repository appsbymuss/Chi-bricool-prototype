import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  TranslationEN  from "../locale/fr.json";
import  TranslationAR  from "../locale/ar.json";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  fr: {
    translation:  TranslationEN
  },
  ar: {
    translation: TranslationAR
  }
};

i18n
.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",

    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspense : false
    }
  });

  export default i18n;