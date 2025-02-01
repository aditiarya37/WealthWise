import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import MainBody from "./components/MainBody.jsx";
import Leaderboard from "./components/leaderboard/Leaderboard.jsx";
import CoursesList from "./components/coursesList/CoursesList.jsx";
import Roadmap from "./components/roadmap/Roadmap.jsx"; 
import Content1 from "./components/contents/Content1.jsx"; 
import Quiz1 from "./components/quizes/Quiz1.jsx";
import AuthModal from "./components/AuthModal.jsx";  

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage or session to persist login state
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem("user", "authenticated"); // Store login status
  };

  return (
    <Router>
      {!isAuthenticated ? (
        <AuthModal type="login" closeModal={handleAuthSuccess} />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<><Dashboard /><MainBody /></>} /> 
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/learn" element={<CoursesList />} />
            <Route path="/roadmap/:courseTitle" element={<Roadmap />} />
            <Route path="/content1" element={<Content1 />} />
            <Route path="/quiz1" element={<Quiz1 />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
