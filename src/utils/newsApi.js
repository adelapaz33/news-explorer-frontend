const baseUrl = "https://newsapi.org/v2/everything";
const apiKey = "fa474810ae1c4d669a5278d6c84cd7b1";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
export const getNewsArticles = (query) => {
  const url = `${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey}&language=en&sortBy=publishedAt&pageSize=20`;
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
