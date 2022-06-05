import React, { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import ModalHeader from "../ModalHeader";
import PrimarySecondaryButton from "../../PrimarySecondaryButton";

function NoAlterationServiceModal() {
  const { setShowModal } = useContext(ModalContext);
  return (
    <div className="modal">
      <ModalHeader text={"Please update the service before saving it"} />
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

export default NoAlterationServiceModal;
