import React from "react";
import { NavLink } from "react-router-dom";
import { BsHouse, BsHouseFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className=" flex justify-between  h-16 p-2 bg-base-100 border-b">
      <h3 className=" text-xl font-bold color-blue">
        TechTrends Ltd <span>⚙️</span>
      </h3>
      <div className="flex space-x-4">
        <NavLink to={"/"} className={" btn btn-ghost btn-sm"}>
          <BsHouseFill /> Home
        </NavLink>
        <NavLink to={"/about"} className={" btn btn-ghost btn-sm"}>
          <BsHouseFill /> About
        </NavLink>
        <NavLink to={"/contact"} className={" btn btn-ghost btn-sm"}>
          <BsHouseFill /> Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
