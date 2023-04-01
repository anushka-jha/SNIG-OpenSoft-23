import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    // <div className="col-sm-4">
    //   <h5 className="text-center">Contact Us</h5>
    //   <Form>
    //     <div className="form-group mb-2">
    //       <input type="text" className="form-control" placeholder="Name" />
    //     </div>
    //     <div className="form-group mb-2">
    //       <input
    //         type="email"
    //         className="form-control"
    //         placeholder="Enter email"
    //       />
    //     </div>
    //     <Button type="button" className="btn btn-primary mb-1">
    //       Submit
    //     </Button>
    //   </Form>
    // </div>
    <div className="card mx-auto w-50" style={{ marginTop: 5 + "em" }}>
      <div className="card-body">
        <Form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Id"
            />
          </div>

          <Link
            className="btn btn-primary"
            to="/dashboard"
            role="button"
            style={{ width: "100%" }}
          >
            Submit
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
