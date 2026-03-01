import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";
import "../App.css";

export default function WaterTracker() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // load saved count
  useEffect(() => {
    const saved = localStorage.getItem("water-count");
    if (saved) setCount(Number(saved));
  }, []);

  // save count
  useEffect(() => {
    localStorage.setItem("water-count", count);
  }, [count]);

  // fetch health tip
  useEffect(() => {
    const fetchTip = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setTip(data.slip.advice);
        setError("");
      } catch (err) {
        setError("Failed to fetch tip");
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, []);

  // memoized handlers
  const addWater = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const removeWater = useCallback(() => {
    setCount((c) => Math.max(0, c - 1));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="center-page">
        <div className="card">
          <h2>Water Tracker 💧</h2>

          <CounterDisplay count={count} goal={goal} />

          <div style={{ marginTop: 12 }}>
            <button className="btn btn-primary" onClick={addWater}>
              +
            </button>
            <button
              className="btn btn-danger"
              style={{ marginLeft: 8 }}
              onClick={removeWater}
            >
              -
            </button>
            <button
              className="btn btn-success"
              style={{ marginLeft: 8 }}
              onClick={reset}
            >
              Reset
            </button>
          </div>

          <div style={{ marginTop: 14 }}>
            <label>Daily Goal: </label>
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              style={{ width: 60 }}
            />
          </div>

          {count >= goal && (
            <p className="success">Goal Reached 🎉</p>
          )}

          <hr />

          <h4>Today's Health Tip:</h4>
          {loading && <p>Loading tip...</p>}
          {error && <p>{error}</p>}
          {tip && <p>{tip}</p>}
        </div>
      </div>
    </div>
  );
}