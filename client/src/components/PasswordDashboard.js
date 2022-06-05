import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

import CreatePassword from "../components/CreatePassword";

import "../style/components/password-dashboard.scss";
import PasswordVault from "./PasswordVault";
import ServicePasswordDetails from "./ServicePasswordDetails/ServicePasswordDetails";
import ShowModal from "./Modal/ShowModal";

function PasswordDashboard({ whatToShow, setWhatToShow }) {
  const { userId, sortingBy, sortingAsc } = useContext(UserContext);

  const [retrievedServices, setRetrievedServices] = useState({});

  let retrievedStoredPasswords;
  async function getStoredPasswords() {
    retrievedStoredPasswords = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/getStoredPasswordsFromUser`,
      { userId }
    );
    setRetrievedServices(retrievedStoredPasswords.data);
  }

  function sortPasswords() {
    let temp;
    if (sortingAsc) {
      temp = retrievedServices.sort((a, b) =>
        a[sortingBy] > b[sortingBy] ? 1 : -1
      );
    } else {
      temp = retrievedServices.sort((a, b) =>
        a[sortingBy] < b[sortingBy] ? 1 : -1
      );
    }
    // setRetrievedServices(temp);
  }

  useEffect(() => {
    getStoredPasswords();
    // sortPasswords();
  }, [whatToShow]);

  return (
    <div className="password-dashboard-container">
      <ShowModal />
      {whatToShow === "vault" ? (
        <PasswordVault
          retrievedServices={retrievedServices}
          setWhatToShow={setWhatToShow}
          getStoredPasswords={getStoredPasswords}
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
