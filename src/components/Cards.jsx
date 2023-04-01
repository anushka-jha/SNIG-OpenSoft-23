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
    // <div
    //   style={{ display: "flex", width: "100vw" }}
    //   className="fluid-container row"
    // >
    //   <div className="column"><div className="cards fluid-container c1">1</div></div>
    //   <div className="column"><div className="cards fluid-container c2">2</div></div>
    //   <div className="column"><div className="cards fluid-container c3">3</div></div>
    //   <div className="column"><div className="cards fluid-container c4">4</div></div>
      
    // </div>
  <div className="w-100">
  <div className="row mx-auto  column">
      <div className="fluid-container col data-blocks ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">Text 1</p>
        </div>
      </div>
    </div>

    <div className="fluid-container col data-blocks" >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">Text 2</p>
        </div>
      </div>
    </div>

    <div className="fluid-container col data-blocks" >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">Text 3</p>
        </div>
      </div>
    </div>

    <div className="fluid-container col data-blocks">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 4</h5>
          <p className="card-text">Text 4</p>
        </div>
      </div>
    </div>
  
</div>
</div>

  );
}
