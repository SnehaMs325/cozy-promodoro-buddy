import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Promodoro from "./pages/Promodoro.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/promodoro" element={<Promodoro />} />
      </Routes>
    </Router>
  );
}

export default App;
