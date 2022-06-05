import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalToShow, setModalToShow] = useState("");

  const [modalText, setModalText] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalIcon, setModalIcon] = useState("");
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        modalToShow,
        setModalToShow,
        modalText,
        setModalText,
        modalHeader,
        setModalHeader,
        modalIcon,
        setModalIcon,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
