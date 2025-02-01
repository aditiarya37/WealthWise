import React from "react";
import "./QuickLessons.css";
// import { FaDollarSign, FaCreditCard, FaChartLine, FaShieldAlt, FaBook, FaBitcoin, FaClipboardList, FaPiggyBank } from "react-icons/fa";
import walletIcon from "../assets/wallet-icon.png";
import graphIcon from "../assets/graph-icon.png";
import piggyBankIcon from "../assets/piggy-bank-icon.png";
import creditCardIcon from "../assets/credit-card-icon.png";
import dollarIcon from "../assets/dollar-icon.png";
import giftIcon from "../assets/gift-icon.png";
import bitcoinIcon from "../assets/bitcoin-icon.png";
import shieldIcon from "../assets/shield-icon.png";

const lessons = [
  { title: "What is Personal Finance?", icon: walletIcon },
  { title: "Understanding Interest Rates", icon: graphIcon },
  { title: "How to Save Money", icon: piggyBankIcon },
  { title: "Credit Cards 101", icon: creditCardIcon },
  { title: "Investing for Beginners", icon: dollarIcon },
  { title: "Tax Basics", icon: giftIcon },
  { title: "Introduction to Cryptocurrency", icon: bitcoinIcon },
  { title: "Identity Theft Protection", icon: shieldIcon },
];

const QuickLessons = () => {
  return (
    <div className="quick-lessons">
      <h2>Get started</h2>
      <div className="lesson-grid">
        {lessons.map((lesson, index) => (
          <div key={index} className="lesson-card">
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
