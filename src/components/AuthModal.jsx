import React, { useState } from "react";
import "./AuthModal.css";
import logo from "../assets/WealthWiseIcon.png";
import authImage from "../assets/auth-icon.png"; 
import { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";
import googleIcon from "../assets/continue-with-google.webp";

const AuthModal = ({ type, closeModal }) => {
  const [authType, setAuthType] = useState(type);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      closeModal(); // Close modal on success
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  // Handle Email/Password Login
  const handleAuth = async () => {
    try {
      if (authType === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully!");
      }
      closeModal();
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={closeModal}>✖</button>
        
        <div className="auth-content">
          {/* Left Section */}
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
            <button className="google-auth" onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="Google Logo" className="google-logo" />
            </button>
          </div>

          {/* Right Section */}
          <div className="auth-image">
            <img src={authImage} alt="Financial Success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
