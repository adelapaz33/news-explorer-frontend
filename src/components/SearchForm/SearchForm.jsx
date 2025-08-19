import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setError("Please enter a keyword");
      return;
    }
    setError("");
    onSearch(searchTerm);

    setSearchTerm("");
  };
  return (
    <form action="" className="search__bar" onSubmit={handleSearch}>
      <input
        type="text"
        className="search__bar-input"
        placeholder="Enter Topic"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search__bar-button">
        Search
      </button>
      {error && <p className="search__bar-error">{error}</p>}
    </form>
  );
}
// SearchForm component should handle:
// - Form submission (handleSearch with preventDefault())
// - Input validation (checking if field is empty)
// - Managing its own input state
// - Showing validation error messages

// Main component should handle:
// - Making the API call to NewsAPI
// - Managing the articles state
// - Managing loading state
// - Rendering the search results
export default SearchForm;
