import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function bankform() {
  return (
    <>
      <div className="card mx-auto w-50" style={{ marginTop: 7 + "em" }}>
        <h2 className="card-header text-center">Bank details form</h2>
        <div className="card-body">
          <Form>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Account holder Name"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Bank Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Account Number"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="IFSC code"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                className="form-control mb-2"
                placeholder=" Mobile Number"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Aadhar number"
              />
            </div>

            <Button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%" }}
              href="/dashboard"
            >

              Submit
            </Button>
            <p></p>
          </Form>
        </div>
      </div>
    </>
  );
}

export default bankform;
