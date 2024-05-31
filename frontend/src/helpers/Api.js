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

export const fetchAllTasks = async (user, token) => {
  const response = await axios.get(`${BASE_URL}/api/tasks/all/${user}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteUser = async (user, token) => {
  const response = await fetch(`${BASE_URL}/user/${user}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token.jwt}`,
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  return response;
};

export const updateUser = async (userId, user, token) => {
  const response = await fetch(`${BASE_URL}/user/${userId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token.jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  console.log(response);
  return response;
};

export const updateTask = async (id, task, token) => {
  const response = await axios.put(`${BASE_URL}/api/tasks/${id}`, task, {
    headers: {
      Authorization: `Bearer ${token.jwt}`,
      "Content-Type": "application/json",
    },
  });

  console.log(response.data);
  return response.data;
};

export const deleteTask = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/api/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token.jwt}`,
    },
  });

  console.log(response.status);
  return response.status;
};

export const createTask = async (userId, task, token) => {
  const response = await axios.post(`${BASE_URL}/api/tasks/${userId}`, task, {
    headers: {
      Authorization: `Bearer ${token.jwt}`,
      "Content-Type": "application/json",
    },
  });

  console.log(response.data);
  return response.data;
};
