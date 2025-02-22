import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import courseBG from "../assets/CourseBg.webp";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      {/* Expand Button */}
      <button className="expand-btn">⛶</button>

      {/* Hero Image Section */}
      <div className="hero-image-container">
        <img src={courseBG} alt="Hero" className="hero-image" />
        <div className="hero-overlay">
          <h2>Your journey to financial mastery starts here.</h2>
          <button className="start-learning-btn" onClick={() => navigate("/learn")}>
            Start learning
          </button>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="progress-section">
        <span className="progress-title">Personal Finance Basics</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "50%" }}></div>
        </div>
        <p className="progress-text">6/12 lessons</p>
        <div className="start-now-btn-container">
          <span className="start-now-btn-title">Complete your first lessons and earn 500 tokens.</span>
          <button className="start-now-btn" onClick={() => navigate("roadmap/Introduction%20of%20Debit%20and%20Credit%20Cards")}>
            Start now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
