import Image from 'next/image';

export default function Header() {
  return (
    <header className="banner-img relative flex h-[60vh] min-h-[60vh] w-full flex-col items-center justify-center">
      <div className="h-3/4 w-1/2 bg-white p-4">
        <Image src="/logo.webp" alt="logo" width={200} height={100} />
      </div>
    </header>
  );
}
