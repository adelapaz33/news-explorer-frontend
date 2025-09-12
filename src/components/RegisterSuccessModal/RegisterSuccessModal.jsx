import ModalWithForm from "../ModalWithForm/ModalWithForm";
function RegisterSuccessModal({ isOpen, onClose, setActiveModal }) {
  return (
    <ModalWithForm
      title="Registration successfully Completed!"
      isOpen={isOpen}
      onClose={onClose}
      // onSubmit={handleSubmit}
      footerContent={
        <div className="modal__footer-register-success">
          <button
            type="button"
            className="modal__register-btn"
            onClick={() => setActiveModal("login")}
          >
            Sign In
          </button>
        </div>
      }
    ></ModalWithForm>
  );
}

export default RegisterSuccessModal;
