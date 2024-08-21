import axios from 'axios';

export const API_BASE_URL = 'http://localhost:8080/api';
// export const API_BASE_URL = 'http://10.70.100.14:8081/api';

// Define handleRequest function
const handleRequest = async (apiCall) => {
  try {
    const response = await apiCall();
    return { data: response.data };
  } catch (error) {
    return { error: error.response ? error.response.status : 500 };
  }
};

// auth
export const loginRequest = async (email, password) => {
    return await handleRequest(() =>
      axios.post(`${API_BASE_URL}/auth/login`, { email, password })
    );
  };