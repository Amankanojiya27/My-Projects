import React from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { CiChat2 } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="icon">
        <CiHome size={25} />
      </Link>
      <Link to="/about" className="icon">
        <CiUser size={25} />
      </Link>
      <Link to="/projects" className="icon">
        <CiViewList size={25} />
      </Link>
      <Link to="/contact" className="icon">
        <CiChat2 size={25} />
      </Link>
    </nav>
  );
}
