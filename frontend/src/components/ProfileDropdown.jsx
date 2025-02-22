import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileDropdown.css";
import profileIcon from "../assets/ProfileIcon.png";
import AuthModal from "./AuthModal";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");
  const navigate = useNavigate();

  const handleAuthClick = (type) => {
    setAuthType(type);
    setModalOpen(true);
    setOpen(false);
  };

  const handleProfileClick = () => {
    setOpen(false);
    navigate("/profile");
  };

  return (
    <>
      <div className="profile-container">
        <button className="profile-button" onClick={() => setOpen(!open)}>
          <img src={profileIcon} alt="Profile" className="profile-img" />
        </button>

        {open && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={handleProfileClick}>View Profile</button>
            <button className="dropdown-item" onClick={() => {
              localStorage.removeItem("user");
              window.location.reload();
            }}>
              Logout
            </button>
          </div>
        )}
      </div>

      {modalOpen && <AuthModal type={authType} closeModal={() => setModalOpen(false)} />}
    </>
  );
};

export default ProfileDropdown;
