import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", threats: 4 },
  { name: "Tue", threats: 6 },
  { name: "Wed", threats: 2 },
  { name: "Thu", threats: 9 },
  { name: "Fri", threats: 5 },
  { name: "Sat", threats: 7 },
  { name: "Sun", threats: 3 },
];

function ChartSection() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Threat Activity (Weekly)</h2>
      <div className="h-64 bg-gray-50 rounded p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="threats" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartSection;
