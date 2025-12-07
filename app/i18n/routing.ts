import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uk-UA', 'en-UA'],
  defaultLocale: 'uk-UA',
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      'uk-UA': '/uk',
      'en-UA': '/en',
    },
  },
});
