import enTranslations from "./en.json";
import esTranslations from "./es.json";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "es";

export const ui = {
  en: enTranslations,
  es: esTranslations,
} as const;