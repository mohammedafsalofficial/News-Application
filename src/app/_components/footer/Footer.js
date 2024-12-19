import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className="bg-black text-white h-52 flex items-center justify-between px-24 mt-auto">
      <div>
        <h1 className="font-bold">LET{"'"}S READ</h1>
        <p className="text-3xl">Latest Headlines: Breaking News and Updates</p>
      </div>

      <div className="space-y-1 text-sm text-gray-300">
        <p>
          <span className="text-2xl text-white">SUBSCRIBE</span> To Newsletter
        </p>
        <p>Email Address</p>
        <Subscribe />
      </div>
    </footer>
  );
}
