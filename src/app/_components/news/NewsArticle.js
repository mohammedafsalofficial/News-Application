import { formatDate } from "@/app/_utils/helper/helperUtils";
import Image from "next/image";

export default function NewsArticle({
  creator,
  pubDate,
  title,
  category,
  language,
  country,
  image_url,
  description,
}) {
  return (
    <main className="flex-grow">
      <div className="min-h-4 max-w-[1200px] my-16 mx-auto">
        <div className="space-y-2 w-full max-w-[1400px] mx-auto">
          <div className="flex items-center space-x-2">
            {creator && (
              <>
                <p className="font-semibold">
                  {creator.length > 1 ? "Authors: " : "Author: "}
                </p>
                <div className="space-x-4">
                  {creator.map((person, index) => (
                    <span className="font-semibold text-blue-600" key={index}>
                      {person}
                    </span>
                  ))}
                </div>
                <span className="h-5 w-[2px] bg-gray-400"></span>
              </>
            )}
            <p>{formatDate(pubDate)}</p>
          </div>

          <h1 className="text-3xl font-bold">{title}</h1>

          <div className="space-x-4">
            {category &&
              category.map((item, index) => (
                <span className="font-semibold text-red-600" key={index}>
                  {item}
                </span>
              ))}
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-semibold text-green-600">{language}</span>
            <span className="h-5 w-[2px] bg-gray-400"></span>
            <div className="space-x-4">
              {country &&
                country.map((item, index) => (
                  <span className="font-semibold text-amber-700" key={index}>
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {image_url && (
          <Image
            className="my-8 w-full max-w-[900px] rounded-lg object-cover"
            src={image_url}
            width={900}
            height={900}
            alt="News image"
          />
        )}

        {description && (
          <p className="leading-relaxed text-xl">{description}</p>
        )}
      </div>
    </main>
  );
}
