import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Navbar from '@/components/Navbar';

export default function Banner() {
  const t = useTranslations('header');

  return (
    <header className="absolute top-0 z-20 flex h-fit w-full flex-row items-center justify-between p-5">
      <Image
        src="/logo.webp"
        alt="logo"
        width={220}
        height={60}
        className="h-auto w-[220px]"
      />

      <Navbar />
    </header>
  );
}
