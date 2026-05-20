import axios from 'axios';

const API_URL = 'http://localhost:8080/api/turnos';

export const obtenerTurnos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarTurno = async (turno) => {
  const response = await axios.post(API_URL, turno);
  return response.data;
};

export const actualizarEstadoTurno = async (id, estado) => {
  const response = await axios.put(`${API_URL}/${id}/estado`, estado, {
    headers: { 'Content-Type': 'text/plain' }
  });
  return response.data;
};