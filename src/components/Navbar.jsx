import React, { useState } from "react";
import logo from "../assets/images/bakers-inn-category 1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-bar">
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Baker's Inn" />
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/about-us">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/kids">Kids Corner</Link>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
