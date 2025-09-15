import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/menu.svg";
import menuIconDark from "../../assets/menuDark.svg";
import { useState } from "react";
import { useHeaderStyle } from "../../Context/HeaderStyleContext";
import menuClose from "../../assets/close-btn.svg";

function Header({
  setActiveModal,
  isLoggedIn,
  currentUser,
  handleLogout,
  isModalOpen,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isHomePage } = useHeaderStyle();
  const headerClass = `header ${
    isHomePage ? "header__title--light" : "header__title--dark"
  } ${isMobileMenuOpen ? "header--mobile-open" : ""}`;
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isLightTheme = isMobileMenuOpen || isHomePage;
  return (
    <header className={headerClass}>
      <Link
        className={`header__title ${isLightTheme ? "header__title--light" : "header__title--dark"}`}
        to="/"
      >
        NewsExplorer
      </Link>

      <button className="header__menu-btn" onClick={toggleMobileMenu}>
        <img
          className={`header__menu-btn-icon ${isMobileMenuOpen ? "header__menu-btn-icon--close" : ""}`}
          src={
            isMobileMenuOpen ? menuClose : isHomePage ? menuIcon : menuIconDark
          }
          alt={isMobileMenuOpen ? "Close Menu Icon" : "Menu Drop Down Icon"}
        />
      </button>

      {isMobileMenuOpen && (
        <div className="header__overlay" onClick={closeMobileMenu}></div>
      )}
      <Navigation
        setActiveModal={setActiveModal}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
        handleLogout={handleLogout}
      />
    </header>
  );
}

export default Header;
