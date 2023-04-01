import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const TransactionHistory = () => {
  return (
    <div
      div
      className="flex-container"
      style={{ marginTop: "50px", display: "flex", borderRadius: "10px" }}
    >
      <Sidebar />
      <div className="w-100">
        <table
          class="table table-bordered container mt-5 border"
          style={{ marginLeft: "30px" }}
        >
          <thead className="text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Transaction ID</th>

              <th scope="col">Amount</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th scope="row">1</th>
              <td>123647d8</td>
              <td>- 20000</td>

              <td>Loan Payment</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>1345897u</td>
              <td>+ 5674</td>
              <td>Shopping</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>345678hd</td>
              <td>- 57890</td>
              <td>Bill Payment</td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>1345897u</td>
              <td>+ 674</td>
              <td>Shopping</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>345678hd</td>
              <td>- 5780</td>
              <td>Bill Payment</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>123647d8</td>
              <td>- 2000</td>

              <td>Loan Payment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
