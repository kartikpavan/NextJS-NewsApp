import NewsArticleGrid from "@/components/NewsArticleGrid";
import { NewsArticle } from "@/models/NewsArticle";
import Head from "next/head";
import { FormEvent, useState } from "react";

const SearchNewsPage = () => {
  const [inputQuery, setInputQuery] = useState("");
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsError, setSearchResultsError] = useState(false);

  // Submit Handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();
    if (searchQuery) {
      try {
        setSearchResultsLoading(true);
        setInputQuery(searchQuery);
        const response = await fetch(`/api/search-news?q=${searchQuery}`);
        const data: NewsArticle[] = await response.json();
        setSearchResults(data);
        setSearchResultsError(false);
        setSearchResultsLoading(false);
      } catch (error) {
        setSearchResultsError(true);
        setSearchResultsLoading(false);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title key={"title"}>Search News - NextJS News APP</title>
      </Head>
      <main className="p-2">
        <h1 className="text-3xl font-medium my-4">Search News</h1>
        {/* Alert */}
        <div className="w-[70vw] ">
          <div className="alert alert-warning shadow-lg mb-6">
            <div>
              <p>
                This page uses <strong>Client Side Data Fetching </strong> to show News on every new
                search . Requests are handeled by our backend api routes
                <strong>SEO</strong>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center flex-col md:flex-row md:gap-4">
          <div className="form-control w-full max-w-lg my-2">
            <input
              name="searchQuery"
              type="text"
              placeholder="Eg. Sports , Politics"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <div className="my-4 w-full">
            <button type="submit" className="btn btn-primary w-60" disabled={searchResultsLoading}>
              Search
            </button>
          </div>
        </form>
        <section className="flex flex-col items-start">
          {searchResultsLoading && (
            <h1 className="text-blue-600 font-bold text-4xl">LOADING....</h1>
          )}
          {searchResultsError && (
            <h1 className="text-blue-600 font-bold text-4xl">
              OOPS Something went wrong, Please try again later....
            </h1>
          )}
          {searchResults?.length === 0 && (
            <h1 className="text-blue-600 font-bold text-4xl">Seems Empty here</h1>
          )}
          {!inputQuery.length ? null : (
            <h2 className="text-2xl mb-4">
              Showing Results for <strong className="text-slate-500">`{inputQuery}` </strong>
            </h2>
          )}
          {searchResults && <NewsArticleGrid articles={searchResults} />}
        </section>
      </main>
    </>
  );
};

export default SearchNewsPage;
