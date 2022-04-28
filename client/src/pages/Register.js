import React from "react";
import "../style/pages/register.scss";
const bcrypt = require("bcryptjs");

function Register({ setShowPage }) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  function handleClick() {
    setShowPage("login");
  }

  function areInputFieldsValid() {
    let areInputFieldsValid = false;
    let username = document.getElementById("register-username");
    let password = document.getElementById("register-password");
    if (username.value === "") {
      document
        .getElementById("register-username-error")
        .classList.remove("hidden");
    } else {
      document
        .getElementById("register-username-error")
        .classList.add("hidden");
    }
    if (password.value === "") {
      document
        .getElementById("register-password-error")
        .classList.remove("hidden");
    } else {
      document
        .getElementById("register-password-error")
        .classList.add("hidden");
    }
    if (username.value !== "" && password.value !== "") {
      return true;
    }

    return areInputFieldsValid;
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (areInputFieldsValid()) {
      let password = document.getElementById("register-password");
      const salt = await bcrypt.genSalt();
      let saltPassword = await bcrypt.hash(password.value, salt);
      console.log(saltPassword);
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
