// frontend/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function getPasswords() {
  try {
    const response = await axios.get(`${API_URL}/passwords`);
    return response.data;
  } catch (error) {
    console.error('Fehler beim Abrufen der Passwörter:', error);
    throw error;
  }
}

export async function createPassword(passwordData) {
  try {
    const response = await axios.post(`${API_URL}/passwords`, passwordData);
    return response.data;
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Passworts:', error);
    throw error;
  }
}
