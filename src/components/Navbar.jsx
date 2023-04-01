import React from "react";
//import "../assests/Dashboard.css";

function Navbar(props) {
  return (
    <nav className="navbar d-flex mx-auto" style={{padding:"0",marginTop:"8px", backgroundColor:"white",
    width: "99%",   
    position: "relative",
    top: "10px",
    borderRadius: "2%"}}>
      <a className="navbar-brand h3" style={{marginLeft:0.5+'em'}} href="#">Appname</a>
      <div
        onMouseEnter={props.handleEnter}
        onMouseLeave={props.handleLeave}
        style={{height:"100%"}}
      >
       <a className="navbar-brand">
        <img
          className="img-fluid"
          src="profile.jpg"
          alt="Profile" width="50" height="50"
        /> </a>
      </div>
    </nav>
  );
}

export default Navbar;
