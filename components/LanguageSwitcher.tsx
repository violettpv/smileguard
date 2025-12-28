import { useLocale } from 'next-intl';

import { Link } from '@/app/i18n/navigation';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const currentLang = locale.split('-')[0];

  return (
    <div className="mt-3 flex items-center justify-center">
      <div className="flex w-20 flex-row items-center justify-evenly rounded-sm bg-gray-300 text-lg font-semibold text-(--color-secondary)">
        <Link
          href="/"
          locale="uk"
          className={`w-1/2 cursor-pointer rounded-sm py-1 text-center ${currentLang === 'uk' ? 'bg-white' : ''}`}
        >
          UA
        </Link>
        <Link
          href="/"
          locale="en"
          className={`w-1/2 cursor-pointer rounded-sm py-1 text-center ${currentLang === 'en' ? 'bg-white' : ''}`}
        >
          EN
        </Link>
      </div>
    </div>
  );
};
export default LanguageSwitcher;
