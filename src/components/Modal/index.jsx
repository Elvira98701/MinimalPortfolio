import { useEffect } from "react";

import { motion } from "framer-motion";

import { Button, IconClose } from "@components";

import styles from "./Modal.module.scss";
import { useModal } from "./ModalContext";

export const Modal = () => {
  const { isOpen, closeModal, content } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        className={styles.modalBody}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.4,
          damping: 6,
          stiffness: 50,
          restDelta: 0.001,
        }}
      >
        {content}
        <div className={styles.modalButton}>
          <Button square onClick={closeModal} type="button">
            <IconClose />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
