import { useState } from "react";
import { authorize } from "../../utils/auth";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
function LoginModal({ onClose, setActiveModal, handleLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleEmail = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };

  const isValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";
  const handlePassword = (e) => {
    setFormData((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    authorize(formData.email, formData.password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        handleLogin(res);
        onClose();
      })
      .catch((err) => {
        setErrorMessage("Invalid email or password.");
      });
  };
  return (
    <ModalWithForm
      title="Sign In"
      buttonText="Sign In"
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      footerContent={
        <>
          <span className="modal__register-or">or </span>
          <button
            type="button"
            className="modal__register-btn"
            onClick={() => setActiveModal("signup")}
          >
            Sign Up
          </button>
        </>
      }
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          required
          onChange={handleEmail}
          value={formData.email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handlePassword}
        />
      </label>
      {errorMessage && <p className="modal__error">{errorMessage}</p>}
    </ModalWithForm>
  );
}

export default LoginModal;
