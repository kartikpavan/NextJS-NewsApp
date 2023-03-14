import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";

interface SingleNewsArticleProps {
  article: NewsArticle;
}

const SingleNewsArticle = ({ article }: SingleNewsArticleProps) => {
  const { author, title, description, url, urlToImage, publishedAt, content } = article;

  const validURL =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : "https://via.placeholder.com/350x200";

  return (
    <a href={url} target="_blank">
      <div className="card w-full sm:w-96 h-[600px] bg-base-100 shadow-xl">
        <figure>
          <img src={validURL} alt="IMAGE" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SingleNewsArticle;
