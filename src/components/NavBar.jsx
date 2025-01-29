import React from "react";
import "./NavBar.css";
import logo from "../assets/WealthWiseIcon.png";
import profileIcon from "../assets/profileIcon.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Wealth Wise Logo" className="logo-img" />
        <span className="logo-text">Wealth Wise </span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Learn</a>
        <a href="#">Insights</a>
      </div>

      {/* XP, Tokens, and Profile */}
      <div className="nav-right">
        <div className="xp-box">
          <span>⭐ 2,740 XP</span>
        </div>
        <div className="token-box">
          <span>💎 320 Token</span>
        </div>
        <div className="profile-icon">
            <img src={profileIcon} alt="Profile Logo" className="profile-img" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
