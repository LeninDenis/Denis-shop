import axios from 'axios';

const api = {
  login: async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });

      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Ошибка входа' };
    }
  },
};

export default api;
