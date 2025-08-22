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

export default SearchForm;
