import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUpPage/SignUp";
import Profile from "./components/ProfilePage/Profile";
import OptionChoose from "./components/OptionPage/OptionChoose";
import Verify from "./components/VerifyPage/Verify";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/option" element={<OptionChoose />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
};

export default App;
