import React from "react";
import { Link } from "react-router-dom";
import "../assests/Dashboard.css";

function ModalDiv(props) {
  return (
    <div
      className="modal-div"
      onMouseEnter={props.handleEnter}
      onMouseLeave={props.handleLeave}
    >
      <p style={{ color: "#828bb2", fontSize: "12px" }}>Welcome Admin!</p>
      <p style={{ fontSize: "12px" }}>Trevor James</p>
      <hr />
      <Link
        to="/createprofile"
        style={{ fontSize: "12px", textDecoration: "none", color: "white" }}
      >
        <p>My Profile</p>
      </Link>
      <a
        href="#"
        style={{ fontSize: "12px", textDecoration: "none", color: "white" }}
      >
        <p>Settings</p>
      </a>
      <Link
        to="/"
        style={{ fontSize: "12px", textDecoration: "none", color: "white" }}
      >
        <p>Log Out</p>
      </Link>
    </div>
  );
}

export default ModalDiv;
