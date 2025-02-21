import axios from 'axios';
import { API_KEY } from '@env';

const BASE_URL = 'https://api.themoviedb.org/3';

export const buscarFilmes = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};

export const obterDetalhesFilme = async (filmeId) => {
  const response = await axios.get(`${BASE_URL}/movie/${filmeId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};