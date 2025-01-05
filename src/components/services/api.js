import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://calendarapp4commtracking-default-rtdb.firebaseio.com', // Firebase Realtime Database base URL
  headers: { 'Content-Type': 'application/json' },
});

// Companies API
export const getCompanies = () => apiClient.get('/companies.json'); // Add .json for Firebase
export const addCompany = (data) => apiClient.post('/companies.json', data); // Add .json for Firebase
export const updateCompany = (id, data) => apiClient.put(`/companies/${id}.json`, data); // Add .json for Firebase
export const deleteCompany = (id) => apiClient.delete(`/companies/${id}.json`); // Add .json for Firebase

// Communication Methods API
export const getCommunicationMethods = () => apiClient.get('/communicationMethods.json'); // Add .json for Firebase
export const addCommunicationMethod = async (newCommunication) => {
  try {
    const response = await apiClient.post(`/communicationMethods.json`, newCommunication); // Add .json for Firebase
    return response.data;
  } catch (error) {
    console.error("Error adding communication method:", error);
    throw error;  // Rethrow the error to be handled by the caller
  }
};

export const updateCommunicationMethod = async (id, data) => {
  try {
    const response = await apiClient.put(`/communicationMethods/${id}.json`, data); // Add .json for Firebase
    return response.data;
  } catch (error) {
    console.error("Error updating communication method:", error);
    throw error;  // Rethrow the error to be handled by the caller
  }
};

export const deleteCommunicationMethod = (id) =>
  apiClient.delete(`/communicationMethods/${id}.json`); // Add .json for Firebase

export const addCommunicationToCompany = async (companyId, newCommunication) => {
  try {
    const response = await apiClient.post(`/companies/${companyId}/lastCommunications.json`, newCommunication); // Add .json for Firebase
    return response.data; // Return the updated company object
  } catch (error) {
    console.error("Error adding communication to company:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
