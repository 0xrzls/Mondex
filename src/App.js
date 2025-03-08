import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Swap from "./components/Swap";
import Bridge from "./components/Bridge";
import Navbar from "./components/Navbar";
import WalletConnect from "./components/WalletConnect";
import SentryErrorBoundary from "./components/SentryErrorBoundary"; // Tambahkan ini
import "./App.css";

function App() {
  return (
    <SentryErrorBoundary>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Swap />} />
            <Route path="/bridge" element={<Bridge />} />
          </Routes>
          <WalletConnect />
        </div>
      </Router>
    </SentryErrorBoundary>
  );
}

export default App;
