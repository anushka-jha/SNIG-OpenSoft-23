import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Mainpage from "./Pages/mainpage";
import CreateProfile from "./Pages/Create-Profile";
import Analytics from "./Pages/Analytics";
<<<<<<< HEAD
import Payment from "./Pages/Payment";
=======
import BankForm from "./Pages/bankform";
>>>>>>> 588852ca8c9cbfc523f52d1c202ddd16c196150f

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
<<<<<<< HEAD
        <Route path="/payment" element={<Payment />} />

=======
        <Route path="/bankform" element={<BankForm />} />
>>>>>>> 588852ca8c9cbfc523f52d1c202ddd16c196150f
      </Routes>
    </div>
  );
}
export default App;
