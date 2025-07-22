import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ThreatLogs from "../components/ThreatLogs";
import DeviceStatus from "../components/DeviceStatus";
import ChartSection from "../components/ChartSection";

function Dashboard() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.clear();        // remove token/name/email
    navigate("/login");          // redirect
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          DevSecOps Dashboard – Welcome, {name || "User"}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <ThreatLogs />
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <ChartSection />
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 md:col-span-2">
          <DeviceStatus />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
