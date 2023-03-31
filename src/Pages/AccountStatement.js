import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountStatement = () => {
  return (
    <>
      <Form className="container mt-5 border border-dark">
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Bank Account</Form.Label>
          <Form.Control type="number" placeholder="Enter Bank Account Number" />
        </Form.Group>

        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Control type="file" size="lg" />
        </Form.Group>

        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AccountStatement;
