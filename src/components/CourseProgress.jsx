import React from "react";
import "./CourseProgress.css"; // Import CSS if not using Tailwind

const missions = [
  {
    level: "Easy",
    title: "Track Daily Expenses",
    xp: "+50 Xp",
    progress: 40, // Percentage
    color: "green",
  },
  {
    level: "Medium",
    title: "Complete Budget Lessons",
    xp: "+75 Xp",
    progress: 80,
    color: "yellow",
  },
  {
    level: "Hard",
    title: "Complete a Hard Level Challenge",
    xp: "+150 Xp",
    progress: 20,
    color: "red",
  },
  {
    level: "Extra Hard",
    title: "Complete an Extra Hard Level Challenge",
    xp: "+250 Xp",
    progress: 8,
    color: "crimson",
  },
];

const CourseProgress = () => {
  return (
    <div className="course-progress-container">
      <h2 className="title">Daily Missions</h2>
      {missions.map((mission, index) => (
        <div key={index} className="mission-card">
          <div className={`badge badge-${mission.color}`}>{mission.level}</div>
          <span className="xp">{mission.xp}</span>
          <h3 className="mission-title">{mission.title}</h3>
          <div className="progress-bar">
            <div
              className={`progress progress-${mission.color}`}
              style={{ width: `${mission.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseProgress;
