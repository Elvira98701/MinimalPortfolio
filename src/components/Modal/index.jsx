import { useEffect } from "react";

import { motion } from "framer-motion";

import { Button } from "@components";

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
          <Button square onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
