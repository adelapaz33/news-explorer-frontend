import "./Navigation.css";
import { Link } from "react-router-dom";
import logoutIcon from "../../assets/logout.svg";
import logoutIconDark from "../../assets/logoutIconDark.svg";
import { useHeaderStyle } from "../../Context/HeaderStyleContext";

function Navigation({
  setActiveModal,
  isLoggedIn,
  currentUser,
  isMobileMenuOpen,
  closeMobileMenu,
  handleLogout,
}) {
  const { isHomePage } = useHeaderStyle();
  const navClass = isHomePage ? "nav nav--light" : "nav nav--dark";
  return (
    <nav
      className={`${navClass} ${isMobileMenuOpen ? "nav--mobile-open" : ""}`}
    >
      <Link className="nav__link-home" to="/" onClick={closeMobileMenu}>
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
          <button type="button" className="nav__logout" onClick={handleLogout}>
            {currentUser?.name || "User"}
            <img
              src={isHomePage ? logoutIcon : logoutIconDark}
              alt="Logout Icon"
              className="nav__logout-icon"
            />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
