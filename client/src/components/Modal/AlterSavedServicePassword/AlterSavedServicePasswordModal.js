import React, { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { SelectedServiceContext } from "../../../contexts/SelectedServiceContext";

import ModalHeader from "../ModalHeader";
import PrimarySecondaryButton from "../../PrimarySecondaryButton";
import FormLine from "./FormLine";

import axios from "axios";
import { GlobalFunctionsContext } from "../../../contexts/GlobalFunctionsContext";

function AlterSavedServicePasswordModal() {
  const { service, setService, selectedService } = useContext(
    SelectedServiceContext
  );
  const { setShowModal, setModalToShow } = useContext(ModalContext);
  const { getCurrentDateTime } = useContext(GlobalFunctionsContext);

  function handleCancelClick() {
    setShowModal(false);
  }
  async function handleSaveClick() {
    const passwordId = service.passwordId;
    const serviceName = selectedService.serviceName;
    const username = selectedService.username;
    const email = selectedService.email;
    const link = selectedService.link;
    const password = selectedService.password;
    const dateTime = getCurrentDateTime();
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/updateServiceInfo`,
      {
        passwordId,
        serviceName,
        username,
        email,
        link,
        password,
        dateTime,
      }
    );

    if (response.data === "completed") {
      // setShowModal(false);
      setModalToShow("saveCompleted");
      setService(selectedService);
    }
  }

  return (
    <div className="modal">
      <ModalHeader text={"Do you want to update this service?"} />
      <div className="content">
        {service.serviceName !== selectedService.serviceName && (
          <FormLine
            service={service}
            selectedService={selectedService}
            title={"Service name"}
            info={"serviceName"}
          />
        )}
        {service.username !== selectedService.username && (
          <FormLine
            service={service}
            selectedService={selectedService}
            title={"Username"}
            info={"username"}
          />
        )}
        {service.email !== selectedService.email && (
          <FormLine
            service={service}
            selectedService={selectedService}
            title={"Email"}
            info={"email"}
          />
        )}
        {service.password !== selectedService.password && (
          <FormLine
            service={service}
            selectedService={selectedService}
            title={"Password"}
            info={"password"}
          />
        )}
        {service.link !== selectedService.link && (
          <FormLine
            service={service}
            selectedService={selectedService}
            title={"Link"}
            info={"link"}
          />
        )}
        <div className="buttonsContainer">
          <PrimarySecondaryButton
            text={"Save"}
            onClick={handleSaveClick}
            btnClass={"primary"}
          />
          <PrimarySecondaryButton
            text={"Cancel"}
            onClick={handleCancelClick}
            btnClass={"secondary"}
          />
        </div>
      </div>
    </div>
  );
}

export default AlterSavedServicePasswordModal;
