import NewsArticleGrid from "@/components/NewsArticleGrid";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface CategoryNewsPageProps {
  articles: NewsArticle[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const paths = categorySlugs.map((slug) => {
    return { params: { category: slug } };
  });
  return {
    paths,
    fallback: false, // if we enter slug in the URL that does not exist then redirect to 404 page
  };
};

// Fetching the data at Compile time, to get the data instantly

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async (context) => {
  const category = context.params?.category?.toString();
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data: NewsResponse = await response.json();
  return {
    props: { articles: data.articles },
    revalidate: 5 * 60,
  };
};

const CategoryNewsPage = ({ articles }: CategoryNewsPageProps) => {
  const router = useRouter();
  const categoryName = router.query.category?.toString();

  const title = `Category : ${categoryName} `;

  return (
    <>
      <Head>
        <title key="title">{title} - NextJS News App</title>
      </Head>
      <main className="pt-6 mx-14">
        <h1 className="text-2xl font-semibold my-2">{title}</h1>
        <div className="w-[70vw] ">
          <div className="alert alert-info shadow-lg mb-6">
            <div>
              <p>
                This page uses <strong>getStaticProps</strong> for a very high page reload speed and{" "}
                <strong>Incremental static regeneration </strong> to show data not older than{" "}
                <strong>5 minutes</strong>
              </p>
            </div>
          </div>
        </div>
        <NewsArticleGrid articles={articles} />
      </main>
    </>
  );
};

export default CategoryNewsPage;
