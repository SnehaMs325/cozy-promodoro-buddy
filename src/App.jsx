import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Welcome from "./pages/Welcome.jsx";
import Promodoro from "./pages/Promodoro.jsx";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      {/* 🌗 GLOBAL THEME TOGGLE */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/promodoro" element={<Promodoro />} />
      </Routes>
    </Router>
  );
}

export default App;
