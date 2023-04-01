import React from "react";
import { Link } from "react-router-dom";
//import "../assests/Dashboard.css";

function Navbar(props) {
  return (
    <nav className="navbar d-flex mx-auto" style={{paddingTop:"10px",paddingBottom:"10px",marginTop:"8px",backgroundColor:"#655DBB",
    width: "99%",   
    position: "relative",
    top: "10px",
    borderRadius: "2%"}}>
      <a className="navbar-brand h3" style={{marginLeft:0.5+'em',color:"white"}} href="/">Shiftbank</a>
      <div
        onMouseEnter={props.handleEnter}
        onMouseLeave={props.handleLeave}
        style={{ height: "100%" }}
      >
        <a className="navbar-brand">
          <img
            className="img-fluid"
            src="profilepic.webp"
            alt="Profile"
            width="50"
            height="50"
          />{" "}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
