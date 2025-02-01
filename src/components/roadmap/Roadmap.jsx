import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Roadmap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBookOpen, faQuestionCircle, faLock } from "@fortawesome/free-solid-svg-icons"; // Import icons

const Roadmap = () => {
  const { courseTitle } = useParams(); // Extract course title from URL

  const courses = [
    { title: "What are Debit and Credit?", unlocked: true, size: "medium", link: "https://youtu.be/VhwZ9t2b3Zk?feature=shared", icon: <FontAwesomeIcon icon={faPlay} className="play-icon" /> }, // YouTube Link
    { title: "What is a Bank Statement?", unlocked: false, size: "small" },
    { title: "Understanding Bank Accounts: Savings vs. Current Accounts", unlocked: false, size: "large" },

    { title: "How Does a Credit Card Work?", unlocked: true, size: "large", link: "/content1", icon: <FontAwesomeIcon icon={faBookOpen} className="notes-icon" /> }, // Links to Content1.jsx
    { title: "Introduction to Interest: Simple vs. Compound", unlocked: false, size: "medium" },
    { title: "What is a Loan? Types of Loans Explained", unlocked: false, size: "small" },

    { title: "How to Secure Your Crypto?", unlocked: true, size: "small", link: "/quiz1", icon: <FontAwesomeIcon icon={faQuestionCircle} className="quiz-icon" /> }, // Links to Quiz1.jsx
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
        <h1>{courseTitle}</h1>
        <span className="progress-rdm">
          <span className="progress-bar-rdm" style={{ width: "0%" }}>0%</span>
        </span>
      </div>

      {/* Roadmap Content with 3 Columns */}
      <div className="roadmap-content">
        {[column1, column2, column3].map((column, colIndex) => (
          <div key={colIndex} className="roadmap-column">
            {column.map((course, index) => (
              course.unlocked ? (
                <Link key={index} to={course.link} className={`course-card unlocked-rdm ${course.size}`}>
                  <div className="icon-container">{course.icon}</div>
                  <p>{course.title}</p>
                </Link>
              ) : (
                <div key={index} className={`course-card locked-rdm ${course.size}`}>
                  <div className="icon-container">
                    <FontAwesomeIcon icon={faLock} className="lock-icon" />
                  </div>
                  <p>{course.title}</p>
                </div>
              )
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
