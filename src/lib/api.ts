import axios from 'axios';
import { BASE_URL } from '../config/common';

export const fetchNfts = async () => {
  const response = await axios.get('/api/nfts', {
    baseURL: BASE_URL,
  });
  return response.data;
};

export const fetchNft = async (id: string) => {
  const response = await axios.get(`/api/nfts/${id}`, {
    baseURL: BASE_URL,
  });
  return response.data;
};

export const createPriceForNft = async (nftId: string) => {
  const response = await axios.get(`/api/prices/${nftId}`, {
    baseURL: BASE_URL,
  });

  return response.data;
};

export const fetchKyc = async (token: string) => {
  const response = await axios.get(`/api/kyc?token=${token}`, {
    baseURL: BASE_URL,
  });

  return response.data;
};
