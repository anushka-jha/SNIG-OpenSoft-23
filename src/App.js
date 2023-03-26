import React from "react";
// import Register from "./Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <Dashboard/>
      <div className="App">
        <Login /> 
      </div>
      

    </div>
    
  );
}

export default App;
