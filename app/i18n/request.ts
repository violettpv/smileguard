import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from '@/app/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const language = locale.split('-')[0];

  return {
    locale,
    messages: (await import(`../../messages/${language}.json`)).default,
  };
});
