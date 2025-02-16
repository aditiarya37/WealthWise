import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Roadmap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBookOpen, faQuestionCircle, faLock } from "@fortawesome/free-solid-svg-icons";

const Roadmap = () => {
  const { courseTitle } = useParams();

  const courses = [
    { title: "What are Debit and Credit?", unlocked: true, size: "medium", link: "https://youtu.be/VhwZ9t2b3Zk?feature=shared", icon: <FontAwesomeIcon icon={faPlay} className="play-icon" /> },
    { title: "What is a Bank Statement?", unlocked: false, size: "small" },
    { title: "Understanding Bank Accounts: Savings vs. Current Accounts", unlocked: false, size: "large" },

    { title: "Suggestive Readings", unlocked: true, size: "large", link: "/content1", icon: <FontAwesomeIcon icon={faBookOpen} className="notes-icon" /> },
    { title: "Introduction to Interest: Simple vs. Compound", unlocked: false, size: "medium" },
    { title: "What is a Loan? Types of Loans Explained", unlocked: false, size: "small" },

    { title: "Quiz", unlocked: true, size: "small", link: "/quiz1", icon: <FontAwesomeIcon icon={faQuestionCircle} className="quiz-icon" /> },
    { title: "Introduction to Cryptocurrency", unlocked: false, size: "large" },
    { title: "Blockchain Basics", unlocked: false, size: "medium" },
  ];

  const column1 = [courses[0], courses[1], courses[2]]; // medium, small, large
  const column2 = [courses[3], courses[4], courses[5]]; // large, medium, small
  const column3 = [courses[6], courses[7], courses[8]]; // small, large, medium

  return (
    <div className="roadmap-container">
      {/* Header Section */}
      <div className="roadmap-header">
        <h1>Introduction to Credit and Debit</h1>
        <span className="progress-rdm">
          <span className="progress-bar-rdm" style={{ width: "0%" }}>0%</span>
        </span>
      </div>

      <div className="roadmap-content">
        {[column1, column2, column3].map((column, colIndex) => (
          <div key={colIndex} className="roadmap-column">
            {column.map((course, index) => (
              course.unlocked ? (
                <Link key={index} to={course.link} className={`course-card-rdm unlocked-rdm ${course.size}`}>
                  <div className="icon-container-rdm">{course.icon}</div>
                  <p>{course.title}</p>
                </Link>
              ) : (
                <div key={index} className={`course-card-rdm locked-rdm ${course.size}`}>
                  <div className="icon-container-rdm">
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
