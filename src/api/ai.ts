import api from './api';

export const getAIPredictions = async (pair: string) => {
  const response = await api.get(`/ai/predictions/${pair}`);
  return response.data;
};
