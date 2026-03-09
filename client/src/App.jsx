import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SendMessage from "./pages/SendMessage";
import Navbar from "./components/Navbar";

function App(){
  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/:username" element={<SendMessage/>} />
      </Routes>

    </Router>
  );
}

export default App;