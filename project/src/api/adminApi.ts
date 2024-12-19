import axios from 'axios';

const API_URL = 'http://localhost:8081/api/admin'; // Update with your backend's base URL

export const fetchAdmins = async () => {
  const response = await axios.get(`${API_URL}/admins`);
  return response.data;
};

export const addAdmin = async (admin: any) => {
  const response = await axios.post(`${API_URL}/admins`, admin);
  return response.data;
};

export const updateAdmin = async (id: number, admin: any) => {
  const response = await axios.put(`${API_URL}/admins/${id}`, admin);
  return response.data;
};

export const deleteAdmin = async (id: number) => {
  const response = await axios.delete(`${API_URL}/admins/${id}`);
  return response.data;
};
