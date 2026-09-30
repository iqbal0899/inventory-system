import { useEffect } from "react";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import styles from "../../css/modal.module.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  showClose = true,
  closeOnOverlay = true,
  footer,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (
      closeOnOverlay &&
      event.target === event.currentTarget
    ) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={handleOverlayClick}
    >
      <div
        className={`${styles.modal} ${styles[size]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className={styles.header}>
          <h2 id="modal-title">
            {title}
          </h2>

          {showClose && (
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Tutup modal"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className={styles.body}>
          {children}
        </div>

        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "extraLarge",
  ]),
  showClose: PropTypes.bool,
  closeOnOverlay: PropTypes.bool,
  footer: PropTypes.node,
};

export default Modal;