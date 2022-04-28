import React, { useState } from "react";
import Login from "./pages/Login";
import "./App.css";
import Register from "./pages/Register";

function App() {
  const [showPage, setShowPage] = useState("login");
  function validateInputFields(fields) {}
  return (
    <div className="App">
      {showPage === "login" ? (
        <Login
          setShowPage={setShowPage}
          validateInputFields={validateInputFields}
        />
      ) : (
        <Register
          setShowPage={setShowPage}
          validateInputFields={validateInputFields}
        />
      )}
    </div>
  );
}

export default App;
