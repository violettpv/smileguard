import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Baloo_2, Bebas_Neue } from 'next/font/google';
import { notFound } from 'next/navigation';

import { routing } from '@/app/i18n/routing';

import './globals.css';

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  weight: '400',
  subsets: ['latin'],
});

const baloo2 = Baloo_2({
  variable: '--font-baloo-2',
  subsets: ['latin'],
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
      <body className={`${bebasNeue.variable} ${baloo2.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
