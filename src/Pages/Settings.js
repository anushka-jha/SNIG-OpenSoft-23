import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  return (
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
  );
};

export default Settings;
