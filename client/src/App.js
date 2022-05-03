import React, { useState, useContext, useEffect } from "react";
import Login from "./pages/Login";
import "./App.css";
import Register from "./pages/Register";
import { UserContext } from "./contexts/UserContext";
import Home from "./pages/Home";

function App() {
  const { isUserLoggedIn } = useContext(UserContext);

  const [showPage, setShowPage] = useState("login");

  return (
    <div className="App">
      {isUserLoggedIn ? (
        <Home />
      ) : showPage === "login" ? (
        <Login setShowPage={setShowPage} />
      ) : (
        <Register setShowPage={setShowPage} />
      )}
    </div>
  );
}

export default App;
