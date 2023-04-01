import React from "react";
//import { Container, Row, Col, Nav } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className=" text-white mt-5"
      style={{ position: "absolute", width: "100%",backgroundColor:"#091353" }}
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
        <img src="fb.png" width="20" height="20" alt="fb-img" style={{color:"white"}}></img>
        </div>   
        <div className="col-1">
        <img src="insta.png" width="20" height="20" alt="insta-img"></img>
        </div>
        <div className="col-1">
        <img src="twitter.png" width="20" height="20" alt="twitter-img"></img>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
