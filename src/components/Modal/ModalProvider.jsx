import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (content) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setContent(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>
      {children}
    </ModalContext.Provider>
  );
};
