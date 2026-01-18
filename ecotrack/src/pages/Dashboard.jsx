import { logs } from "../data/logs";

const Dashboard = () => {
  const calculateTotalCarbon = logs.reduce((total, log) => total + log.carbon, 0);


  const highCarbonActivities = logs.filter(
    log => log.carbon > 4
  );
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Carbon Footprint: {calculateTotalCarbon} Kg</p>

      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.activity}: {log.carbon} Kg
          </li>
        ))}
      </ul>
      <h3>High Carbon Activities (&gt; 4 Kg)</h3>
      <ul>
        {highCarbonActivities.map(log => (
          <li key={log.id}>
            {log.activity}: {log.carbon} Kg
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;