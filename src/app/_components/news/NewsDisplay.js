import NewsCard from "./NewsCard";

export default function NewsDisplay({ newsData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {newsData &&
        newsData.results.map((article) => (
          <NewsCard
            key={article.article_id}
            article_id={article.article_id}
            title={article.title}
            description={article.description}
            language={article.language}
            category={article.category}
            pubDate={article.pubDate}
            image_url={article.image_url}
          />
        ))}
    </div>
  );
}
