import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
// } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assests/Card.css";

export default function Cards() {
  return (
    <div
      style={{ display: "flex", width: "100vw" }}
      className="fluid-container row"
    >
      <div className="column"><div className="cards fluid-container c1">1</div></div>
      <div className="column"><div className="cards fluid-container c2">2</div></div>
      <div className="column"><div className="cards fluid-container c3">3</div></div>
      <div className="column"><div className="cards fluid-container c4">4</div></div>
      
    </div>
  );
}
