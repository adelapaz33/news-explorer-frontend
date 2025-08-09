import "./Footer.css";
import gitHubLogo from "../../assets/github.svg";
import facebookLogo from "../../assets/facebook_icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2025 Supersite, Powered by News API</p>

      <div className="footer__content">
        <div className="footer__nav">
          <Link className="footer__link" to="/">
            Home
          </Link>
          <a
            href="https://tripleten.com/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>

        <div className="footer__social">
          <a
            href="https://github.com/adelapaz33"
            className="footer__icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubLogo} alt="GitHub Icon" className="footer__icon" />
          </a>
          <a
            href="https://www.facebook.com/"
            className="footer__icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookLogo}
              alt="Facebook Icon"
              className="footer__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
