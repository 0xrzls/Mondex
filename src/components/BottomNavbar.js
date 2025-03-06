import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const BottomNavbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  if (!isMobile) return null;
  
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-secondary text-white p-2 flex justify-around md:hidden">
      <Link to="/">
        <i className="fa-duotone fa-solid fa-house-laptop"></i>
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/swap">
        <i className="fa-duotone fa-solid fa-reflect-both"></i>
        <span className="text-xs">Swap</span>
      </Link>
      <Link to="/farms">
        <i className="fa-sharp-duotone fa-solid fa-tractor"></i>
        <span className="text-xs">Farms</span>
      </Link>
      <Link to="/bridge">
        <i className="fa-sharp-duotone fa-solid fa-bridge-suspension"></i>
        <span className="text-xs">Bridge</span>
      </Link>
      <Link to="/more">
        <i className="fa-duotone fa-regular fa-angle-right"></i>
        <span className="text-xs">More</span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;
