import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
function Header({ setActiveModal, isLoggedIn, currentUser }) {
  return (
    <header className="header">
      <Link className="header__title" to="/">
        NewsExplorer
      </Link>
      <Navigation
        setActiveModal={setActiveModal}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      />
    </header>
  );
}

export default Header;
