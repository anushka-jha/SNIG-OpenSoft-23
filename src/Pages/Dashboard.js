import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Cards from "../components/Cards.jsx";
import Navbar from "../components/Navbar.jsx";
import ModalDiv from "../components/ModalDiv.js";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "../assests/Dashboard.css";

const Dashboard = () => {
  const [isHover, setIsHover] = useState(false);

  const handleEnter = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  return (
    <div>
      <Navbar handleEnter={handleEnter} handleLeave={handleLeave} />
      {isHover && (
        <ModalDiv handleEnter={handleEnter} handleLeave={handleLeave} />
      )}
      <div
        className="flex-container"
        style={{ marginTop: "50px", display: "flex" }}
      >
        <Sidebar />
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
