
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import i18next from 'astro-i18next';

export default defineConfig({
  integrations: [
    tailwind(),
    i18next({
      defaultLanguage: 'et',
      languages: ['et', 'en']
    })
  ],
});
