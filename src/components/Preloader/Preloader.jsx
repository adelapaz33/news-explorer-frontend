import "./Preloader.css";
import notFound from "../../assets/not-found_v1.svg";
function Preloader({ articleCount, hasSearched, isLoading }) {
  return (
    <div className="preloader">
      {isLoading && (
        <>
          <div className="preloader__circle"></div>
          <p className="preloader__text">Searching for news...</p>
        </>
      )}
      {hasSearched && articleCount === 0 && (
        <div className="preloader__results">
          <img
            src={notFound}
            alt="Microscope"
            className="preloader__results-image"
          />
          <h2 className="preloader__results-header">Nothing Found</h2>
          <p className="preloader__results-text">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      )}
    </div>
  );
}

export default Preloader;
