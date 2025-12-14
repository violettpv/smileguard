import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Banner() {
  const t = useTranslations('header');

  return (
    <div className="banner-img h-[100vh] w-full">
      <div className="white-half-gradient"></div>
      <div className="flex h-full w-2/3 max-w-[800px] flex-col items-start justify-center pl-7">
        <h1 className="text-left text-5xl sm:text-6xl">{t('title')}</h1>
        <p className="text-justify">{t('bannerIntro')}</p>

        <a
          href="#about"
          title="about"
          className="blue-gradient flex items-center justify-center rounded-full p-3"
        >
          <Image
            src="/arrow-down.svg"
            alt="arrow down"
            width={40}
            height={40}
            className="h-auto w-[40px]"
          />
        </a>
      </div>
    </div>
  );
}
