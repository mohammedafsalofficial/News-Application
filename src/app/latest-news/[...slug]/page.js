import NewsDisplay from "@/app/_components/news/NewsDisplay";
import NewsWrapper from "@/app/_components/news/NewsWrapper";
import Pagination from "@/app/_components/pagination/Pagination";
import getNewsData from "@/app/_utils/axios/getNewsData";

export default async function Page({ params }) {
  const { slug } = await params;

  const languageId = slug[0];
  const pageId = slug[1];

  const response = await getNewsData(languageId, pageId);

  if (response.status !== 200) {
    throw new Error(response.data.results.message);
  }

  return (
    <NewsWrapper>
      <h1 className="text-center mb-8 text-4xl font-extrabold text-gray-800">Latest News</h1>
      <NewsDisplay newsData={response.data} />
      {response.data.nextPage && (
        <Pagination languageId={languageId} nextPageId={response.data.nextPage} />
      )}
    </NewsWrapper>
  );
}
