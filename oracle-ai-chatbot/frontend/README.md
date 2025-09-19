# Oracle AI Chatbot Frontend

This project is a web-based AI chatbot built using Oracle AI Services, featuring vector search and NLP capabilities for intelligent query handling. The frontend is developed using React and TypeScript.

## Project Structure

The frontend consists of the following key files and directories:

- `src/`: Contains the source code for the React application.
  - `App.tsx`: The main component that sets up the application structure and integrates the chatbot component.
  - `components/`: Contains reusable components for the application.
    - `Chatbot.tsx`: The Chatbot component that handles user interactions and displays chat messages.
  - `services/`: Contains service files for API interactions.
    - `api.ts`: Functions for making API calls to the backend.
  - `index.tsx`: The entry point for the React application, rendering the App component.

## Setup Instructions

1. **Install Dependencies**: Navigate to the `frontend` directory and run the following command to install the required dependencies:
   ```
   npm install
   ```

2. **Run the Application**: Start the development server with:
   ```
   npm start
   ```

3. **Access the Chatbot**: Open your web browser and go to `http://localhost:3000` to interact with the chatbot.

## Usage

The chatbot allows users to ask questions and receive real-time responses. It utilizes Oracle AI Services for natural language processing and vector search for efficient query handling.

## Component Descriptions

- **Chatbot Component**: This component manages the chat interface, allowing users to input queries and view responses. It communicates with the backend API to process user queries.

## Additional Information

For more details on the backend implementation and API endpoints, please refer to the `backend/README.md` file.