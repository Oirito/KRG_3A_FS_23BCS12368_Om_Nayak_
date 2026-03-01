import Navbar from "../components/Navbar";
import "../App.css";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="center-page">
        <div className="card">
          <h2>Welcome to EcoTrack 🌿</h2>
          <p>Track your daily wellness.</p>
          <p>To track your daily wellness click on Water Tracker</p>
        </div>
      </div>
    </div>
  );
}