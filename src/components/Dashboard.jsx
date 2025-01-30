import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Level Progress Section */}
      <div className="level-card">
        <div className="level-header">
          <h2>Level 3: Explorer</h2>
          <button className="customize-avatar">
            ✨ Customize Avatar
          </button>
        </div>
        <p className="level-subtext">
          Keep Going you are making great progress!
        </p>
        <div className="prog-bar">
          <div className="prog-fill"></div>
        </div>
      </div>

      {/* Daily Streaks Section */}
      <div className="streak-card">
        <div className="streak-header">
          <h3>Daily Streaks</h3>
          <span className="streak-count">5 Days</span>
        </div>
        <div className="streak-dots">
          <span className="dot checked">✔️</span>
          <span className="dot checked">✔️</span>
          <span className="dot checked">✔️</span>
          <span className="dot checked">✔️</span>
          <span className="dot checked">✔️</span>
          <span className="dot inactive">Sat</span>
          <span className="dot inactive">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
