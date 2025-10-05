import type { Metadata } from 'next';
import { Baloo_2, Bebas_Neue } from 'next/font/google';

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

export const metadata: Metadata = {
  title: 'Капи від бруксизму SmileGuard у Києві – комфорт та захист',
  description:
    'Індивідуальні капи від бруксизму SmileGuard у Києві. Захист зубів під час сну, комфортне носіння, професійне виготовлення стоматологами.',
  keywords:
    'ретенційна капа, м’яка капа від бруксизму, soft night guard, occlusal splint, mouth guard',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk-UA">
      <body className={`${bebasNeue.variable} ${baloo2.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
