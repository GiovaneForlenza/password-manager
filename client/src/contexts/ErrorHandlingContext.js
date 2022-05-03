import React, { createContext, useContext } from "react";
import { GlobalFunctionsContext } from "./GlobalFunctionsContext";

export const ErrorHandlingContext = createContext();

export const ErrorHandlingContextProvider = (props) => {
  const { removeClass, addClass, getDocumentElementById } = useContext(
    GlobalFunctionsContext
  );

  function areLoginOrRegisterInputFieldsValid(caller) {
    let username = document.getElementById(`${caller}-username`);
    let password = document.getElementById(`${caller}-password`);
    if (username.value === "") {
      document
        .getElementById(
          `${caller}${caller === "login" ? "-no" : ""}-username-error`
        )
        .classList.remove("hidden");
    } else {
      document
        .getElementById(
          `${caller}${caller === "login" ? "-no" : ""}-username-error`
        )
        .classList.add("hidden");
    }
    if (password.value === "") {
      document
        .getElementById(
          `${caller}${caller === "login" ? "-no" : ""}-password-error`
        )
        .classList.remove("hidden");
    } else {
      document
        .getElementById(
          `${caller}${caller === "login" ? "-no" : ""}-password-error`
        )
        .classList.add("hidden");
    }
    if (username.value !== "" && password.value !== "") {
      return true;
    }
    return false;
  }

  function areFormFieldsValid(caller, formFieldsIds, errorIds) {
    let areFormFieldsValid = true;
    formFieldsIds.forEach((formId, id) => {
      let element = getDocumentElementById(formId);
      if (!element.value) {
        removeClass(errorIds[id], "hidden");
        areFormFieldsValid = false;
      } else addClass(errorIds[id], "hidden");
    });

    return areFormFieldsValid;
  }

  return (
    <ErrorHandlingContext.Provider
      value={{ areLoginOrRegisterInputFieldsValid, areFormFieldsValid }}
    >
      {props.children}
    </ErrorHandlingContext.Provider>
  );
};
