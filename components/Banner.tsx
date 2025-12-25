import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Banner() {
  const t = useTranslations('header');

  return (
    <div className="banner-img relative h-[100vh] w-full">
      <div className="white-half-gradient"></div>
      <div className="relative z-10 flex h-11/12 w-11/12 max-w-[700px] flex-col items-start justify-center pl-7 sm:w-2/3">
        <h1
          style={{ textShadow: '2px 2px 0 #fff' }}
          className="mb-6 text-left text-4xl text-(--color-secondary) sm:text-5xl"
        >
          {t('title')}
        </h1>
        <div id="banner-intro">
          <p className="text-lg">{t('bannerIntro')}</p>
        </div>

        {/* <a
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
        </a> */}
      </div>

      <div id="wave-detail"></div>
    </div>
  );
}
