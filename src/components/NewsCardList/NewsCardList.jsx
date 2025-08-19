import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles }) {
  return (
    <ul className="card-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </ul>
  );
}

export default NewsCardList;

// Receives an array of articles
// Maps over them and renders a NewsCard for each
// Handles grid or list layout
