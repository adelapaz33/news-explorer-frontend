import "./Preloader.css";
import notFound from "../../assets/not-found_v1.svg";
function Preloader({ articleCount }) {
  return (
    <div className="preloader">
      <div className="preloader__circle"></div>
      <p className="preloader__text">Searching for news...</p>
      {articleCount === 0 && (
        <div className="preloader__reults">
          <img
            src={notFound}
            alt="Microscope"
            className="preloader__results-image"
          />
          <h2 className="preloader__results-header">Nothing Founder</h2>
          <p className="preloadder__results-text">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      )}
    </div>
  );
}

export default Preloader;
