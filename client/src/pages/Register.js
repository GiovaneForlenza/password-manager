import React, { useContext } from "react";
import "../style/pages/register.scss";
import { ErrorHandlingContext } from "../contexts/ErrorHandlingContext";

import axios from "axios";

const bcrypt = require("bcryptjs");

function Register({ setShowPage }) {
  const { areLoginOrRegisterInputFieldsValid } =
    useContext(ErrorHandlingContext);

  function handleClick() {
    setShowPage("login");
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (areLoginOrRegisterInputFieldsValid("register")) {
      let username = document.getElementById("register-username").value;
      let password = document.getElementById("register-password").value;
      const salt = await bcrypt.genSalt();
      let saltPassword = await bcrypt.hash(password, salt);
      axios.post(`${process.env.REACT_APP_SERVER_URL}/registerUser`, {
        username,
        saltPassword,
      });
      alert("Account was registered. You can now log in");
      // username = " ";
      // password = " ";
    }
  }

  return (
    <div className="register-container">
      <div className="page-title-container">
        <div className="title">Register</div>
      </div>
      <form className="form-container">
        <div className="line">
          <div className="input-container">
            <input
              type="text"
              placeholder=" "
              id="register-username"
              required
            />
            <span htmlFor="">Username</span>
          </div>
          <div className="error username hidden" id="register-username-error">
            Username is required
          </div>
        </div>
        <div className="line">
          <div className="input-container">
            <input type="password" placeholder=" " id="register-password" />
            <span htmlFor="">Password</span>
          </div>
          <div className="error password hidden" id="register-password-error">
            Password is required
          </div>
        </div>
        <div className="line">
          <div className="button-container" onClick={(e) => handleRegister(e)}>
            Register
          </div>
          <div className="create-acc-container">
            Already have an account? <span onClick={handleClick}>Login</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
