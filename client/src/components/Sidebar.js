import React, { useState, useContext } from "react";

import "../style/components/sidebar.scss";

import { AiOutlinePlus } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { GlobalFunctionsContext } from "../contexts/GlobalFunctionsContext";

function Sidebar({ setWhatToShow, whatToShow }) {
  const [selectedElement, setSelectedElement] = useState("vault");

  const { getDocumentElementById, addClass, removeClass } = useContext(
    GlobalFunctionsContext
  );

  function handleClick(whatShows) {
    setWhatToShow(whatShows);
  }

  return (
    <div className="sidebar-container">
      <div className="line">
        <div className="title">Your password Manager</div>
      </div>
      <div className="line">
        <div
          id="create-password"
          className={`create-new-password-container ${
            whatToShow === "create" && "active"
          }`}
          onClick={() => handleClick("create")}
        >
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <div className="text">Create new</div>
        </div>
      </div>
      <div className="line">
        <div
          className={`my-vault-container ${whatToShow === "vault" && "active"}`}
          id="vault-container"
          onClick={() => setWhatToShow("vault")}
        >
          <div className="icon">
            <BiLockAlt />
          </div>
          <div className="text">My Vault</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
