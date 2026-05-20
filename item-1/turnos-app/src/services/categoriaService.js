import axios from 'axios';

const API_URL = 'http://localhost:8080/api/categorias';

export const obtenerCategorias = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarCategoria = async (categoria) => {
  const response = await axios.post(API_URL, categoria);
  return response.data;
};