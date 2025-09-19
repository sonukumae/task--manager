# Oracle AI Chatbot

This project is a web-based AI chatbot built using Oracle AI Services, featuring vector search and natural language processing (NLP) capabilities for intelligent query handling. The chatbot is designed to provide real-time question answering and enhance user interaction through a seamless interface.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is built using Flask and integrates with Oracle AI Services for NLP and vector search functionalities. The structure is as follows:

- **app.py**: The main entry point for the Flask application, setting up routes and integrating with Oracle AI Services.
- **requirements.txt**: Lists the Python dependencies required for the backend.
- **vector_search/**: Contains the implementation of vector search functionalities.
- **nlp/**: Contains the implementation of NLP capabilities.
- **README.md**: Documentation for the backend, including setup instructions and API endpoints.

### Frontend

The frontend is developed using React and TypeScript, providing a user-friendly interface for interacting with the chatbot. The structure is as follows:

- **src/**: Contains the main application code.
  - **App.tsx**: The main component of the React application.
  - **components/**: Contains the Chatbot component for user interactions.
  - **services/**: Contains functions for making API calls to the backend.
  - **index.tsx**: The entry point for the React application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options.
- **README.md**: Documentation for the frontend, including setup instructions and component descriptions.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```
   python app.py
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Additional Information

This project leverages Oracle AI Services for advanced NLP and vector search capabilities, enabling the chatbot to understand and respond to user queries effectively. For further customization and enhancements, refer to the documentation in the respective `README.md` files in the backend and frontend directories.