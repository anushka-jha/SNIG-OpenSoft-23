import React from "react";
import { Link } from "react-router-dom";

function ModalDiv(props) {
  return (
    <div
      style={{
        position: "absolute",
        right: "35px",
        height: "200px",
        width: "180px",
        padding: "20px",
        backgroundColor: "#4d4f5c",
        color: "white",
        borderRadius: "2%",
        textAlign: "end",
        zIndex: 2,
      }}
      onMouseEnter={props.handleEnter}
      onMouseLeave={props.handleLeave}
    >
      <p style={{ fontSize: "12px" }}>Welcome Admin!</p>
      <p style={{ fontSize: "12px" }}>Username</p>
      <hr />
      <Link
        to="/updateprofile"
        style={{ color: "white", fontSize: "12px", textDecoration: "none" }}
      >
        <p>My Profile</p>
      </Link>
      <Link
        to="/settings"
        style={{ color: "white", fontSize: "12px", textDecoration: "none" }}
      >
        <p>Settings</p>
      </Link>
      <Link
        to="/"
        style={{ color: "white", fontSize: "12px", textDecoration: "none" }}
      >
        <p>Log Out</p>
      </Link>
    </div>
  );
}

export default ModalDiv;
