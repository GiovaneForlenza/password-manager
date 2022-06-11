import React, { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

import "../../style/components/modal.scss";
import AlterSavedServicePasswordModal from "./AlterSavedServicePassword/AlterSavedServicePasswordModal";
import NoAlterationServiceModal from "./AlterSavedServicePassword/NoAlterationServiceModal";
import PasswordSavedModal from "./AlterSavedServicePassword/PasswordSavedModal";
import DeleteServiceModal from "./DeleteServiceModal/DeleteServiceModal";
import PasswordAddedModal from "./PasswordAddedModal";
import SimpleModal from "./SimpleModal";

function ShowModal() {
  const { showModal, setShowModal, modalToShow } = useContext(ModalContext);

  return (
    <>
      {showModal ? (
        <div className="modal-container">
          <div
            className="background"
            onClick={(e) => {
              setShowModal(false);
            }}
          ></div>

          {modalToShow === "alterSavedServicePassword" ? (
            <AlterSavedServicePasswordModal />
          ) : modalToShow === "simpleModal" ? (
            <SimpleModal />
          ) : modalToShow === "deleteServiceModal" ? (
            <DeleteServiceModal />
          ) : (
            <div className="modal">Modal</div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default ShowModal;
