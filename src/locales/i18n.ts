import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: false,
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["strong", "i"],
  },
});

export default i18n;
