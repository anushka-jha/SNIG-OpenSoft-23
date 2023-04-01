import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModalDiv from "../components/ModalDiv";

const Bankform = () => {
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
        <div className="card mx-auto w-50" style={{ marginTop: 7 + "em" ,height:"100%"}}>
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
              >
                Submit
              </Button>
              <p></p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bankform;
