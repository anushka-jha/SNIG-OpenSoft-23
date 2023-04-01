import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";

function mainpage() {
  return (
    <div style={{overflowY:"auto"}}>
      <nav className="navbar navbar-dark" style={{backgroundColor:"#655DBB"}}>
          <a className="navbar-brand" href="#" style={{marginLeft:"10px"}}>
              <img src="data:image/png;base64,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" width="40" height="40" alt=""></img>
          </a> 
          <span className="navbar-text" style={{marginRight:"10px"}}>
              <Link to="/login">LOGIN</Link>
              <a> / </a>
              <Link to="/signup">SIGNUP</Link>
          </span>
      </nav>
      <div className="card mb-3 mt-3 mx-auto border-0" style={{width:"30%",position:"relative"}}>
          <img className="card-img-top" src="main.jpg" alt="Card image cap" style={{opacity:"0.2"}}></img>
          <div style={{textAlign:"center",position:"absolute",top:"9vh",fontSize:"5vh"}}>Empowering finance, one shift at a time with ShiftBank.</div>
      </div>

    <div className="row mx-auto" style={{overFlowY:"scroll"}}>
        <div className="col-sm-4">
            <div className="card mb-5">
                <div className="card-body text-center" >
                    <img src="house.png" alt="house-icon" style={{height:"20vh",padding:"10px"}}/>
                    <p className="card-text text-center"><span style={{fontSize:"5vh",color:"#10316B"}}>9.15%</span><span style={{color:"#748DA6"}}>P.A*</span></p>
                </div>
            </div>
        </div>
      
        <div className="col-sm-4">
            <div className="card mb-5">
                <div className="card-body text-center">
                <img src="education.png" alt="house-icon" style={{height:"20vh",padding:"10px"}}/>
                    <p className="card-text text-center"><span style={{fontSize:"5vh",color:"#10316B"}}>9.15%</span><span style={{color:"#748DA6"}}>P.A*</span></p>
                </div>
            </div>
        </div>
       
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body text-center">
                <img src="agreement.png" alt="house-icon" style={{height:"20vh",padding:"10px"}}/>
                    <p className="card-text text-center"><span style={{fontSize:"5vh",color:"#10316B"}}>10.90%</span><span style={{color:"#748DA6"}}>P.A*</span></p>
                </div>
            </div>
          </div>
    </div>
          <Footer/>
        </div>

       
      
  )
}

export default mainpage;
