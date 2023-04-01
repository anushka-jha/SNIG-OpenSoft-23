import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";
import Navbar from "../components/Navbar";
import ModalDiv from "../components/ModalDiv";

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
        style={{ marginTop: "50px", display: "flex" }}
      >
        
        <Sidebar />
        <Chart1 />
        <Chart2 />

        

      </div>
      

      {/*<div className="w-100">
      <div className="row mx-auto" style={{marginBottom:"5%"}}>
        <div className="fluid-container col-3">
          <div className="card" style={{height:"200px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-3">
          <div className="card" style={{height:"200px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-3">
          <div className="card" style={{height:"200px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 
      


      </div>

       <div className="row mx-auto" style={{marginBottom:"5%"}}>
        <div className="fluid-container col-3">
          <div className="card" style={{height:"200px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-3">
          <div className="card" style={{height:"200px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 5</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 

        <div className="fluid-container col-3">
          <div className="card" style={{height:"200px"}}>
            <div className="card-body">
              <h5 className="card-title">Card 6</h5>
              <p className="card-text">Text 1</p>
            </div>
          </div>
        </div> 
      


      </div> 
      </div> */}

      
  </div>
    
  );
};

export default Analytics;
