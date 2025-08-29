import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles, currentSearchTerm, isLoggedIn }) {
  return (
    <ul className="card-list">
      {articles.map((article) => ( // removed index from here - need to add back? 
        <NewsCard
          key={article.url} // changed article.url to index - need to change back?
          article={article}
          currentSearchTerm={currentSearchTerm}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
