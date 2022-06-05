import React, { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import ModalHeader from "../ModalHeader";
import PrimarySecondaryButton from "../../PrimarySecondaryButton";

function PasswordSavedModal() {
  const { setShowModal } = useContext(ModalContext);
  return (
    <div className="modal">
      <ModalHeader text={"The service was updated successfully"} />
      <div className="content">
        <div className="buttonsContainer">
          <PrimarySecondaryButton
            text={"Close"}
            btnClass={"primary"}
            onClick={() => setShowModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default PasswordSavedModal;
