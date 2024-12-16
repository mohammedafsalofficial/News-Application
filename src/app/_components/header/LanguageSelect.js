"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelect() {
  const router = useRouter();
  const pathName = usePathname();

  function handleLanguageSelect(event) {
    router.push(`/latest-news/${event.target.value}`);
  }

  const paths = pathName.split("/").slice(1);

  if (paths[0] === "latest-news" || paths[0] === "crypto-news") {
    return (
      <select
        name="language"
        id="language"
        value={paths[1]}
        onChange={handleLanguageSelect}
        className="bg-black text-white border border-white rounded-md py-1 px-3 hover:border-gray-400"
      >
        <option value="all">All</option>
        <option value="af">Afrikaans</option>
        <option value="sq">Albanian</option>
        <option value="am">Amharic</option>
        <option value="ar">Arabic</option>
        <option value="hy">Armenian</option>
        <option value="as">Assamese</option>
        <option value="az">Azerbaijani</option>
        <option value="bm">Bambara</option>
        <option value="eu">Basque</option>
        <option value="be">Belarusian</option>
        <option value="bn">Bengali</option>
        <option value="bs">Bosnian</option>
        <option value="bg">Bulgarian</option>
        <option value="my">Burmese</option>
        <option value="ca">Catalan</option>
        <option value="ckb">Central Kurdish</option>
        <option value="zh">Chinese</option>
        <option value="hr">Croatian</option>
        <option value="cs">Czech</option>
        <option value="da">Danish</option>
        <option value="nl">Dutch</option>
        <option value="en">English</option>
        <option value="et">Estonian</option>
        <option value="pi">Filipino</option>
        <option value="fi">Finnish</option>
        <option value="fr">French</option>
        <option value="gl">Galician</option>
        <option value="ka">Georgian</option>
        <option value="de">German</option>
        <option value="el">Greek</option>
        <option value="gu">Gujarati</option>
        <option value="ha">Hausa</option>
        <option value="he">Hebrew</option>
        <option value="hi">Hindi</option>
        <option value="hu">Hungarian</option>
        <option value="is">Icelandic</option>
        <option value="id">Indonesian</option>
        <option value="it">Italian</option>
        <option value="jp">Japanese</option>
        <option value="kn">Kannada</option>
        <option value="kz">Kazakh</option>
        <option value="kh">Khmer</option>
        <option value="rw">Kinyarwanda</option>
        <option value="ko">Korean</option>
        <option value="ku">Kurdish</option>
        <option value="lv">Latvian</option>
        <option value="lt">Lithuanian</option>
        <option value="lb">Luxembourgish</option>
        <option value="mk">Macedonian</option>
        <option value="ms">Malay</option>
        <option value="ml">Malayalam</option>
        <option value="mt">Maltese</option>
        <option value="mi">Maori</option>
        <option value="mr">Marathi</option>
        <option value="mn">Mongolian</option>
        <option value="ne">Nepali</option>
        <option value="no">Norwegian</option>
        <option value="or">Oriya</option>
        <option value="ps">Pashto</option>
        <option value="fa">Persian</option>
        <option value="pl">Polish</option>
        <option value="pt">Portuguese</option>
        <option value="pa">Punjabi</option>
        <option value="ro">Romanian</option>
        <option value="ru">Russian</option>
        <option value="sm">Samoan</option>
        <option value="sr">Serbian</option>
        <option value="sn">Shona</option>
        <option value="sd">Sindhi</option>
        <option value="si">Sinhala</option>
        <option value="sk">Slovak</option>
        <option value="sl">Slovenian</option>
        <option value="so">Somali</option>
        <option value="es">Spanish</option>
        <option value="sw">Swahili</option>
        <option value="sv">Swedish</option>
        <option value="tg">Tajik</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="th">Thai</option>
        <option value="zht">Traditional chinese</option>
        <option value="tr">Turkish</option>
        <option value="tk">Turkmen</option>
        <option value="uk">Ukrainian</option>
        <option value="ur">Urdu</option>
        <option value="uz">Uzbek</option>
        <option value="vi">Vietnamese</option>
        <option value="cy">Welsh</option>
        <option value="zu">Zulu</option>
      </select>
    );
  }
}
