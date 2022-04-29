import React, { useState, createContext } from "react";

export const ErrorHandlingContext = createContext();

export const ErrorHandlingContextProvider = (props) => {
  function areLoginOrRegisterInputFieldsValid(caller) {
    let username = document.getElementById(`${caller}-username`);
    let password = document.getElementById(`${caller}-password`);
    if (username.value === "") {
      document
        .getElementById(`${caller}-username-error`)
        .classList.remove("hidden");
    } else {
      document
        .getElementById(`${caller}-username-error`)
        .classList.add("hidden");
    }
    if (password.value === "") {
      document
        .getElementById(`${caller}-password-error`)
        .classList.remove("hidden");
    } else {
      document
        .getElementById(`${caller}-password-error`)
        .classList.add("hidden");
    }
    if (username.value !== "" && password.value !== "") {
      return true;
    }
    return false;
  }
  return (
    <ErrorHandlingContext.Provider
      value={{ areLoginOrRegisterInputFieldsValid }}
    >
      {props.children}
    </ErrorHandlingContext.Provider>
  );
};
