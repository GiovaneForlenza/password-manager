import React, { useState, createContext } from "react";

export const PasswordContext = createContext();

export const PasswordContextProvider = (props) => {
  return (
    <PasswordContext.Provider value={{}}>
      {props.children}
    </PasswordContext.Provider>
  );
};
