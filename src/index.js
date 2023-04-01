import React from "react";
import ReactDOM from "react-dom/client";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import "bootstrap-css-only/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";
import { CategoryScale, Chart, registerables } from "chart.js";
// import Chart from 'chart.js/auto';
Chart.register(...registerables);

Chart.register(CategoryScale);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
