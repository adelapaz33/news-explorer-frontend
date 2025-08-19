import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { authorize, checkToken } from "../../utils/auth";
import SavedArticles from "../SavedArticles/SavedArticles";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const savedArticles = location.pathname === "/saved-articles";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.error("Token check failed:", err);
          setIsLoggedIn(false);
        });
    }
  }, []);

  const handleLogin = (res) => {
    setIsLoggedIn(true);
    setCurrentUser(res.data);
  };
  return (
    <div className="page">
      <div className="page__content">
        {isHomePage ? (
          <div className="page__photo-background">
            <Header
              setActiveModal={setActiveModal}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
        ) : (
          <>
            <Header
              setActiveModal={setActiveModal}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              isHomePage={isHomePage}
            />

            <Routes>
              <Route
                path="/saved-articles"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    savedArticles={savedArticles}
                  >
                    <SavedArticles />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </>
        )}
        <About />
        <Footer />
      </div>
      {activeModal === "login" && (
        <LoginModal
          onClose={() => setActiveModal("")}
          setActiveModal={setActiveModal}
          handleLogin={handleLogin}
        />
      )}

      {activeModal === "signup" && (
        <RegisterModal
          onClose={() => setActiveModal("")}
          setActiveModal={setActiveModal}
        />
      )}
      {activeModal === "success" && (
        <RegisterSuccessModal
          setActiveModal={setActiveModal}
          onClose={() => setActiveModal("")}
        />
      )}
    </div>
  );
}

export default App;
