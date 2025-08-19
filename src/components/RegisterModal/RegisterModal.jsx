import ModalWithForm from "../ModalWithForm/ModalWithForm";
function RegisterModal({ isOpen, onClose, setActiveModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveModal("success");
  };
  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      footerContent={
        <>
          <span className="modal__register-or">or </span>
          <button
            type="button"
            className="modal__register-btn"
            onClick={() => setActiveModal("login")}
          >
            Sign In
          </button>
        </>
      }
    >
      <label htmlFor="emailRegister" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="emailRegister"
          placeholder="Email"
          required
          // onChange={handleEmail}
          // value={formData.email}
        />
      </label>
      <label htmlFor="passwordRegister" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="passwordRegister"
          placeholder="Password"
          required
          // onChange={handlePassword}
          // value={formData.password}
        />
      </label>
      <label htmlFor="nameRegister" className="modal__label">
        Username{" "}
        <input
          type="text"
          className="modal__input"
          id="nameRegister"
          placeholder="Name"
          required
          // onChange={handleNameChange}
          // value={formData.name}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
