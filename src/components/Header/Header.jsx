import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
function Header({ setActiveModal }) {
  return (
    <header className="header">
      <Link className="header__title" to="/">
        NewsExplorer
      </Link>
      <Navigation setActiveModal={setActiveModal} />
    </header>
  );
}

export default Header;
