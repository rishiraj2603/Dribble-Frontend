import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUpPage/SignUp";
import Profile from "./components/ProfilePage/Profile";
import OptionChoose from "./components/OptionPage/OptionChoose";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/option" element={<OptionChoose />} />
      </Routes>
    </div>
  );
};

export default App;
