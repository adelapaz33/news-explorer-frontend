import { createContext, useContext, useState } from "react";

// this creates the context
const SavedArticlesContext = createContext();

// this is a custom hook
export function useSavedArticles() {
  return useContext(SavedArticlesContext);
}

export function SavedArticlesProvider({ children }) {
  const [savedArticles, setSavedArticles] = useState([]);

  const toggleSaveArticle = (article) => {
    setSavedArticles((prev) => {
      if (prev.some((a) => a.url === article.url)) {
        return prev.filter((a) => a.url !== article.url);
      }
      return [...prev, article];
    });
  };

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, toggleSaveArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  );
}
