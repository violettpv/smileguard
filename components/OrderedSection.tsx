import { useTranslations } from 'next-intl';

type OrderedSectionProps = {
  baseKey: string;
};

export default function OrderedSection({ baseKey }: OrderedSectionProps) {
  const t = useTranslations('homePage');

  const title = t(`${baseKey}.title`);
  const list = t.raw(`${baseKey}.list`) as string[];

  return (
    <section className="ordered-section">
      <h3>{title}</h3>
      <ol>
        {list.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ol>
    </section>
  );
}
