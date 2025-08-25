import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoute";
import { SavedArticlesProvider } from "../../Context/SavedArticlesContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { authorize, checkToken } from "../../utils/auth";
import SavedArticles from "../SavedArticles/SavedArticlesPage";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import { HeaderStyleContext } from "../../Context/HeaderStyleContext";
import "./App.css";
import SavedArticlesPage from "../SavedArticles/SavedArticlesPage";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const isModalOpen = activeModal !== "";
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("token");
  };

  return (
    <HeaderStyleContext.Provider value={{ isHomePage }}>
      <SavedArticlesProvider>
        <div className="page">
          <div className="page__content">
            {isHomePage ? (
              <div className="page__photo-background">
                <Header
                  setActiveModal={setActiveModal}
                  isLoggedIn={isLoggedIn}
                  currentUser={currentUser}
                  handleLogout={handleLogout}
                  isModalOpen={isModalOpen}
                />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Main
                        isLoggedIn={isLoggedIn}
                        currentSearchTerm={currentSearchTerm}
                        setCurrentSearchTerm={setCurrentSearchTerm}
                      />
                    }
                  />
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
                      <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <SavedArticlesPage
                          currentUser={currentUser}
                          isLoggedIn={isLoggedIn}
                          currentSearchTerm={currentSearchTerm}
                        />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </>
            )}
            {isHomePage && <About />}

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
      </SavedArticlesProvider>
    </HeaderStyleContext.Provider>
  );
}

export default App;
