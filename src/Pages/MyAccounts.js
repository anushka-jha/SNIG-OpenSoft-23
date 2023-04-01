import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MyAccount = () => {
  return (
    <div
      div
      className="flex-container"
      style={{ marginTop: "50px", display: "flex", borderRadius: "10px" }}
    >
      <Sidebar />
      <div>
        <table
          class="table table-bordered container mt-5 border "
          style={{ marginLeft: "30px" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Account Number</th>
              <th scope="col">Bank Name</th>
              <th scope="col">IFSC Code</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
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
          style={{ width: "50%", marginLeft: "30px" }}
        >
          <Link to="/bankform" style={{ color: "white" }}>
            Add new account
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MyAccount;
