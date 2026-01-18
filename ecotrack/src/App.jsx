import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Header title="EcoTrack - Experiment 1" />
      <main style={{ padding: "1rem" }}>
        <Dashboard />
      </main>
    </>
  );
};

export default App;

