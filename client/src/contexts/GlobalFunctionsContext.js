import React, { useState, createContext } from "react";

export const GlobalFunctionsContext = createContext();

export const GlobalFunctionsContextProvider = (props) => {
  function clearFormFields(caller) {
    if (caller === "login" || caller === "register") {
      document.getElementById(`${caller}-username`).value = "";
      document.getElementById(`${caller}-password`).value = "";
    }
  }

  function removeClass(elementId, className) {
    document.getElementById(elementId).classList.remove(className);
  }
  function addClass(elementId, className) {
    document.getElementById(elementId).classList.add(className);
  }

  function toggleClass(elementId, className) {
    document.getElementById(elementId).classList.toggle(className);
  }

  function getDocumentElementById(elementId) {
    return document.getElementById(elementId);
  }

  function getCurrentDateTime() {
    var currentdate = new Date();
    return `${currentdate.getDate()}/${
      currentdate.getMonth() + 1
    }/${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  }

  function getRandomId() {
    return Math.random().toString(16).slice(2);
  }

  return (
    <GlobalFunctionsContext.Provider
      value={{
        clearFormFields,
        removeClass,
        addClass,
        toggleClass,
        getDocumentElementById,
        getCurrentDateTime,
        getRandomId,
      }}
    >
      {props.children}
    </GlobalFunctionsContext.Provider>
  );
};
