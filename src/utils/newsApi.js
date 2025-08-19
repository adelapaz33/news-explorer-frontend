const apiKey = import.meta.env.VITE_NEWS_API_KEY;
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
export const getNewsArticles = (query) => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  const formatDate = (date) => date.toISOString().split("T")[0];
  const fromDate = formatDate(sevenDaysAgo);
  const toDate = formatDate(today);
  const baseUrl =
    import.meta.env.MODE === "production"
      ? "https://nomoreparties.co/news/v2/everything"
      : "https://newsapi.org/v2/everything";
  const url = `${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey}&from=${fromDate}&to=${toDate}&pageSize=100&language=en&sortBy=publishedAt`;
  console.log("Fetching from:", url);
  return fetch(url)
    .then(checkResponse)
    .then((data) => {
      return data.articles;
    })
    .catch((error) => {
      console.error("Error fetching news articles:", error);
      return [];
    });
};
