import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

const Chart2 = () => {
  const [data] = useState({
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <CDBContainer style={{ width: "40%" }}>
      <h3 className="mt-5">Line chart</h3>
      <Line data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart2;