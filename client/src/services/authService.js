import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register new user
export const register = async (email, password) => {
  return await axios.post(`${API_URL}/register`, { email, password });
};

// Login user
export const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};
