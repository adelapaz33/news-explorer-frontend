import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ setActiveModal }) {
  return (
    <div className="nav">
      <Link className="nav__link-home" to="/">
        Home
      </Link>
      <button
        className="nav__button-sign-in"
        onClick={() => setActiveModal("login")}
      >
        Sign In
      </button>
    </div>
  );
}

// add "saved articles" link to nav when user is logged in

export default Navigation;
