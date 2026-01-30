import * as SecureStore from 'expo-secure-store';
import api from './api';
import { API_ENDPOINTS } from '../constants/config';

export const authService = {
  // Login
  async login(email, password) {
    try {
      const formData = new URLSearchParams();
      formData.append('username', email);
      formData.append('password', password);

      const response = await api.request(API_ENDPOINTS.AUTH.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const { access_token } = response.data;
      await SecureStore.setItemAsync('token', access_token);
      
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Error al iniciar sesión' };
    }
  },

  // Registro
  async register(userData) {
    try {
      const response = await api.post(API_ENDPOINTS.AUTH.REGISTER, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Error al registrarse' };
    }
  },

  // Obtener usuario actual
  async getCurrentUser() {
    try {
      const response = await api.get(API_ENDPOINTS.AUTH.ME);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Error al obtener usuario' };
    }
  },

  // Logout
  async logout() {
    try {
      await SecureStore.deleteItemAsync('token');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  },

  // Verificar si hay token
  async hasToken() {
    try {
      const token = await SecureStore.getItemAsync('token');
      return !!token;
    } catch (error) {
      return false;
    }
  },
};
