import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://technicalproof.lisdatasolutions.com',
  headers: {
    'X-API-Key': API_KEY,
  },
});

export default api;

export const fetchCategories = async () => {
    try {
      const response = await api.get('/api/v1/recommender/category');
      return response.data;
    } catch (error) {
      // Handle the error appropriately
      console.error('There was an error fetching the categories:', error);
      throw error;
    }
  };

  
