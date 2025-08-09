import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="page">
      <div className="page__content">
        {isHomePage ? (
          <div className="page__photo-background">
            <Header setActiveModal={setActiveModal} />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
        ) : (
          <>
            <Header setActiveModal={setActiveModal} />
            <Routes>
              <Route path="/" element={<Main />} />
              {/* Add other routes here */}
              {/* this is just a placeholder route */}
            </Routes>
          </>
        )}
        <SearchResults />
        <About />
        <Footer />
      </div>
      {activeModal === "login" && (
        <LoginModal
          onClose={() => setActiveModal("")}
          setActiveModal={setActiveModal}
        />
      )}

      {activeModal === "signup" && (
        <RegisterModal
          onClose={() => setActiveModal("")}
          setActiveModal={setActiveModal}
        />
      )}
    </div>
  );
}

export default App;
