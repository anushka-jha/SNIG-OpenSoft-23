import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Cards from "../components/Cards.jsx";
import Navbar from "../components/Navbar.jsx";
import ModalDiv from "../components/ModalDiv.js";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "../assests/Dashboard.css";

const Expenditure = () => {
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
        style={{ marginTop: "50px", display: "flex" }}
      >
        <Sidebar />
        
      <div className="w-100 mt-5">
      <div className="row mx-auto" style={{marginBottom:"5%"}}>
        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 
      


      </div>

       <div className="row mx-auto" style={{marginBottom:"5%"}}>
        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 5</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 6</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 
      


      </div> 

      <div className="row mx-auto" style={{marginBottom:"5%"}}>
        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 5</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-4">
          <div className="card" style={{height:"100px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 6</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 
      


      </div>

      </div> 

    
      </div>
    </div>
  );
};

export default Expenditure;
