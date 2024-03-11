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
        console.error('There was an error fetching the categories:', error);
        throw error;
    }
  };

export const fetchSubCategories = async (id_category) => {
    try {
        const response = await api.get(`/api/v1/recommender/category/${id_category}/subcategory`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the subcategories:', error);
        throw error;
    }
  };

export const fetchColours = async (id_subcategory) => {
    try {
        const response = await api.get(`/api/v1/recommender/subcategory/${id_subcategory}/color`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the colours:', error);
        throw error;
    }
  };

  export const fetchProducts = async (id_category, id_subcategory, id_colour) => {
    try {
        console.log("Fetching products...")
        const id_color = parseInt(id_colour)
        const response = await api.get(`/api/v1/recommender/product?id_category=${id_category}&id_subcategory=${id_subcategory}&id_color=${id_color}`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the products:', error);
        throw error;
    }
  };

  
