import "./Navigation.css";
import { Link } from "react-router-dom";
import logoutIcon from "../../assets/logout.svg";
function Navigation({ setActiveModal, isLoggedIn, currentUser }) {
  return (
    <div className="nav">
      <Link className="nav__link-home" to="/">
        Home
      </Link>
      {!isLoggedIn && (
        <button
          type="button"
          className="nav__button-sign-in"
          onClick={() => setActiveModal("login")}
        >
          Sign In
        </button>
      )}
      {isLoggedIn && (
        <div className="nav__logged-in-opts">
          <Link to="/saved-articles" className="nav__saved-articles-btn">
            Saved Articles
          </Link>
          <button type="button" className="nav__logout">
            {currentUser.name}
            <img
              src={logoutIcon}
              alt="Logout Icon"
              className="nav__logout-icon"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
