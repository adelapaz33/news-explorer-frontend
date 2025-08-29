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
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="main__hero">
        <h2 className="main__header">What's going on in the world?</h2>
        <p className="main__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={handleSearchSubmit} />
      </section>

      {isLoading && (
        <section className="main__loader">
          {" "}
          <Preloader articleCount={articles.length} />{" "}
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
