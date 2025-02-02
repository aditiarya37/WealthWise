import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import heroImage from "/src/assets/landing-image.jpg";
import NavBar from "../NavBar";

const LandingPage = ({ setShowAuthModal }) => {
    return (
      <>
        <NavBar />
        <div className="landing-container-lp">
          <div className="hero-section-lp">
            <div className="hero-text-lp">
              <h1>
                Master Fintech with <br /><span className="highlight">WEALTHWISE</span>
              </h1>
              <h2>Your Gateway to Financial <br /> Innovation</h2>
  
              <div className="cta-buttons">
                <button className="enroll-btn" onClick={() => setShowAuthModal(true)}>
                  Enroll Now
                </button>
                <button className="explore-btn">
                  Explore
                </button>
              </div>
            </div>
  
            <div className="hero-image-container-lp">
              <img src={heroImage} alt="Wealth Wise Hero" className="hero-image-lp" />
            </div>
          </div>
        </div>
      </>
    );
  };

export default LandingPage;
