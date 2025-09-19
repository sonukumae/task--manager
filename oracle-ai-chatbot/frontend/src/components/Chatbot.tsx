import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('/api/chat', { query: input });
            const botMessage = { text: response.data.response, sender: 'bot' };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = { text: 'Sorry, something went wrong.', sender: 'bot' };
            setMessages([...messages, userMessage, errorMessage]);
        }

        setInput('');
    };

    return (
        <div className="chatbot">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chatbot;