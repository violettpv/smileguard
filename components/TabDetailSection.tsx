'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type Item = {
  title: string;
  text: string;
};

type Props = {
  baseKey: string;
};

export default function TabDetailSection({ baseKey }: Props) {
  const t = useTranslations('homePage');
  const items = t.raw(`${baseKey}.items`) as Item[];

  const [activeKey, setActiveKey] = useState(items[0]?.title);

  const activeItem = items.find((item) => item.title === activeKey);

  if (!activeItem) return null;

  return (
    <section className="flex h-full w-full flex-col">
      <h2>{t(`${baseKey}.title`)}</h2>
      <div className="types-wrapper">
        <div className="types-titles">
          {items.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveKey(item.title)}
              className={`button-tab p-2 transition ${
                item.title === activeKey
                  ? 'active-tab'
                  : 'text-(--color-primary)'
              }`}
              aria-selected={item.title === activeKey}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="types-content">
          <span id="blockquote"></span>
          <p key={activeKey} className="content-transition">
            {activeItem.text}
          </p>
        </div>
      </div>
    </section>
  );
}
