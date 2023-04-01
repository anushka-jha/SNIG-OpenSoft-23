// import React, { useEffect } from "react";
// import axios from "axios";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { MDBBtn } from "mdb-react-ui-kit";

// function Payment() {
//   useEffect(() => {
//     const addPayPalScript = async () => {
//       const { data: clientId } = await axios.get("/api/config/paypal");
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
//       script.async = true;
//       //   script.onload = () => {
//       //     setSdkReady(true)
//       //   }
//       document.body.appendChild(script);
//     };

//     addPayPalScript();
//   }, []);

//   return (
//     <>
//       <div
//         className="card mx-auto"
//         style={{ marginTop: 10 + "em", width: "50%" }}
//       >
//         <h2 className="card-header text-center">Enter recipient details</h2>
//         <div className="card-body">
//           <Form>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Account number"
//               />
//             </div>
//             <div className="form-group">
//               <input type="text" className="form-control" placeholder="IFSC" />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Recipient name"
//               />
//             </div>
//             <MDBBtn
//               color="dark"
//               style={{
//                 borderRadius: "4px",
//                 width: "100%",
//                 margin: "0",
//                 marginBottom: "5px",
//               }}
//             >
//               Debit or Credit Card
//             </MDBBtn>

//             <PayPalScriptProvider options={{ "client-id": "test" }}>
//               <PayPalButtons style={{ layout: "horizontal" }} />
//             </PayPalScriptProvider>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Payment;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { MDBBtn } from "mdb-react-ui-kit";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModalDiv from "../components/ModalDiv";

function Payment() {
  const [isHover, setIsHover] = useState(false);

  const handleEnter = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      //   script.onload = () => {
      //     setSdkReady(true)
      //   }
      document.body.appendChild(script);
    };

    addPayPalScript();
  }, []);

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
        <div
          className="card mx-auto"
          style={{
            marginTop: 10 + "em",
            width: "50%",
            height: "50%",
            
          }}
        >
          <h2 className="card-header text-center">Enter Recipient Details</h2>
          <div className="card-body">
            <Form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Account number"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="IFSC"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Recipient name"
                />
              </div>
              <button
                className = "btn btn-dark"
                
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  margin: "0",
                  marginBottom: "5px",
                }}
              >
                Debit or Credit Card
              </button>

              <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
              </PayPalScriptProvider>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
