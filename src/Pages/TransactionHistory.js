import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModalDiv from "../components/ModalDiv";

const TransactionHistory = () => {
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
        <div className="w-100">
          <table
            class="table table-bordered container mt-5 border mx-auto"
            style={{ marginLeft: "20px" }}
          >
            <thead className="text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Transaction ID</th>

                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>123647d8</td>
                <td>- 20000</td>
                <td>12/12/2011</td>
                <td>12:01:56</td>
                <td>Loan Payment</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>1345897u</td>
                <td>+ 5674</td>
                <td>12/12/2011</td>
                <td>12:01:56</td>
                <td>Shopping</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>345678hd</td>
                <td>- 57890</td>
                <td>12/12/2011</td>
                <td>12:01:56</td>
                <td>Bill Payment</td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>1345897u</td>
                <td>+ 674</td>
                <td>12/12/2011</td>
                <td>12:01:56</td>
                <td>Shopping</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>345678hd</td>
                <td>- 5780</td>
                <td>12/12/2011</td>
                <td>12:01:56</td>
                <td>Bill Payment</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>123647d8</td>
                <td>- 2000</td>
                <td>12/12/2011</td>
                <td>12:01:56</td>
                <td>Loan Payment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
