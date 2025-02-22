import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/WealthWiseIcon.png";
import ProfileDropdown from "./ProfileDropdown";

const NavBar = ({ hideStats }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="#">Insights</Link>
      </div>

      {!hideStats && (
        <div className="nav-right">
          <div className="xp-box"><span>⭐ 2,740 XP</span></div>
          <div className="token-box"><span>💎 320 Token</span></div>
          <ProfileDropdown />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
