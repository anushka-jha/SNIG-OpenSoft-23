import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import ModalDiv from "../components/ModalDiv";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assests/Dashboard.css";

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
      <div className="flex-container" style={{ marginTop: "50px" }}>
        <Sidebar />
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
