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
    <div className="fluid-container col data-blocks " style={{textAlign:"center"}}>
      <div className="card" style={{height:"200px",backgroundColor:"#ECF2FF"}}>
        <div className="card-body">
          <p style={{color:"#4B56D2",fontWeight:"500"}}>Your Portfolio Balance</p>
          <h4 className="card-title">$ 171,473</h4>
        </div>
      </div>
    </div>

    <div className="fluid-container col data-blocks" style={{textAlign:"center"}}>
      <div className="card" style={{height:"200px",backgroundColor:"#ECF2FF"}}>
        <div className="card-body">
          <p style={{color:"#4B56D2",fontWeight:"500"}}>Your Income</p>
          <h4 className="card-title">$ 80,000</h4>
        </div>
      </div>
    </div>
  </div>

  <div className="row mx-auto column" style={{textAlign:"center"}}>
    <div className="fluid-container col data-blocks ">
      <div className="card" style={{height:"200px",backgroundColor:"#ECF2FF"}}>
        <div className="card-body">
          <p style={{color:"#4B56D2",fontWeight:"500"}}>Your Expenditure</p>
          <h4 className="card-title">$ 120,000</h4>
        </div>
      </div>
    </div>

    <div className="fluid-container col data-blocks" style={{textAlign:"center"}}>
      <div className="card" style={{height:"200px",backgroundColor:"#ECF2FF"}}>
        <div className="card-body">
          <p style={{color:"#4B56D2",fontWeight:"500"}}>Last Month</p>
          <h4 className="card-title">$ 140,000</h4>
        </div>
      </div>
    </div>
  </div>
  </div>

  );
}
