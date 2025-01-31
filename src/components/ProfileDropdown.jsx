import React, { useState } from "react";
import "./ProfileDropdown.css";
import profileIcon from "../assets/ProfileIcon.png";
import AuthModal from "./AuthModal"; // Import the modal

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  const handleAuthClick = (type) => {
    setAuthType(type);
    setModalOpen(true);
    setOpen(false);
  };

  return (
    <>
      <div className="profile-container">
        <button className="profile-button" onClick={() => setOpen(!open)}>
          <img src={profileIcon} alt="Profile" className="profile-img" />
        </button>

        {open && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => handleAuthClick("login")}>Login</button>
            <button className="dropdown-item" onClick={() => handleAuthClick("signup")}>Signup</button>
          </div>
        )}
      </div>

      {modalOpen && <AuthModal type={authType} closeModal={() => setModalOpen(false)} />}
    </>
  );
};

export default ProfileDropdown;
