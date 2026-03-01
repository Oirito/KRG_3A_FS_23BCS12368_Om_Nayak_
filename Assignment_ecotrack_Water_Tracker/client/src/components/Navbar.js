import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/water">Water Tracker</Link>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}