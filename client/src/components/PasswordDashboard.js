import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

import "../style/components/password-dashboard.scss";

function PasswordDashboard() {
  const { userId } = useContext(UserContext);

  const [retrievedPasswords, setRetrievedPasswords] = useState({});

  let retrievedStoredPasswords;
  async function getStoredPasswords() {
    retrievedStoredPasswords = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/getStoredPasswordsFromUser`,
      { userId }
    );
    console.log(retrievedStoredPasswords.data);
    setRetrievedPasswords(retrievedStoredPasswords.data);
    console.log(retrievedPasswords);
  }

  useEffect(() => {
    getStoredPasswords();
  }, []);

  return (
    <div className="password-dashboard-container">
      <div className="passwords-container">
        {retrievedPasswords.length > 0 ? (
          retrievedPasswords.map((password, id) => {
            return (
              <div className="password" key={id}>
                <p>{password.serviceName}</p>
                <p>{password.username}</p>
                <p>{password.password}</p>
                <p>{password.dateTimeCreated}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h1>No stored passwords</h1>
        )}
      </div>
    </div>
  );
}

export default PasswordDashboard;
