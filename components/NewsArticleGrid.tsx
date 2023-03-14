import { NewsArticle } from "@/models/NewsArticle";
import SingleNewsArticle from "./SingleNewsArticle";

interface NewsArticleGridProps {
  articles: NewsArticle[];
}

const NewsArticleGrid = ({ articles }: NewsArticleGridProps) => {
  return (
    <section className="w-full mx-auto">
      <div className="flex flex-wrap items-center justify-evenly gap-6">
        {articles?.map((article) => (
          <SingleNewsArticle key={article.url} article={article} />
        ))}
      </div>
    </section>
  );
};

export default NewsArticleGrid;
