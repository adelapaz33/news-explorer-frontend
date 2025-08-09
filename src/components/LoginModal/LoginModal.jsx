import ModalWithForm from "../ModalWithForm/ModalWithForm";
function LoginModal({ onClose, setActiveModal }) {
  return (
    <ModalWithForm
      title="Sign In"
      buttonText="Sign In"
      // isOpen={isOpen}
      onClose={onClose}
      // onSubmit={handleSubmit}
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
          // onChange={handleEmail}
          // value={formData.email}
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
          // onChange={handlePassword}
          // value={formData.password}
        />
      </label>
      {/* {errorMessage && <p className="modal__error">{errorMessage}</p>} */}
    </ModalWithForm>
  );
}

export default LoginModal;
