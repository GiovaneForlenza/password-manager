import React, { useState, createContext } from "react";

export const SelectedServiceContext = createContext();

export const SelectedServiceContextProvider = (props) => {
  const [service, setService] = useState({});
  return (
    <SelectedServiceContext.Provider value={{ service, setService }}>
      {props.children}
    </SelectedServiceContext.Provider>
  );
};
