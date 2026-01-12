import { useTranslations } from 'next-intl';
import Image from 'next/image';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getCurrentYear } from '@/lib/date';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="relative bottom-0 left-0 flex h-fit min-h-[110px] w-full flex-col items-center justify-center gap-y-6 px-5 py-5 text-white">
      <div className="flex w-full flex-col items-center justify-around gap-y-8 sm:flex-row sm:items-start">
        <div className="footer-row-list">
          <h2 className="text-center sm:text-left">{t('contactsTitle')}</h2>
          <ul className="contacts">
            {/* <li>
              <a href="https://maps.app.goo.gl/966RT4uJi8BwEVMJ9">
                {t('address')}
              </a>
            </li> */}
            <li>
              <a href="tel:380955710354">+380-95-571-03-54</a>
            </li>
            <li>
              <a href="mailto:poltava.svitlana@gmail.com">
                poltava.svitlana@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-row-list">
          <h2 className="text-center sm:text-left">{t('messengersTitle')}</h2>
          <ul className="my-2 flex flex-row justify-evenly">
            {/* <li>
              <a href="http://">
                <Image
                  src="/icons8-instagram.svg"
                  alt="Instagram Icon"
                  width={40}
                  height={40}
                />
              </a>
            </li> */}
            <li>
              <a href="https://t.me/+380955710354">
                <Image
                  src="/icons8-telegram-app.svg"
                  alt="Telegram Icon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a href="viber://chat?number=380955710354">
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
      <div className="text-center">
        © {getCurrentYear()}{' '}
        <a href="https://github.com/violettpv" target="_blank">
          {t('author')}
        </a>
        . {t('copyright')}
      </div>
    </footer>
  );
}
