import { useTranslations } from 'next-intl';
import Image from 'next/image';

import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="relative bottom-0 left-0 flex h-fit min-h-[110px] w-full flex-col items-center justify-center gap-y-6 px-4 py-5 text-white">
      <div className="flex w-full flex-col items-start justify-around gap-y-3.5 sm:flex-row">
        <div className="footer-row-list">
          <h2>{t('contactsTitle')}</h2>
          <ul className="contacts">
            <li>
              <a href="https://maps.app.goo.gl/966RT4uJi8BwEVMJ9">
                {t('address')}
              </a>
            </li>
            <li>
              <a href="tel:380xxxxxxxxx">+380xx-xxx-xx-xx</a>
            </li>
            <li>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-row-list">
          <h2>{t('socialMediaTitle')}</h2>
          <ul className="flex flex-row justify-start gap-2 sm:justify-center">
            <li>
              <a href="http://">
                <Image
                  src="/icons8-instagram.svg"
                  alt="Instagram Icon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a href="http://">
                <Image
                  src="/icons8-telegram-app.svg"
                  alt="Telegram Icon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a href="http://">
                <Image
                  src="/icons8-viber.svg"
                  alt="Viber Icon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
      <div>
        © 2025{' '}
        <a href="https://github.com/violettpv" target="_blank">
          {t('author')}
        </a>
        . {t('copyright')}
      </div>
    </footer>
  );
}
