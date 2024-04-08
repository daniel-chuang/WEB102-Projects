import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between p-5 bg-blue-500 fixed top-0 left-0 w-[100%] h-[10%]">
      <h1 className="text-white">Ithaca Event Finder</h1>
      <div className="links">
        <Link className="text-white mx-2" to="/">
          Home
        </Link>
        <Link className="text-white mx-2" to="/about">
          About
        </Link>
        <Link className="text-white mx-2" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
