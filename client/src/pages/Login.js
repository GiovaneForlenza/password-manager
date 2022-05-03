import React, { useContext } from "react";

import { ErrorHandlingContext } from "../contexts/ErrorHandlingContext";
import { GlobalFunctionsContext } from "../contexts/GlobalFunctionsContext";
import { UserContext } from "../contexts/UserContext";

import FormLineInput from "../components/FormLineInput";

import "../style/pages/login.scss";
import axios from "axios";

const bcrypt = require("bcryptjs");

function Login({ setShowPage }) {
  const { areLoginOrRegisterInputFieldsValid } =
    useContext(ErrorHandlingContext);
  const { removeClass, addClass, createToken } = useContext(
    GlobalFunctionsContext
  );
  const { setIsUserLoggedIn, setUsername, setUserId } = useContext(UserContext);
  function handleClick() {
    setShowPage("register");
  }

  function clearErrorLabels() {
    addClass("login-wrong-password-error", "hidden");
    addClass("login-no-password-error", "hidden");
    addClass("login-wrong-password-error", "hidden");
    addClass("login-no-password-error", "hidden");
  }
  async function handleLoginClick() {
    clearErrorLabels();
    if (areLoginOrRegisterInputFieldsValid("login")) {
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      const retrievedUser = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/doesUsernameExist`,
        { username }
      );

      //If username exists
      if (retrievedUser.data[0] !== undefined) {
        const hashedPassword = retrievedUser.data[0].password;
        const auth = await bcrypt.compare(password, hashedPassword);
        addClass("login-wrong-username-error", "hidden");
        //If username & password are correct
        let user = {};
        if (auth) {
          user = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/getUserInfo`,
            [username]
          );
          const userId = user.data[0].userId;
          // const username = user.data[0].username;
          addClass("login-wrong-password-error", "hidden");

          setIsUserLoggedIn(true);
          setUserId(userId);
          setUsername(username);

          axios.get(`${process.env.REACT_APP_SERVER_URL}/addCookie`, [userId]);

          //If password is wrong
        } else {
          console.log("wrong password");
          removeClass("login-wrong-password-error", "hidden");
        }

        //If username doesnt exist
      } else {
        removeClass("login-wrong-username-error", "hidden");
      }
    }
  }

  return (
    <div className="login-container">
      <div className="page-title-container">
        <div className="title">Login</div>
      </div>
      <form className="form-container">
        {/* <FormLineInput
          inputType={"text"}
          inputId={"login-username"}
          spanText={"Username"}
          errorId={["login-no-username-error", "login-wrong-username-error"]}
          errorText={[
            "Username is required.",
            "Username does not exist. Try registering it.",
          ]}
        /> */}
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
          <div className="error username hidden" id="login-no-username-error">
            Username is required.
          </div>
          <div
            className="error username hidden"
            id="login-wrong-username-error"
          >
            Username does not exist. Try registering it.
          </div>
        </div>

        {/* <FormLineInput
          inputType={"password"}
          inputId={"login-password"}
          spanText={"Password"}
          errorId={["login-no-password-error", "login-wrong-password-error"]}
          errorText={[
            "Password is required.",
            "Password is incorrect. Please try again.",
          ]}
        /> */}
        <div className="line">
          <div className="input-container">
            <input
              type="password"
              placeholder=" "
              id="login-password"
              autoComplete="off"
              required
            />
            <span htmlFor="">Password</span>
          </div>
          <div className="error username hidden" id="login-no-password-error">
            Password is required.
          </div>
          <div
            className="error username hidden"
            id="login-wrong-password-error"
          >
            Password is incorrect. Please try again.
          </div>
        </div>
        {/* <FormLineInput
          inputType={"submit"}
          buttonText={"Login"}
          onClick={handleLoginClick}
          hasSpan
          spanLabel={"New here?"}
          spanClickableText={"Create an account"}
          spanClick={handleClick}
        /> */}
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
