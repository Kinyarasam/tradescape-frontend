// src/api/web3.ts
import api from './api';

export const connectWallet = async (walletAddress: string) => {
  const response = await api.post('/web3/connect', { walletAddress });
  return response.data;
};

export const getWalletBalance = async (walletAddress: string) => {
  const response = await api.get(`/web3/balance/${walletAddress}`);
  return response.data;
};
