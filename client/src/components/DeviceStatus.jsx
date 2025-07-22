function DeviceStatus() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Device Status</h2>
      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Device ID</th>
            <th className="p-2">Type</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">IoT-001</td>
            <td className="p-2">Sensor</td>
            <td className="p-2 text-green-600">Online</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">V2V-104</td>
            <td className="p-2">Vehicle</td>
            <td className="p-2 text-red-600">Offline</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">IoT-324</td>
            <td className="p-2">Camera</td>
            <td className="p-2 text-yellow-600">Compromised</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeviceStatus;
