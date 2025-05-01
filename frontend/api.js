// frontend/api.js

const API_URL = 'http://localhost:4000';  // Backend URL, anpassen je nach Setup

export async function getPasswords() {
  const response = await fetch(`${API_URL}/passwords`);
  if (!response.ok) {
    throw new Error('Fehler beim Abrufen der Passwörter');
  }
  return await response.json();
}

export async function createPassword(passwordData) {
  const response = await fetch(`${API_URL}/passwords`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(passwordData),
  });
  if (!response.ok) {
    throw new Error('Fehler beim Hinzufügen des Passworts');
  }
  return await response.json();
}
