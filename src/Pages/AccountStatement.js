import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModalDiv from "../components/ModalDiv";

const AccountStatement = () => {
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
        <Form
          className="container border "
          // className="card mx-auto w-50"
          style={{ marginTop: 10 + "em", height: "30vh", width: "30vw" }}
        >
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <h4>Bank Account</h4>
            <Form.Control
              type="number"
              placeholder="Enter Bank Account Number"
            />
          </Form.Group>

          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control type="file" size="lg" />
          </Form.Group>

          <Button className="mb-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AccountStatement;
