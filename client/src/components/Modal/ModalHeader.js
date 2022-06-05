import React, { useContext } from "react";

import { AiOutlineClose } from "react-icons/ai";

import { ModalContext } from "../../contexts/ModalContext";

function ModalHeader({ text }) {
  const { setShowModal } = useContext(ModalContext);
  return (
    <div className="header">
      <div className="left" onClick={() => setShowModal(false)}>
        <AiOutlineClose />
      </div>
      <div className="right">
        <div className="modal-title">{text}</div>
      </div>
    </div>
  );
}

export default ModalHeader;
