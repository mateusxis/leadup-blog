import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3004",
});

export const get = async (url) => {
  const response = await api.get(url);

  return response.data;
};

export const patch = async (url, data) => {
  const response = await api.patch(url, data);

  return response.data;
};

export default api;
