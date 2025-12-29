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
        <section className="no-mt">
          <h2>{t('bruxism.title')}</h2>
          {t.raw('bruxism.content').map((p: string) => (
            <p key={p}>{p}</p>
          ))}

          {/* <h3>Lorem 1.1</h3>
          <a className="classic-btn-link" href="#">
            Review full guidelines
          </a> */}
        </section>

        <section>
          <h2>{t('mouthguards.title')}</h2>
          {t.raw('mouthguards.content').map((p: string) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <OrderedSection baseKey="mouthguards.benefits" />

        <TabDetailSection baseKey="types" />

        <section>
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

        <section>
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
