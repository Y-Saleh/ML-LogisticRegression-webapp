import random
import numpy as np
import pandas as pd
from flask import Flask, jsonify
from sklearn.linear_model import LogisticRegression
from flask_cors import CORS  # Import the CORS package

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load dataset
sonar_data = pd.read_csv('Copy of sonar data.csv', header=None)

# Separate features and labels
X = sonar_data.drop(columns=60, axis=1)
Y = sonar_data[60]

# Train the model
model = LogisticRegression()
model.fit(X, Y)

@app.route('/api/random-test', methods=['GET'])
def get_random_prediction():
    random_index = random.randint(0, len(sonar_data) - 1)
    sample_features = np.array(X.iloc[random_index]).reshape(1, -1)
    expected_label = Y.iloc[random_index]
    
    prediction = model.predict(sample_features)[0]  # Get predicted label

    return jsonify({
        "prediction": prediction,
        "expected": expected_label
    })

if __name__ == '__main__':
      app.run(host="0.0.0.0", port=5000, debug=False)
