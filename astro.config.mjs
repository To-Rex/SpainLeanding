// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'uz', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
