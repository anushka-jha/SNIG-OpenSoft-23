import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalDiv from "../components/ModalDiv";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Settings = () => {
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
          className="card mx-auto w-50"
          style={{ marginTop: 10 + "em", height: "30vh" }}
        >
          <div>
            <div className="card-body">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter Password"
                />
              </div>
              <Button
                type="button"
                className="btn btn-primary"
                style={{ width: "50%" }}
              >
                <Link
                  to="/dashboard"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Update Password
                </Link>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Settings;
