import React from "react";
import "./Roadmap.css";
import { FaPlay } from "react-icons/fa";

const Roadmap = () => {
  const courses = [
    { title: "Understanding Bank Accounts: Savings vs. Current Accounts", unlocked: false, size: "medium" },
    { title: "What is a Bank Statement?", unlocked: false, size: "small" },
    { title: "What are Debit and Credit?", unlocked: true, size: "large" },

    { title: "How Does a Credit Card Work?", unlocked: false, size: "large" },
    { title: "Introduction to Interest: Simple vs. Compound", unlocked: false, size: "medium" },
    { title: "What is a Loan? Types of Loans Explained", unlocked: false, size: "small" },

    { title: "How to Secure Your Crypto?", unlocked: false, size: "small" },
    { title: "Introduction to Cryptocurrency", unlocked: false, size: "large" },
    { title: "Blockchain Basics", unlocked: false, size: "medium" },
  ];

  // Split the array into 3 predefined columns
  const column1 = [courses[0], courses[1], courses[2]]; // medium, small, large
  const column2 = [courses[3], courses[4], courses[5]]; // large, medium, small
  const column3 = [courses[6], courses[7], courses[8]]; // small, large, medium

  return (
    <div className="roadmap-container">
      {/* Header Section */}
      <div className="roadmap-header">
        <h2>INTRODUCTION TO CRYPTOCURRENCY</h2>
        <span className="progress-rdm">
          <span className="progress-bar-rdm" style={{ width: "50%" }}>0%</span>
        </span>
      </div>

      {/* Roadmap Content with 3 Columns */}
      <div className="roadmap-content">
        {[column1, column2, column3].map((column, colIndex) => (
          <div key={colIndex} className="roadmap-column">
            {column.map((course, index) => (
              <div key={index} className={`course-card ${course.unlocked ? "unlocked" : "locked"} ${course.size}`}>
                {course.unlocked ? (
                  <div className="play-icon-container">
                    <FaPlay className="play-icon" />
                  </div>
                ) : (
                  <div className="lock-icon">🔒</div>
                )}
                <p>{course.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
