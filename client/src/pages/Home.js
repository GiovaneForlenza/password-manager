import React, { useState, useEffect, useContext } from "react";
import CreatePassword from "../components/CreatePassword";
import PasswordDashboard from "../components/PasswordDashboard";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../contexts/UserContext";

import "../style/pages/home.scss";

function Home() {
  const { username, userId } = useContext(UserContext);
  const [whatToShow, setWhatToShow] = useState("vault");

  return (
    <div className="home-container">
      <Sidebar setWhatToShow={setWhatToShow} whatToShow={whatToShow} />
      <PasswordDashboard
        setWhatToShow={setWhatToShow}
        whatToShow={whatToShow}
      />
    </div>
  );
}

export default Home;
