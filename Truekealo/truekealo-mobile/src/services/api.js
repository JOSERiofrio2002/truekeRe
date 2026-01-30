import * as SecureStore from 'expo-secure-store';
import { API_URL } from '../constants/config';

// API client con fetch nativo (compatible con React Native)
const api = {
  async request(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const token = await SecureStore.getItemAsync('token');

    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 401) {
        // Token expirado o inválido
        await SecureStore.deleteItemAsync('token');
      }

      const data = await response.json();

      if (!response.ok) {
        throw {
          response: {
            status: response.status,
            data,
          },
        };
      }

      return { data };
    } catch (error) {
      throw error;
    }
  },

  get(endpoint, options) {
    return this.request(endpoint, { ...options, method: 'GET' });
  },

  post(endpoint, data, options) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put(endpoint, data, options) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete(endpoint, options) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  },

  postFormData(endpoint, formData, options) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      headers: {
        ...options?.headers,
        // No incluir Content-Type para FormData
      },
      body: formData,
    });
  },
};

export default api;
