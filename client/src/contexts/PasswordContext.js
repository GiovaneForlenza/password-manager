import React, { useState, createContext } from "react";

export const PasswordContext = createContext();

export const PasswordContextProvider = (props) => {
  const [previousColor, setPreviousColor] = useState(-1);
  return (
    <PasswordContext.Provider value={{ previousColor, setPreviousColor }}>
      {props.children}
    </PasswordContext.Provider>
  );
};
