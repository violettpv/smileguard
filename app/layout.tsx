import type { Metadata } from 'next';

export const metadata: Metadata = {
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
}: {
  children: React.ReactNode;
}) {
  return children;
}
