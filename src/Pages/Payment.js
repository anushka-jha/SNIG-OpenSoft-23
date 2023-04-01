<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 7d4907fcf3f5665b692834aa9bcda370b2255f48
import React, { useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { MDBBtn } from "mdb-react-ui-kit";

function Payment() {
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
    <>
      <div
        className="card mx-auto"
        style={{ marginTop: 10 + "em", width: "50%" }}
      >
        <h2 className="card-header text-center">Enter recipient details</h2>
        <div className="card-body">
          <Form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Account number"
              />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="IFSC" />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient name"
              />
            </div>
            <MDBBtn
              color="dark"
              style={{
                borderRadius: "4px",
                width: "100%",
                margin: "0",
                marginBottom: "5px",
              }}
            >
              Debit or Credit Card
            </MDBBtn>

            <PayPalScriptProvider options={{ "client-id": "test" }}>
              <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Payment;
<<<<<<< HEAD
>>>>>>> 1a85427e2ccc85aebc76d9c431715f5c0315a107
=======
>>>>>>> 7d4907fcf3f5665b692834aa9bcda370b2255f48
