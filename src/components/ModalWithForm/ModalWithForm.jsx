import "./ModalWithForm.css";
import closeButton from "../../assets/close-btn.svg";
import { useEffect } from "react";
function ModalWithForm({
  title,
  buttonText,
  footerContent,
  children,
  onClose,
  onSubmit,
  isValid,
}) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);
  return (
    <div className="modal modal--opened">
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeButton}
            alt="Close Button"
            className="modal__close-btn"
          />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form onSubmit={onSubmit} action="" className="modal__form">
          {children}
          <div className="modal__button-row">
            {buttonText && (
              <button
                type="submit"
                className="modal__submit"
                disabled={!isValid}
              >
                {buttonText}
              </button>
            )}
            {footerContent && (
              <div className="modal__footer">{footerContent}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
