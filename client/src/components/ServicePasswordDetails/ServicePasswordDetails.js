import React, { useContext, useEffect, useState } from "react";

import "../../style/components/service-password-details.scss";

import { SelectedServiceContext } from "../../contexts/SelectedServiceContext";

import { AiOutlineArrowLeft } from "react-icons/ai";
import FormLineInput from "../FormLineInput";
import FormLine from "./FormLine";
import { ModalContext } from "../../contexts/ModalContext";

function ServicePasswordDetails({ setWhatToShow }) {
  const { service, selectedService, setSelectedService } = useContext(
    SelectedServiceContext
  );
  const { setShowModal, setModalToShow } = useContext(ModalContext);

  useEffect(() => {
    setSelectedService(service);
  }, []);
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    if (service !== selectedService) {
      setShowModal(true);
      setModalToShow("alterSavedServicePassword");
    } else {
      setShowModal(true);
      setModalToShow("noAlterationServicePassword");
    }
  }

  return (
    <div className="service-details-container">
      <div className="header">
        <div className="left" onClick={() => setWhatToShow("vault")}>
          <AiOutlineArrowLeft />
        </div>
        <div className="right">
          <div className="service-title">Edit Service</div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <FormLine
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            lineTitle={"Service Name"}
            whatToEdit={"serviceName"}
          />
          <FormLine
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            lineTitle={"Username"}
            whatToEdit={"username"}
          />

          <FormLine
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            lineTitle={"Email"}
            whatToEdit={"email"}
          />
          <FormLine
            isPassword={true}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            lineTitle={"Password"}
            whatToEdit={"password"}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
        <div className="container">
          <FormLine
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            lineTitle={"URL / Link"}
            whatToEdit={"link"}
          />
        </div>
        <div className="line">
          <FormLineInput
            inputType={"submit"}
            buttonText={"Save service"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicePasswordDetails;
