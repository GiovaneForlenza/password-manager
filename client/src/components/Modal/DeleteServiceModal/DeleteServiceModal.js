import React, { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";

import ModalHeader from "../ModalHeader";
import PrimarySecondaryButton from "../../PrimarySecondaryButton";
function DeleteServiceModal() {
  const { setShowModal, setModalToShow } = useContext(ModalContext);
  return (
    <div className="modal">
      <ModalHeader text={"Are you sure you want to delete this service?"} />
      <div className="content">
        <div className="buttonsContainer">
          <PrimarySecondaryButton
            text={"Delete"}
            btnClass={"alert"}
            onClick={() => setShowModal(false)}
          />
          <PrimarySecondaryButton
            text={"Close"}
            btnClass={"secondary"}
            onClick={() => setShowModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default DeleteServiceModal;
