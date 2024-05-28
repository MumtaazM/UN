import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const loginUser = async (user) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, user);
  return response.data;
};

export const registerUser = async (user) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, user);
  return response.data;
};
