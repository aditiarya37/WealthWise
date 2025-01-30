import React from "react";
import "./QuickLessons.css";
// import { FaDollarSign, FaCreditCard, FaChartLine, FaShieldAlt, FaBook, FaBitcoin, FaClipboardList, FaPiggyBank } from "react-icons/fa";

const lessons = [
//   { title: "What is Personal Finance?", icon: <FaClipboardList /> },
  { title: "What is Personal Finance?" },
  { title: "Understanding Interest Rates" },
  { title: "How to Save Money" },
  { title: "Credit Cards 101" },
  { title: "Investing for Beginners" },
  { title: "Tax Basics" },
  { title: "Introduction to Cryptocurrency" },
  { title: "Identity Theft Protection" },
];

const QuickLessons = () => {
  return (
    <div className="quick-lessons">
      <h2>Get started</h2>
      <div className="lesson-grid">
        {lessons.map((lesson, index) => (
          <div key={index} className="lesson-card">
            <span className="lesson-icon">{lesson.icon}</span>
            <p className="lesson-title">{lesson.title}</p>
            <p className="lesson-duration">2-3 min</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLessons;
