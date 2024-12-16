import Link from "next/link";
import LanguageSelect from "./LanguageSelect";

export default function Header() {
  return (
    <header className="bg-black text-white h-20 flex items-center justify-between px-24">
      <nav className="flex items-center justify-between w-full">
        <h1 className="text-lg font-bold">LET&apos;S READ</h1>
        <div className="space-x-4 flex items-center">
          <Link href="/">Home</Link>
          <Link href="/latest-news/all">Latest News</Link>
          <Link href="/crypto-news/all">Crypto News</Link>
          <Link href="/customercare">Customer Care</Link>
          <Link href="/aboutus">About Us</Link>
          <LanguageSelect />
        </div>
        <Link className="bg-red-600 py-1 px-3 rounded-md hover:bg-red-700" href="#subscribe">
          Subscribe
        </Link>
      </nav>
    </header>
  );
}
