import React from "react";
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
      <a
        href="#"
        style={{ fontSize: "12px", textDecoration: "none", color: "white" }}
      >
        <p>My Profile</p>
      </a>
      <a
        href="#"
        style={{ fontSize: "12px", textDecoration: "none", color: "white" }}
      >
        <p>Settings</p>
      </a>
      <a
        href="#"
        style={{ fontSize: "12px", textDecoration: "none", color: "white" }}
      >
        <p>Log Out</p>
      </a>
    </div>
  );
}

export default ModalDiv;
