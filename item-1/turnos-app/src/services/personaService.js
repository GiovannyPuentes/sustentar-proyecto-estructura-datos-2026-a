import axios from 'axios'

const API_URL = "http://localhost:8080/api/personas";

// Obtener todas las personas
export const obtenerPersonas = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Guardar una persona
export const guardarPersona = async (persona) => {
  const response = await axios.post(API_URL, persona);
  return response.data;
};