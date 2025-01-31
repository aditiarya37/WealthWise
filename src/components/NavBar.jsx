import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../assets/WealthWiseIcon.png";
import profileIcon from "../assets/profileIcon.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Wealth Wise Logo" className="logo-img" />
        <span className="logo-text">Wealth Wise</span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Learn</a>
        <a href="#">Leaderboard</a>
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
          <img src={profileIcon} alt="Profile" className="profile-img" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
