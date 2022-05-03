import React, { useState, useContext, useEffect } from "react";
import { ErrorHandlingContext } from "../contexts/ErrorHandlingContext";
import FormLineInput from "./FormLineInput";

import "../style/global.scss";

import { UserContext } from "../contexts/UserContext";
import { GlobalFunctionsContext } from "../contexts/GlobalFunctionsContext";

import axios from "axios";
const bcrypt = require("bcryptjs");

function CreatePassword() {
  const { areFormFieldsValid } = useContext(ErrorHandlingContext);
  const { userId } = useContext(UserContext);
  const { getDocumentElementById, getCurrentDateTime, getRandomId } =
    useContext(GlobalFunctionsContext);

  async function handleOnClick() {
    if (
      areFormFieldsValid(
        "create-password",
        [
          "create-password-username",
          "create-password-password",
          "create-password-service-name",
        ],
        [
          "create-password-no-username-error",
          "create-password-no-password-error",
          "create-password-no-service-name-error",
        ]
      )
    ) {
      const passwordId = getRandomId();
      const userIdLogged = userId;
      const username = getDocumentElementById("create-password-username").value;
      const password = getDocumentElementById("create-password-password").value;
      const serviceName = getDocumentElementById(
        "create-password-service-name"
      ).value;

      const salt = await bcrypt.genSalt();
      const encryptedPassword = await bcrypt.hash(password, salt);

      const dateTime = getCurrentDateTime();

      axios.post(`${process.env.REACT_APP_SERVER_URL}/createServicePassword`, {
        passwordId,
        userIdLogged,
        username,
        encryptedPassword,
        serviceName,
        dateTime,
      });
    }
  }

  return (
    <div className="create-password-container">
      <form className="form-container">
        <FormLineInput
          inputType={"text"}
          inputId={"create-password-username"}
          spanText={"Username/Email"}
          errorId={"create-password-no-username-error"}
          errorText={"Username/Email is required."}
        />
        <FormLineInput
          inputType={"password"}
          inputId={"create-password-password"}
          spanText={"Password"}
          errorId={"create-password-no-password-error"}
          errorText={"Password is required."}
        />
        <FormLineInput
          inputType={"text"}
          inputId={"create-password-service-name"}
          spanText={"Service name / Link"}
          errorId={"create-password-no-service-name-error"}
          errorText={"Service Name / Link is required."}
        />
        <FormLineInput
          inputType={"submit"}
          buttonText={"Save Password"}
          onClick={handleOnClick}
        />
      </form>
    </div>
  );
}

export default CreatePassword;
