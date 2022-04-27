import React from "react";
import "../style/pages/register.scss";

function Register({ setShowPage }) {
  function handleClick() {
    setShowPage("login");
  }
  return (
    <div className="register-container">
      <div className="page-title-container">
        <div className="title">Register</div>
      </div>
      <form className="form-container">
        <div className="line">
          <div className="input-container">
            <input type="text" placeholder=" " />
            <span htmlFor="">Username</span>
          </div>
          {/* <div className="error username">Username not found</div> */}
        </div>
        <div className="line">
          <div className="input-container">
            <input type="password" placeholder=" " />
            <span htmlFor="">Password</span>
          </div>
          {/* <div className="error password">Password is incorrect</div> */}
        </div>
        <div className="line">
          <div className="button-container">Register</div>
          <div className="create-acc-container">
            Already have an account? <span onClick={handleClick}>Login</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
