import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Mainpage from "./Pages/mainpage";

import Profile from "./Pages/Create-Profile";

import UpdateProfile from "./Pages/Create-Profile";

import Analytics from "./Pages/Analytics";
import BankForm from "./Pages/bankform";
import Settings from "./Pages/Settings";
import MyAccount from "./Pages/MyAccounts";
import AccountStatement from "./Pages/AccountStatement";
import Contact from "./Pages/Contact";
import TransactionHistory from "./Pages/TransactionHistory";
import Payment from "./Pages/Payment";
import Expenditure from "./Pages/expenditure";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/updateprofile" element={<Profile />} />

        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="/analytics" element={<Analytics />} />
        <Route path="/bankform" element={<BankForm />} />
        <Route path="/accountstatement" element={<AccountStatement />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/transactionhistory" element={<TransactionHistory />} />
        <Route path="/expenditure" element={<Expenditure />} />
      </Routes>
    </div>
  );
};
export default App;
