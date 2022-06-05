import React, { useState, createContext } from "react";

export const SelectedServiceContext = createContext();

export const SelectedServiceContextProvider = (props) => {
  const [service, setService] = useState({});
  const [selectedService, setSelectedService] = useState({});
  return (
    <SelectedServiceContext.Provider
      value={{ service, setService, selectedService, setSelectedService }}
    >
      {props.children}
    </SelectedServiceContext.Provider>
  );
};
