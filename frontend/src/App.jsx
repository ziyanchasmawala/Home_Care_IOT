import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <div className="flex min-h-screen">
      <Router>
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
