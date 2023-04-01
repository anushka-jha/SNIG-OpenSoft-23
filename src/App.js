import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Mainpage from "./Pages/mainpage";
import CreateProfile from "./Pages/Create-Profile";
import Analytics from "./Pages/Analytics";
import BankForm from "./Pages/bankform";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/bankform" element={<BankForm />} />
      </Routes>
    </div>
  );
}
export default App;
