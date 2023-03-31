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
      {/* <Container> */}
      <div className="row mx-auto">
        {/* <div className="col-sm-4">
            <h5 className='text-center'>Contact Us</h5>
            <Form>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group mb-2">
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>
                <Button type="button" className="btn btn-primary mb-1">Submit</Button>
            </Form>
          </div> */}
        <div className="col-sm-4">
          <h5 className="text-center">Links</h5>
          <p className="text-center">
            <Link to="/">Home</Link>
          </p>
          <p className="text-center">
            <a href="#">About Us</a>
          </p>
          <p className="text-center">
            <a href="#">Services</a>
          </p>
          <p className="text-center">
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
        <div className="col-sm-4 text-center">
          <h5>Follow Us</h5>
          <p>Social media links go here</p>
        </div>
        {/* <Col md={4} className="mb-3">
            <h5 className="mb-3">Follow Us</h5>
            <p>Social media links go here</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="mb-3">Follow Us</h5>
            <p>Social media links go here</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="mb-3">Follow Us</h5>
            <p>Social media links go here</p>
          </Col> */}
      </div>
      {/* </Container> */}
    </footer>
  );
}

export default Footer;
