import Sidebar from "../components/Sidebar";
import React from "react";
import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";

const Analytics = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <Chart1 />
      <Chart2 />
    </div>
  );
};

export default Analytics;