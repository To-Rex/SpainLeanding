import { ui, defaultLang } from './languages';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path === '/' ? '/' : path;
  }
  return `/${lang}${path === '/' ? '' : path}`;
}

export function removeLocaleFromPath(pathname: string) {
  const segments = pathname.split('/');
  if (segments[1] && segments[1] in ui) {
    segments.splice(1, 1);
  }
  return segments.join('/') || '/';
}