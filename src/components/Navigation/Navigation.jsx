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
  const isLightTheme = isMobileMenuOpen || isHomePage;
  return (
    <nav className={`nav ${isMobileMenuOpen ? "nav--mobile-open" : ""} `}>
      <Link
        className={`nav__link-home ${isLightTheme ? "nav__link-home--light" : "nav__link-home--dark"}`}
        to="/"
        onClick={closeMobileMenu}
      >
        Home
      </Link>
      {!isLoggedIn && (
        <button
          type="button"
          className="nav__button-sign-in"
          onClick={() => {
            closeMobileMenu();
            setActiveModal("login");
          }}
        >
          Sign In
        </button>
      )}
      {isLoggedIn && (
        <div className="nav__logged-in-opts">
          <Link
            to="/saved-articles"
            className={`nav__saved-articles-btn ${isLightTheme ? "nav__saved-articles-btn--light" : "nav__saved-articles-btn--dark"}`}
          >
            Saved Articles
          </Link>
          <button
            type="button"
            className={`nav__logout ${isLightTheme ? "nav__logout--light" : "nav__logout--dark"}`}
            onClick={handleLogout}
          >
            {currentUser?.name || "User"}
            <img
              src={isLightTheme ? logoutIcon : logoutIconDark}
              alt="Logout Icon"
              className={`nav__logout-icon ${isLightTheme ? "nav__logout-icon--light" : "nav__logout-icon--dark"}`}
            />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
