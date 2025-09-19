# Oracle AI Chatbot Backend

## How to Run

1. Install dependencies:

   ```sh
   pip install -r requirements.txt
   ```

2. Start the backend server:

   ```sh
   python app.py
   ```

## How to Use the API

- The API endpoint is: `http://127.0.0.1:5000/api/query`
- Send a POST request with JSON data like:

  ```json
  {
    "query": "your question here"
  }
  ```

### Example using curl

```sh
curl -X POST http://127.0.0.1:5000/api/query -H "Content-Type: application/json" -d "{\"query\": \"hello\"}"
```

### Example using Python

```python
import requests
response = requests.post(
    "http://127.0.0.1:5000/api/query",
    json={"query": "hello"}
)
print(response.json())
```
