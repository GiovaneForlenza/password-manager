import React, { useContext } from "react";
import { ErrorHandlingContext } from "../contexts/ErrorHandlingContext";
import FormLineInput from "./FormLineInput";

import "../style/global.scss";
import "../style/components/create-password.scss";

import { UserContext } from "../contexts/UserContext";
import { GlobalFunctionsContext } from "../contexts/GlobalFunctionsContext";

import { encrypt, decrypt } from "../handlers/EncryptionHandler";

import axios from "axios";
import { PasswordContext } from "../contexts/PasswordContext";
import { ModalContext } from "../contexts/ModalContext";
const bcrypt = require("bcryptjs");

function CreatePassword() {
  const { areFormFieldsValid } = useContext(ErrorHandlingContext);
  const { userId } = useContext(UserContext);
  const { getDocumentElementById, getCurrentDateTime, getRandomId } =
    useContext(GlobalFunctionsContext);
  const { previousColor, setPreviousColor } = useContext(PasswordContext);
  const { setShowModal, setModalToShow } = useContext(ModalContext);

  const colorSelection = [
    "#2E5661",
    "#005DA2",
    "#393483",
    "#038AF1",
    "#80AFBB",
    "#514BC1",
    "#8D8ECA",
    "#A8091D",
    "#6F0569",
    "#320A84",
    "#AA8CEC",
    "#0D9AA5",
    "#7ED5DB",
    "#09D198",
    "#068325",
    "#467406",
  ];

  function getServiceLetterColor() {
    let index = Math.floor(Math.random() * colorSelection.length);
    if (previousColor === -1) {
      setPreviousColor(index);
      return colorSelection[index];
    } else {
      while (index === previousColor) {
        index = Math.floor(Math.random() * colorSelection.length);
      }
      setPreviousColor(index);
      return colorSelection[index];
    }
  }
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
      const email = getDocumentElementById("create-password-email").value;
      const link = getDocumentElementById("create-password-service-link").value;
      const password = getDocumentElementById("create-password-password").value;
      const serviceName = getDocumentElementById(
        "create-password-service-name"
      ).value;

      const salt = await bcrypt.genSalt();
      const encryptedPassword = await bcrypt.hash(password, salt);

      const dateTime = getCurrentDateTime();

      const hexColor = getServiceLetterColor();

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/createServicePassword`,
        {
          passwordId,
          userIdLogged,
          serviceName,
          username,
          email,
          link,
          encryptedPassword,
          dateTime,
          hexColor,
        }
      );

      if (response.data === "completed") {
        setShowModal(true);
        setModalToShow("simpleModal");
        clearFields();
      }
    }
  }

  function clearFields() {
    getDocumentElementById("create-password-username").value = "";
    getDocumentElementById("create-password-email").value = "";
    getDocumentElementById("create-password-service-link").value = "";
    getDocumentElementById("create-password-password").value = "";
    getDocumentElementById("create-password-service-name").value = "";
  }

  return (
    <div className="create-password-container">
      <h1>Save a new Password</h1>
      <form className="form-container">
        <FormLineInput
          inputType={"text"}
          inputId={"create-password-service-name"}
          spanText={"Service name"}
          errorId={"create-password-no-service-name-error"}
          errorText={"Service title is required."}
          required
        />
        <FormLineInput
          inputType={"text"}
          inputId={"create-password-username"}
          spanText={"Username/Login"}
          errorId={"create-password-no-username-error"}
          errorText={"Username/Login is required."}
          required
        />
        <FormLineInput
          inputType={"text"}
          inputId={"create-password-email"}
          spanText={"Email"}
          errorId={"create-password-no-email-error"}
          // errorText={"Email is required."}
          // required
        />
        <FormLineInput
          inputType={"text"}
          inputId={"create-password-service-link"}
          spanText={"Link/URL"}
          errorId={"create-password-no-service-link-error"}
          errorText={"Service title is required."}
          // required
        />
        <FormLineInput
          inputType={"password"}
          inputId={"create-password-password"}
          spanText={"Password"}
          errorId={"create-password-no-password-error"}
          errorText={"Password is required."}
          required
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
