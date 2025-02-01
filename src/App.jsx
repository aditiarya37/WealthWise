import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import MainBody from "./components/MainBody.jsx";
import Leaderboard from "./components/leaderboard/Leaderboard.jsx";
import CoursesList from "./components/coursesList/CoursesList.jsx";
import Roadmap from "./components/roadmap/Roadmap.jsx"; 
import Content1 from "./components/contents/Content1.jsx"; // Import Content1
import Quiz1 from "./components/quizes/Quiz1.jsx"; // Import Quiz1

function App() {
  return (
    <Router>
      <NavBar /> {/* NavBar stays on all pages */}

      <Routes>
        <Route path="/" element={<><Dashboard /><MainBody /></>} /> {/* Home Page */}
        <Route path="/leaderboard" element={<Leaderboard />} /> {/* Leaderboard Page */}
        <Route path="/learn" element={<CoursesList />} /> {/* Courses List Page */}
        <Route path="/roadmap/:courseTitle" element={<Roadmap />} /> {/* Dynamic Roadmap Page */}
        <Route path="/content1" element={<Content1 />} /> {/* Content1 Page */}
        <Route path="/quiz1" element={<Quiz1 />} /> {/* Quiz1 Page */}
      </Routes>
    </Router>
  );
}

export default App;
