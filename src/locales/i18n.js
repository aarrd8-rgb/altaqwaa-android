import fr from './fr.json';
import ar from './ar.json';

const dictionaries = { fr, ar };

let currentLanguage = localStorage.getItem('lang') || 'ar';

export function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('lang', lang);
}

export function getLanguage() {
  return currentLanguage;
}

export function t(key) {
  const dict = dictionaries[currentLanguage] || dictionaries.ar;
  return dict[key] || key;
}
