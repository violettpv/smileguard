import { useTranslations } from 'next-intl';

import Banner from '@/components/Banner';
import OrderedSection from '@/components/OrderedSection';
import TabDetailSection from '@/components/TabDetailSection';

export default function MainContent() {
  const t = useTranslations('homePage');

  return (
    <>
      <Banner />
      <main>
        <section className="no-mt flex w-full flex-col justify-between gap-2.5 md:flex-row">
          <div className="w-full md:w-[48%]">
            <h2>{t('bruxism.title')}</h2>
            {t.raw('bruxism.content_1').map((p: string) => (
              <p key={p}>{p}</p>
            ))}
            <h3>{t('bruxism.list_title')}</h3>
            <ul className="custom-list">
              {t.raw('bruxism.list').map((el: string) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
            <p>{t('bruxism.content_2')}</p>
          </div>

          <div className="w-full md:w-[48%]">
            <h2>{t('mouthguards.title')}</h2>
            {t.raw('mouthguards.content_1').map((p: string) => (
              <p key={p}>{p}</p>
            ))}
            <h3>{t('mouthguards.list_title')}</h3>
            <ul className="custom-list">
              {t.raw('mouthguards.list').map((el: string) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
            <p>{t('mouthguards.content_2')}</p>
          </div>

          {/* <h3>Lorem 1.1</h3>
          <a className="classic-btn-link" href="#">
            Review full guidelines
          </a> */}
        </section>

        <OrderedSection baseKey="mouthguards.benefits" />

        <TabDetailSection baseKey="types" />

        <section className="flex flex-col">
          <h2>{t('whoNeeds.title')}</h2>
          {t.raw('whoNeeds.content').map((p: string) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="custom-list">
            {t.raw('whoNeeds.list').map((el: string) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col">
          <h2>{t('advantages.title')}</h2>
          {t.raw('advantages.content').map((p: string) => (
            <p key={p}>{p}</p>
          ))}
          {(t.raw('advantages.items') as { title: string; text: string }[]).map(
            ({ title, text }) => (
              <div key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ),
          )}
        </section>
      </main>
    </>
  );
}
