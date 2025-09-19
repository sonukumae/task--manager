import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const sendQuery = async (query) => {
    try {
        const response = await axios.post(`${API_URL}/query`, { query });
        return response.data;
    } catch (error) {
        console.error('Error sending query:', error);
        throw error;
    }
};

export const getChatHistory = async () => {
    try {
        const response = await axios.get(`${API_URL}/chat-history`);
        return response.data;
    } catch (error) {
        console.error('Error fetching chat history:', error);
        throw error;
    }
};