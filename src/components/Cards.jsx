import React from "react";
import "../assests/Card.css"
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
// } from "mdb-react-ui-kit";


export default function Cards() {
  return (
  <div className="w-100">
  <div className="row mx-auto column" style={{marginBottom:"5%"}}>
    <div className="fluid-container col data-blocks ">
      <div className="card" style={{height:"200px"}}>
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">Text 1</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>

    <div className="fluid-container col data-blocks">
      <div className="card" style={{height:"200px"}}>
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">Text 2</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  </div>

  <div className="row mx-auto column">
    <div className="fluid-container col data-blocks ">
      <div className="card" style={{height:"200px"}}>
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">Text 1</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>

    <div className="fluid-container col data-blocks" >
      <div className="card" style={{height:"200px"}}>
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">Text 2</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  </div>

  );
}
