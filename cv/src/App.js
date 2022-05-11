import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Reset from "./auth/Reset";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Appcv from "./Appcv";
import Aboutus from "./pages/About-us";
import React from "react";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="Home"  element={<Home />} />
          <Route path="Appcv" element={<Appcv />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
