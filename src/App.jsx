import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video2" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
