import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css";
import logo from "../assets/WealthWiseIcon.png";
import authImage from "../assets/auth-icon.png";
import googleIcon from "../assets/continue-with-google.webp";

const AuthModal = ({ type, closeModal, onAuthSuccess }) => {
  const [authType, setAuthType] = useState(type);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  const handleAuth = async () => {
    console.log("User authenticated successfully!");
    localStorage.setItem("user", email);
    closeModal(); // Close the modal
    onAuthSuccess(); // ✅ Trigger authentication success
    navigate("/"); // ✅ Redirect to the home page
  };

  const handleClose = () => {
    closeModal();  // Close the modal
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={handleClose}>✖</button>

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

            <div className="toggle-auth">
              <h3>{authType === "login" ? "Login" : "Sign Up"}</h3>
            </div>

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
            <button className="google-auth">
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
