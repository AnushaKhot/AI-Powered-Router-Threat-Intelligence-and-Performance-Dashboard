import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function ThreatLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await axios.get("http://localhost:5000/api/logs");
      setLogs(res.data);
    };
    fetchLogs();

    socket.on("threatLog", async (data) => {
      setLogs((prev) => [data, ...prev.slice(0, 9)]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Threat Logs</h2>
      <ul className="text-sm text-gray-600 list-disc pl-4 max-h-48 overflow-y-auto">
        {logs.map((log, i) => (
          <li key={log._id || i}>⚠️ {log.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default ThreatLogs;
