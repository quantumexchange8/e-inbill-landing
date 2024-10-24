import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from "./locales/en/translation.json";
import zhTranslation from "./locales/zh/translation.json";
import bmTranslation from "./locales/bm/translation.json";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            zh: { translation: zhTranslation },
            bm: { translation: bmTranslation },
          },
        fallbackLng: 'en',
        debug: false,
        supportedLngs: ['en', 'zh', 'bm'],
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"], // Ensure the language is cached in localStorage
        },
        interpolation: {
            escapeValue: false,
        },
        onInitialized: (options) => {
            console.log("Detected language:", options.lng);
        },
    });

export default i18n;