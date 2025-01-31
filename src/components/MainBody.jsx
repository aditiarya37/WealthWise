import React from "react";
import HeroSection from "./HeroSection";
import CourseProgress from "./CourseProgress";
import QuickLessons from "./QuickLessons";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div className="mb-container">
      {/* Left Side - Course Progress */}
      <div className="left-section">
        <CourseProgress />
      </div>

      {/* Right Side - Hero and Quick Lessons */}
      <div className="right-section">
        <HeroSection />
        <QuickLessons />
      </div>
    </div>
  );
};

export default MainBody;
