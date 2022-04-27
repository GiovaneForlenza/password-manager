import React from "react";
import "../style/pages/login.scss";

function Login({ setShowPage }) {
  function handleClick() {
    setShowPage("register");
  }
  return (
    <div className="login-container">
      <div className="page-title-container">
        <div className="title">Login</div>
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
          <div className="button-container">Login</div>
          <div className="create-acc-container">
            New here? <span onClick={handleClick}>Create an account</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;