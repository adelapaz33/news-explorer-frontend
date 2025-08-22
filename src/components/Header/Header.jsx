import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/menu.svg";
import { useState } from "react";
import { useHeaderStyle } from "../../Context/HeaderStyleContext";

function Header({ setActiveModal, isLoggedIn, currentUser, handleLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isHomePage } = useHeaderStyle();
  const headerClass = isHomePage
    ? "header header--light"
    : "header header--dark";
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={headerClass}>
      <Link className="header__title" to="/">
        NewsExplorer
      </Link>
      <button className="header__menu-btn" onClick={toggleMobileMenu}>
        <img
          className="header__menu-btn-icon"
          src={menuIcon}
          alt="Menu Drop Down Icon"
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
