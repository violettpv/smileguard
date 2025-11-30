import Image from 'next/image';

import { HEADER_HEIGHT_VH } from '@/constants';

export default function Header() {
  return (
    <header
      style={{ height: `${HEADER_HEIGHT_VH}vh` }}
      className="banner-img relative flex w-full flex-col items-center justify-center"
    >
      <div className="h-fit min-h-[270px] w-5/6 bg-white p-4 md:w-4/6 lg:w-1/2">
        <Image
          src="/logo.webp"
          alt="logo"
          width={200}
          height={55}
          className="mb-3.5 h-auto w-40 sm:w-[200px]"
        />
        <div className="text-[1rem] sm:text-xl">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quod! Lorem ipsum dolor sit. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quod! Lorem ipsum
          dolor sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </div>
    </header>
  );
}
