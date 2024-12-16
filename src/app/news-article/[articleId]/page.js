import NewsArticle from "@/app/_components/news/NewsArticle";
import NewsWrapper from "@/app/_components/news/NewsWrapper";
import getNewsData from "@/app/_utils/axios/getNewsData";

export default async function Page({ params }) {
  const { articleId } = await params;

  const response = await getNewsData(undefined, undefined, articleId);

  const article = response.data.results[0];

  return (
    <NewsWrapper>
      <NewsArticle
        title={article.title}
        description={article.description}
        category={article.category}
        country={article.country}
        creator={article.creator}
        image_url={article.image_url}
        language={article.language}
        pubDate={article.pubDate}
      />
    </NewsWrapper>
  );
}
