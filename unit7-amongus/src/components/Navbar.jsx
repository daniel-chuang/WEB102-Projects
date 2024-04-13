import React from "react";
import amonguspeeking from "../assets/amonguspeeking.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between py-2 px-10 bg-blue-500 fixed top-0 left-0 h-16 z-50 w-full">
      <div className="flex items-center gap-x-5">
        <img src={amonguspeeking} className="h-16"></img>
        <Link to="/">
          <h1 className="text-2xl text-white">Among Us Game</h1>
        </Link>
      </div>
      <div className="links flex space-x-4">
        <Link className="text-white hover:text-gray-300" to="/">
          The Crew
        </Link>
        <Link className="text-white hover:text-gray-300" to="/newcrew">
          Add Crewmate
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
