import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";
import Navbar from "../components/Navbar";
import ModalDiv from "../components/ModalDiv";
import { Button } from "react-bootstrap";

const Analytics = () => {
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
        style={{ marginTop: "40px", display: "flex" }}
      >
        <Sidebar />

        <Chart1 />
        <Chart2 />
      </div>
</div>
  );
};

export default Analytics;
