import React, { useState } from "react";
import Login from "./pages/Login";
import "./App.css";
import Register from "./pages/Register";

function App() {
  const [showPage, setShowPage] = useState("login");
  return (
    <div className="App">
      {showPage === "login" ? (
        <Login setShowPage={setShowPage} />
      ) : (
        <Register setShowPage={setShowPage} />
      )}
    </div>
  );
}

export default App;
