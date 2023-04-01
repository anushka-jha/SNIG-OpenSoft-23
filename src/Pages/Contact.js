import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h2
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "10px" }}
      >
        CONTACT US
      </h2>

      <div className="card mx-auto w-50" style={{ marginTop: 5 + "em" }}>
        <div className="card-body">
          <Form>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Id"
              />
            </div>
            <div class="form-group mb-2">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
            </div>

            <Link
              className="btn btn-primary"
              to="/"
              role="button"
              style={{ width: "100%" }}
            >
              Submit
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
