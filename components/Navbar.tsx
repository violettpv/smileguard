import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-gradient h-32 w-full sm:h-16">
      <ul className="nav-list flex h-full w-full flex-row flex-wrap items-center justify-evenly gap-3 sm:gap-0">
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
