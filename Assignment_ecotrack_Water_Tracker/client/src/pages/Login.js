import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "fake-token");
    navigate("/dashboard");
  };

  return (
    <div className="center-page">
      <div className="card">
        <h2>EcoTrack Login</h2>
        <button className="btn btn-primary" onClick={handleLogin}>
           Login
        </button>
      </div>
    </div>
  );
}