import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5 className="mb-3">Contact Us</h5>
            <Form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter email"/>
                </div>
                <Button type="button" class="btn btn-primary" style={{width:"5%"}}>Submit</Button>
                </Form>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="mb-3">Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3">
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
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="mb-3">Follow Us</h5>
            <p>Social media links go here</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
