import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Dela_Gothic_One, Exo_2 } from 'next/font/google';
import { notFound } from 'next/navigation';

import { routing } from '@/app/i18n/routing';

import './globals.css';

const delaGothicOne = Dela_Gothic_One({
  variable: '--font-dela-gothic-one',
  weight: '400',
  subsets: ['latin', 'cyrillic'],
});

const exo2 = Exo_2({
  variable: '--font-exo-2',
  weight: '400',
  subsets: ['latin', 'cyrillic'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${delaGothicOne.variable} ${exo2.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
