from flask import Flask, jsonify
from gradio_client import Client

app = Flask(__name__)
client = Client("https://b0ef83ec8ccf91443b.gradio.live/")

@app.route('/')
def home():
    result = client.predict("who are you",	# str  in 'i' Textbox component
							api_name="/predict")
    data = {
        'message': result,
        'status': 'success'
    }
    return jsonify(data)

@app.route('/add_food', methods=['GET', 'POST'])
def index():

    return "addffo"

@app.route('/visualize')
def visualize():
    return "Hello"

if __name__ == '__main__':
    app.run(debug=True)
