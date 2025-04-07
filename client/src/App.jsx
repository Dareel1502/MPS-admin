import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import Map from "./components/Map";
import ReportManagement from "./pages/ReportManagement";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/report-management" element={<ReportManagement />} />
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
