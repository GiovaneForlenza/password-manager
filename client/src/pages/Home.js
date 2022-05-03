import React, { useState, useEffect, useContext } from "react";
import CreatePassword from "../components/CreatePassword";
import PasswordDashboard from "../components/PasswordDashboard";
import { UserContext } from "../contexts/UserContext";

function Home() {
  const { username, userId } = useContext(UserContext);
  return (
    <div>
      {/* Welcome {username}! */}
      <PasswordDashboard />
    </div>
  );
}

export default Home;
