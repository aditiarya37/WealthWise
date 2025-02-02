import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes"; // ✅ Import new AppRoutes

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
