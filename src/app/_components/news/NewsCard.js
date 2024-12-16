import {
  formatDate,
  truncateDescription,
} from "@/app/_utils/helper/helperUtils";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({
  article_id,
  title,
  description,
  category,
  pubDate,
  language,
  image_url,
}) {
  return (
    <Link
      href={`/news-article/${article_id}`}
      className="bg-gray-200 p-4 rounded-lg max-w-[700px] flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 hover:bg-gray-300 transition-transform duration-200 transform hover:scale-105 shadow hover:shadow-lg"
    >
      <div className="flex-1 space-y-2">
        <h1 className="text-lg font-bold hover:text-blue-600 transition-colors duration-200">
          {title}
        </h1>
        <p className="text-sm leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-200">
          {description && truncateDescription(description)}
        </p>
        <div className="flex items-center space-x-2">
          <div className="space-x-4">
            {category.map((item, index) => (
              <span
                className="font-semibold text-red-600 hover:text-red-800 transition-colors duration-200"
                key={index}
              >
                {item}
              </span>
            ))}
            <span className="font-semibold text-green-600 hover:text-green-800 transition-colors duration-200">
              {language}
            </span>
          </div>
          <span className="h-5 w-[2px] bg-gray-400"></span>
          <p className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            {formatDate(pubDate)}
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-auto">
        {image_url && (
          <Image
            className="object-cover w-full sm:w-48 h-48 rounded-lg transform hover:scale-110 transition-transform duration-200"
            src={image_url}
            width={192}
            height={192}
            priority={true}
            alt="Picture of a news"
          />
        )}
      </div>
    </Link>
  );
}
