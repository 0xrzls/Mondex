import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import Swap from "./components/Swap";
import Farms from "./components/Farms";
import Bridge from "./components/Bridge";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/swap" element={<Swap />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/" element={<h1 style={{textAlign:"center"}}>Welcome to Modex DEX</h1>} />
      </Routes>
      <BottomNavbar />
    </Router>
  );
}

export default App;
