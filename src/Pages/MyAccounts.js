import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ModalDiv from "../components/ModalDiv";
import Navbar from "../components/Navbar";

const MyAccount = () => {
  const [isHover, setIsHover] = useState(false);

  const handleEnter = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };
  return (
    <div >
      <Navbar handleEnter={handleEnter} handleLeave={handleLeave} />
      {isHover && (
        <ModalDiv handleEnter={handleEnter} handleLeave={handleLeave} />
      )}
      <div
        className="flex-container"
        style={{ marginTop: "50px", display: "flex" }}
      >
        <Sidebar />
        <div className="w-100">
          <table
            class="table table-bordered container mt-5 border mx-auto"
            style={{ marginLeft: "30px"}}
          >
            <thead className="text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Account Number</th>
                <th scope="col">Bank Name</th>
                <th scope="col">IFSC Code</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <Button
            type="button"
            className="btn btn-primary"
            style={{ width: "90%", marginLeft: "5%" }}
          >
            <Link to="/bankform" style={{ color: "white", textDecoration: "none" }}>
              Add new account
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
