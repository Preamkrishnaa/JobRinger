import React from "react";
import "./Header.css";
import logoImage from "./logo.png"; // Replace with your actual image path

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-image" />
          <h1 className="logo-text">JobRinger</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
