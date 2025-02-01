import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import MainBody from "./components/MainBody.jsx";
import Leaderboard from "./components/leaderboard/Leaderboard.jsx"; // Import Leaderboard
// import Roadmap from "./components/roadmap/Roadmap.jsx"; 
import CoursesList from "./components/coursesList/CoursesList.jsx";

function App() {
  return (
    <Router>
      <NavBar /> {/* NavBar stays on all pages */}

      <Routes>
        <Route path="/" element={<><Dashboard /><MainBody /></>} /> {/* Home Page */}
        <Route path="/leaderboard" element={<Leaderboard />} /> {/* Leaderboard Page */}
        <Route path="/learn" element={<CoursesList />} /> {/* Leaderboard Page */}
      </Routes>
    </Router>
  );
}

export default App;
