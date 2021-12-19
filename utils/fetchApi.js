import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'f96ff5574dmsh3c5171680c13d86p1bb3bfjsn1011f11fd00c',
    },
  });

  return data;
};
