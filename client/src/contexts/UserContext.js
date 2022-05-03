import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [username, setUsername] = useState("Giovane");
  const [userId, setUserId] = useState("74aedb3d091c6");

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        username,
        setUsername,
        userId,
        setUserId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
