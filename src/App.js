import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from "./Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Pages/Footer"

function App() {
  return (
    <div style={{ backgroundColor: "#f7faff"}}>
      <Dashboard/>
      <div className="App">
        <Login /> 
      </div>

    </div>
    
  );
}

export default App;
