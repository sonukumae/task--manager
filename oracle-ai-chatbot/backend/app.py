from flask import Flask, request, jsonify
from vector_search import VectorSearch
from nlp.nlp import NLPService

app = Flask(__name__)

# Initialize services
vector_search_service = VectorSearch()
nlp_service = NLPService()

@app.route('/api/query', methods=['POST'])
def handle_query():
    # Your code here
    return jsonify({"message": "Query received!"})

if __name__ == '__main__':
    app.run(debug=True)