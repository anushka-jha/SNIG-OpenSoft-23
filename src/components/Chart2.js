import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

const Chart2 = () => {
  const [data] = useState({
    labels: [
      "21/01/2023",
      "22/01/2023",
      "24/01/2023",
      "27/01/2023",
      "29/01/2023",
      "01/02/2023",
      "02/02/2023",
    ],
    datasets: [
      {
        label: "Large Cash Withdrawals",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "Large cash Deposits",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <CDBContainer style={{ width: "40%", marginTop:"10%", height: "100vh" }}>
      <Line data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart2;
