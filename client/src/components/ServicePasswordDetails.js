import React, { useContext } from "react";

import "../style/components/service-password-details.scss";

import { SelectedServiceContext } from "../contexts/SelectedServiceContext";

import { AiOutlineArrowLeft } from "react-icons/ai";

function ServicePasswordDetails({ setWhatToShow }) {
  const { service } = useContext(SelectedServiceContext);
  return (
    <div className="service-details-container">
      <div className="header">
        <div className="left" onClick={() => setWhatToShow("vault")}>
          <AiOutlineArrowLeft />
        </div>
      </div>
    </div>
  );
}

export default ServicePasswordDetails;
