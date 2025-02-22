import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuickLessons.css";
import walletIcon from "../assets/wallet-icon.png";
import graphIcon from "../assets/graph-icon.png";
import piggyBankIcon from "../assets/piggy-bank-icon.png";
import creditCardIcon from "../assets/credit-card-icon.png";
import dollarIcon from "../assets/dollar-icon.png";
import giftIcon from "../assets/gift-icon.png";
import bitcoinIcon from "../assets/bitcoin-icon.png";
import shieldIcon from "../assets/shield-icon.png";

const lessons = [
  { title: "Introduction to Credit and Debit", icon: walletIcon },
  { title: "Understanding Interest Rates", icon: graphIcon },
  { title: "How to Save Money", icon: piggyBankIcon },
  { title: "Credit Cards 101", icon: creditCardIcon },
  { title: "Investing for Beginners", icon: dollarIcon },
  { title: "Tax Basics", icon: giftIcon },
  { title: "Introduction to Cryptocurrency", icon: bitcoinIcon },
  { title: "Identity Theft Protection", icon: shieldIcon },
];

const QuickLessons = () => {
  const navigate = useNavigate();

  return (
    <div className="quick-lessons">
      <h2>Get started</h2>
      <div className="lesson-grid">
        {lessons.map((lesson, index) => (
          <div 
            key={index} 
            className="lesson-card"
            onClick={() => index === 0 && navigate("/roadmap/Introduction%20of%20Debit%20and%20Credit%20Cards")}
            style={{ cursor: index === 0 ? "pointer" : "default" }}
          >
            <span className="lesson-icon">
              <img src={lesson.icon} alt={lesson.title} />
            </span>
            <p className="lesson-title">{lesson.title}</p>
            <p className="lesson-duration">2-3 min</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLessons;
