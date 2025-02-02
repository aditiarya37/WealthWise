import React from "react";
import NavBar from "../NavBar";
import "./ProfilePage.css";
import profileIcon from "../../assets/profile-icon.png";

const ProfilePage = () => {
  return (
    <>
        <NavBar />
        <div className="profile-container-pp">
        <div className="profile-card">
            <div className="profile-header">
            <img
                src= {profileIcon} 
                alt="Profile"
                className="profile-image"
            />
            <img
                src="/gold-league-withoutbg.png"  // Ensure badge.png is in the public folder
                alt="Badge"
                className="overlay-image"
            />
            </div>
            <div className="profile-details">
            <h2>Personal Details</h2>
            <p><strong>USERNAME</strong></p>
            <p><strong>NAME:</strong> John Doe</p>
            <p><strong>EMAIL ID:</strong> johndoe@example.com</p>
            <p><strong>TOKENS:</strong> 320</p>
            <p><strong>MY LEAGUE:</strong> GOLD</p>
            </div>
        </div>

        <div className="learning-section">
            <div className="learning-box">
            <h3>CURRENTLY LEARNING</h3>
            <p>What are Debit and Credit?</p>
            <button className="resume-button">RESUME</button>
            </div>
            <div className="learning-box">
            <h3>COMING NEXT</h3>
            <p>What is Personal Finance?</p>
            <button className="start-button">START</button>
            </div>
        </div>
        </div>
    </>
  );
};

export default ProfilePage;
