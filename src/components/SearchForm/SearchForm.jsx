import "./SearchForm.css";
function SearchForm() {
  return (
    <form action="" className="search__bar">
      <input
        type="text"
        className="search__bar-input"
        placeholder="Enter Topic"
      />
      <button type="submit" className="search__bar-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
