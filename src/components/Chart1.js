import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

const Chart1 = () => {
  const [data] = useState({
    labels: [
      "21/01/2023",
      "22/01/2023",
      "24/01/2023",
      "25/01/2023",
      "28/01/2023",
      "29/03/2023",
      "02/04/2023",
    ],
    datasets: [
      {
        label: "Total Debit",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "Total Credit",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <CDBContainer style={{ width: "40%", height: "100vh" }}>
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart1;
