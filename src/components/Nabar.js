import React, { useState } from "react";
import { Link } from "react-router-dom";
import WalletConnect from "./WalletConnect";

const Navbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const toggleMore = () => setIsMoreOpen(!isMoreOpen);

  return (
    <nav className="navbar flex justify-between items-center px-4 py-3">
      <div className="flex items-center">
        <img src="/logo.png" alt="Modex Logo" className="w-10 h-10 mr-2" />
        <span className="font-semibold text-xl">Modex DEX</span>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/swap">Swap</Link>
        <Link to="/farms">Farms</Link>
        <Link to="/bridge">Bridge</Link>
        <div className="relative">
          <button onClick={toggleMore} className="more-btn">
            <i className="fa-duotone fa-regular fa-angle-right"></i> More
          </button>
          {isMoreOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-secondary border border-gray-700 rounded shadow-lg">
              <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-primary">Telegram</a>
              <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-primary">Discord</a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-primary">Twitter</a>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden">
        <WalletConnect />
      </div>
      <div className="hidden md:block">
        <WalletConnect />
      </div>
    </nav>
  );
};

export default Navbar;
