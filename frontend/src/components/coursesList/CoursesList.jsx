import React from "react";
import "./CoursesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Introduction of Debit and Credit Cards",
    unlocked: true,
    icon: <FontAwesomeIcon icon={faPlay} className="play-icon" />,
    link: "/roadmap/Introduction of Debit and Credit Cards",
  },
  {
    title: "What is Personal Finance?",
    unlocked: false,
    icon: <FontAwesomeIcon icon={faLock} className="lock-icon" />,
    link: "/roadmap/What is Personal Finance?",
  },
  {
    title: "Definition and Cryptocurrency as a Digital Asset",
    unlocked: false,
    icon: <FontAwesomeIcon icon={faLock} className="lock-icon" />,
    link: "/roadmap/Definition and Cryptocurrency as a Digital Asset",
  },
  {
    title: "Understanding Interest Rates",
    unlocked: false,
    icon: <FontAwesomeIcon icon={faLock} className="lock-icon" />,
    link: "/roadmap/Understanding Interest Rates",
  },
  {
    title: "Investing for Beginners",
    unlocked: false,
    icon: <FontAwesomeIcon icon={faLock} className="lock-icon" />,
    link: "/roadmap/Investing for Beginners",
  },
  {
    title: "Identity Theft Protection",
    unlocked: false,
    icon: <FontAwesomeIcon icon={faLock} className="lock-icon" />,
    link: "/roadmap/Identity Theft Protection",
  },
  {
    title: "How to Save Money",
    unlocked: false,
    icon: <FontAwesomeIcon icon={faLock} className="lock-icon" />,
    link: "/roadmap/How to Save Money",
  },
  {
    title: "Tax Basics",
    unlocked: false,
    icon: <FontAwesomeIcon icon={faLock} className="lock-icon" />,
    link: "/roadmap/Tax Basics",
  },
];

const CoursesList = () => {
  return (
    <div className="courses-container">
      <h2 className="course-title">COURSES LIST</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          course.unlocked ? (
            <Link key={index} to={course.link} className="course-card unlocked">
              <span className="icon-container">{course.icon}</span>
              <span>{course.title}</span>
            </Link>
          ) : (
            <div key={index} className="course-card locked">
              <span className="icon-container">{course.icon}</span>
              <span className="disabled-link">{course.title}</span>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
