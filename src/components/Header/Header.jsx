import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/menu.svg";
import menuIconDark from "../../assets/menuDark.svg";
import { useState } from "react";
import { useHeaderStyle } from "../../Context/HeaderStyleContext";

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

  return (
    <header className={headerClass}>
      <Link className={`header__title ${isHomePage ? "header__title--light" : "header__title--dark"}`}to="/">
        NewsExplorer
      </Link>
      {!isModalOpen && (
        <button className="header__menu-btn" onClick={toggleMobileMenu}>
          <img
            className="header__menu-btn-icon"
            src={isHomePage ? menuIcon : menuIconDark}
            alt="Menu Drop Down Icon"
          />
        </button>
      )}
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
