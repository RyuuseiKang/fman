import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import ja from "./translation/ja.json";
import ko from "./translation/ko.json";
import en from "./translation/en.json";

const resources = {
  ko: {
    translation: ko,
  },
  ja: {
    translation: ja,
  },
  en: {
    translation: en,
  }
};

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || userLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = i18n.language;

export default i18n;
