import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
function Main() {
  return (
    <>
      <section className="main__hero">
        <h2 className="main__header">What's going on in the world?</h2>
        <p className="main__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </section>
    
    </>
  );
}

export default Main;
