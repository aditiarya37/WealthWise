import React, { useState, useEffect } from "react";
import "./AuthModal.css";
import logo from "../assets/WealthWiseIcon.png";
import authImage from "../assets/auth-icon.png";
import googleIcon from "../assets/continue-with-google.webp";

const AuthModal = ({ closeModal }) => {
  const [authType, setAuthType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleAuth = () => {
    console.log(`User ${authType} successful!`);
    closeModal(); // Redirect to main page
  };

  const handleGoogleLogin = () => {
    console.log("Google login successful!");
    closeModal(); // Redirect to main page
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={closeModal}>✖</button>

        <div className="auth-content">
          <div className="auth-form">
            <div className="auth-header">
              <img src={logo} alt="Wealth Wise" className="auth-logo" />
              <h1>Wealth Wise</h1>
              <button 
                className="switch-auth-btn" 
                onClick={() => setAuthType(authType === "login" ? "signup" : "login")}
              >
                {authType === "login" ? "Sign Up" : "Login"}
              </button>
            </div>

            <h3>{authType === "login" ? "Login" : "Sign Up"}</h3>

            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />

            {authType === "login" && <p className="forgot-password">Forgot your Password?</p>}

            <button className="auth-btn" onClick={handleAuth}>
              {authType === "login" ? "Login" : "Sign Up"}
            </button>

            <div className="separator">OR</div>
            <button className="google-auth" onClick={handleGoogleLogin}>
              <img src={googleIcon} alt="Google Logo" className="google-logo" />
            </button>
          </div>

          <div className="auth-image">
            <img src={authImage} alt="Financial Success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
