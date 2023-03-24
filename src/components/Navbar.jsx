import React from "react";
import "../assests/Dashboard.css";

function Navbar(props) {
  return (
    <nav className="navbar top">
      <span className="navbar-brand mb-0 h1 brand">Finance</span>
      <div
        style={{ height: "100%" }}
        onMouseEnter={props.handleEnter}
        onMouseLeave={props.handleLeave}
      >
        <img
          className="profile-photo img-fluid"
          src="../images/profile.jpg"
          alt="Profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;
