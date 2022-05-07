import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

import CreatePassword from "../components/CreatePassword";

import "../style/components/password-dashboard.scss";
import PasswordVault from "./PasswordVault";
import ServicePasswordDetails from "./ServicePasswordDetails";

function PasswordDashboard({ whatToShow, setWhatToShow }) {
  const { userId } = useContext(UserContext);

  const [retrievedServices, setRetrievedServices] = useState({});

  let retrievedStoredPasswords;
  async function getStoredPasswords() {
    retrievedStoredPasswords = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/getStoredPasswordsFromUser`,
      { userId }
    );
    setRetrievedServices(retrievedStoredPasswords.data);
  }

  useEffect(() => {
    getStoredPasswords();
  }, [whatToShow]);

  return (
    <div className="password-dashboard-container">
      {whatToShow === "vault" ? (
        <PasswordVault
          retrievedServices={retrievedServices}
          setWhatToShow={setWhatToShow}
        />
      ) : whatToShow === "create" ? (
        <CreatePassword />
      ) : whatToShow === "details" ? (
        <ServicePasswordDetails setWhatToShow={setWhatToShow} />
      ) : null}
    </div>
  );
}

export default PasswordDashboard;
