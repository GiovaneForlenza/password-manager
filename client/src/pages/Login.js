import React, { useContext } from "react";
import "../style/pages/login.scss";

import axios from "axios";
import { ErrorHandlingContext } from "../contexts/ErrorHandlingContext";

function Login({ setShowPage }) {
  const { areLoginOrRegisterInputFieldsValid } =
    useContext(ErrorHandlingContext);

  function handleClick() {
    setShowPage("register");
  }
  function handleLoginClick() {
    if (areLoginOrRegisterInputFieldsValid("login")) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/getUsers`)
        .then((response) => {
          console.log(response.data);
        });
    }
  }
  return (
    <div className="login-container">
      <div className="page-title-container">
        <div className="title">Login</div>
      </div>
      <form className="form-container">
        <div className="line">
          <div className="input-container">
            <input
              type="text"
              placeholder=" "
              id="login-username"
              autoComplete="off"
            />
            <span htmlFor="">Username</span>
          </div>
          <div className="error username hidden" id="login-username-error">
            Username is required
          </div>
        </div>
        <div className="line">
          <div className="input-container">
            <input
              type="password"
              placeholder=" "
              id="login-password"
              autoComplete="off"
            />
            <span htmlFor="">Password</span>
          </div>
          <div className="error username hidden" id="login-password-error">
            Password is required
          </div>
        </div>
        <div className="line">
          <div className="button-container" onClick={handleLoginClick}>
            Login
          </div>
          <div className="create-acc-container">
            New here? <span onClick={handleClick}>Create an account</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
