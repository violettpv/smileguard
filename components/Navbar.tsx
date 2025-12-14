'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  const t = useTranslations('navigation');

  return (
    <nav className="flex h-full w-2/3 items-center justify-end">
      <ul className="nav-list hidden h-full w-full flex-row items-center justify-end gap-10 text-xl md:flex">
        <li>
          <a href="#about">{t('aboutUs')}</a>
        </li>
        <li>
          <a href="#works">{t('works')}</a>
        </li>
        <li>
          <Link href="/contact/">{t('contacts')}</Link>
        </li>
      </ul>

      <button
        type="button"
        className={`relative z-30 inline-flex items-center justify-end transition-colors ${
          isMobileMenuOpen
            ? 'text-(--color-btn-hover)'
            : 'text-white hover:text-(--color-btn-hover)'
        } md:hidden`}
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {/* top line */}
          <path
            d="M3.75 6.75h16.5"
            className={`origin-center transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-[5.25px] rotate-45' : ''} `}
            style={{ transformBox: 'fill-box' }}
          />

          {/* middle line */}
          <path
            d="M3.75 12h16.5"
            className={`transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'scale-x-0 opacity-0' : 'opacity-100'} `}
            style={{ transformBox: 'fill-box' }}
          />

          {/* bottom line */}
          <path
            d="M3.75 17.25h16.5"
            className={`origin-center transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-translate-y-[5.25px] -rotate-45' : ''} `}
            style={{ transformBox: 'fill-box' }}
          />
        </svg>
      </button>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-20 h-screen w-2/5 min-w-[240px] bg-white transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="nav-list flex h-full flex-col items-center gap-10 pt-28 text-xl">
          <li>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              {t('aboutUs')}
            </a>
          </li>
          <li>
            <a href="#works" onClick={() => setIsMobileMenuOpen(false)}>
              {t('works')}
            </a>
          </li>
          <li>
            <Link href="/contact/" onClick={() => setIsMobileMenuOpen(false)}>
              {t('contacts')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
