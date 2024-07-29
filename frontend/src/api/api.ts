import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Замените на URL вашего сервера
});

export default api;
