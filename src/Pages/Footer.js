import React from "react";
//import { Container, Row, Col, Nav } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-dark text-white mt-5"
      style={{ position: "absolute", bottom: "0", width: "100%" }}
    >
      <div className="row mx-auto">
        
        <div className="col-2">
          <h6>Links</h6>
        </div>
        <div className="col-2">  
          <Link to="/" style={{ color: "white"}}>Home</Link>
        </div> 
        <div className="col-2">
            <a href="#" style={{ color: "white"}}>About Us</a>
        </div>
        <div className="col-2">
            <a href="#" style={{ color: "white"}}>Services</a>
        </div>
        <div className="col-2">
            <Link to="/contact" style={{ color: "white"}}>Contact Us</Link>
        </div>
      </div>
      <p></p>

      <div className="row mx-auto mb-2">
        <div className="col-2">
          <h6>Follow Us</h6>
        </div>   
        <div className="col-1">
        <img src="logo192.png" width="20" height="20" alt=""></img>
        </div>   
        <div className="col-1">
        <img src="logo192.png" width="20" height="20" alt=""></img>
        </div>
        <div className="col-1">
        <img src="logo192.png" width="20" height="20" alt=""></img>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
