import { NewsArticle } from "@/models/NewsArticle";
import { FormEvent, useState } from "react";

const SearchNewsPage = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsError, setSearchResultsError] = useState(false);

  // Submit Handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();
    if (searchQuery) {
      alert(searchQuery);
    }
  };

  return (
    <main className="p-2">
      <h1 className="text-3xl font-medium my-4">Search News</h1>
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
    </main>
  );
};

export default SearchNewsPage;
