import NewsArticleGrid from "@/components/NewsArticleGrid";
import SingleNewsArticle from "@/components/SingleNewsArticle";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
}

//server side props loads the data from  the server before we open the page
export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response =
    await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}
  `);
  const data: NewsResponse = await response.json();
  return {
    props: { newsArticles: data.articles },
  };
};

export default function BreakingNewsPage({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking News - NextJS News App</title>
      </Head>
      <main className="p-2">
        <h1 className="text-3xl font-medium my-4">Breaking News</h1>
        {/* Alert */}
        <div className="w-[70vw] ">
          <div className="alert alert-info shadow-lg mb-6">
            <div>
              <p>
                This page uses <strong>getServerSideProps</strong> to fetch server side data on
                every page request. This allows engine to crawl the page content and improves{" "}
                <strong>SEO</strong>
              </p>
            </div>
          </div>
        </div>
        <NewsArticleGrid articles={newsArticles} />
      </main>
    </>
  );
}
