import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import styles from "./Dialog.module.css";

const Dialog = ({ children, onClose }) => {
  const handleEsc = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEsc, false);
    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, [handleEsc]);

  // Lock body overflow when the dialog opens
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <motion.div
      className={styles.backdrop}
      role="presentation"
      onClick={handleBackgroundClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.dialog}
        role="dialog"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button
          className={styles.closeButton}
          role="button"
          aria-label="close"
          title="Close"
          onClick={onClose}
        >
          &#x2715;
        </button>
        {children}
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default Dialog;
