import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">DevSecOps Dashboard</h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/register")}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
