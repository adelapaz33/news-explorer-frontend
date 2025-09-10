import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";
import { getNewsArticles } from "../../utils/newsApi";
import Preloader from "../Preloader/Preloader";
import SearchResults from "../SearchResults/SearchResults";

function Main({ currentSearchTerm, isLoggedIn, setCurrentSearchTerm }) {
  const [hasSearched, setHasSearched] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSearchSubmit = async (query) => {
    setCurrentSearchTerm(query);
    setIsLoading(true);
    setHasSearched(true);
    setVisibleCount(3);

    try {
      const newsArticles = await getNewsArticles(query.trim());
      if (newsArticles.length === 0) {
        setErrorMessage("No articles found for that topic");
      } else {
        setArticles(newsArticles);
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Search failed:", error);
      setErrorMessage("Something went wrong. Please try again");
      setArticles([]); // needs to be 0??
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="main__hero">
        <h1 className="main__header">What&apos;s going on in the world?</h1>
        <p className="main__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={handleSearchSubmit} />
      </main>

      {isLoading && (
        <section className="main__loader">
          {" "}
          <Preloader
            isLoading={isLoading}
            articleCount={articles.length}
          />{" "}
        </section>
      )}
      {!isLoading && hasSearched && articles.length === 0 && (
        <section className="main__loader">
          <Preloader articleCount={0} hasSearched={hasSearched} />
        </section>
      )}

      {articles.length > 0 && (
        <SearchResults
          articles={articles}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
          currentSearchTerm={currentSearchTerm}
          isLoggedIn={isLoggedIn}
        />
      )}
    </>
  );
}

export default Main;
