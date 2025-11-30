'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { HEADER_HEIGHT_VH } from '@/constants';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight * (HEADER_HEIGHT_VH / 100);
      setIsSticky(window.scrollY >= headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`nav-gradient h-26 w-full sm:h-16 ${isSticky ? 'fixed top-0 shadow-lg' : 'relative'}`}
    >
      <ul className="nav-list flex h-full w-full flex-col flex-wrap items-center justify-evenly gap-5 py-3.5 text-[1rem] sm:flex-row sm:gap-3 sm:py-0 sm:text-[1.05rem]">
        <li>
          <a href="#about">Про нас</a>
        </li>
        <li>
          <a href="#works">Роботи</a>
        </li>
        <li>
          <Link href="/articles/">Статті</Link>
        </li>
        <li>
          <Link href="/contact/">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
}
