import os
import random
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from flask import Flask, jsonify, send_file
from flask_cors import CORS  # Import the CORS package

from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load dataset
sonar_data = pd.read_csv(os.path.join(os.path.dirname(__file__), 'Copy of sonar data.csv'), header=None)

# Separate features and labels
X = sonar_data.drop(columns=60, axis=1)
Y = sonar_data[60]

# Splitting dataset into training and test sets
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.1, stratify=Y, random_state=1)

# Train the model
model = LogisticRegression()
model.fit(X_train, Y_train)

# Evaluating model accuracy
X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(Y_train, X_train_prediction)

X_test_prediction = model.predict(X_test)
test_data_accuracy = accuracy_score(Y_test, X_test_prediction)

print('Accuracy on Training data:', training_data_accuracy)
print('Accuracy on Test data:', test_data_accuracy)

# Create confusion matrix and save as an image
def generate_confusion_matrix():
    cm = confusion_matrix(Y_test, model.predict(X_test))

    plt.figure(figsize=(6, 4))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=['Rock', 'Mine'], yticklabels=['Rock', 'Mine'])
    plt.xlabel('Predicted Label')
    plt.ylabel('True Label')
    plt.title('Confusion Matrix')

    image_path = os.path.join(os.path.dirname(__file__), 'confusion_matrix.png')
    plt.savefig(image_path)
    plt.close()  # Close plot to prevent memory issues
    return image_path

# API route to serve the confusion matrix image
@app.route('/api/confusion-matrix', methods=['GET'])
def get_confusion_matrix():
    image_path = generate_confusion_matrix()
    return send_file(image_path, mimetype='image/png')

@app.route('/api/random-test', methods=['GET'])
def get_random_prediction():
    random_index = random.randint(0, len(sonar_data) - 1)
    sample_features = np.array(X.iloc[random_index]).reshape(1, -1)
    expected_label = Y.iloc[random_index]

    prediction = model.predict(sample_features)[0]

    return jsonify({
        "prediction": prediction,
        "expected": expected_label
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))  # Ensure it matches Railway's default
    app.run(host='0.0.0.0', port=port, debug=False)
