import React from "react";
import HeroSection from "./HeroSection";
import CourseProgress from "./CourseProgress";
import QuickLessons from "./QuickLessons";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div className="mb-container">
      <div className="left-section">
        <CourseProgress />
      </div>

      <div className="right-section">
        <HeroSection />
        <QuickLessons />
      </div>
    </div>
  );
};

export default MainBody;
