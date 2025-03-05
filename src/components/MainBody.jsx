import React, { useState, useEffect } from "react";
import seaMineIcon from '../Assets/icons8-sea-mine-100.png';
import rockIcon from '../Assets/icons8-rock-48.png';

const MainBody = () => {
  const [prediction, setPrediction] = useState(null);
  const [expected, setExpected] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl("https://ml-logisticregression-backend-production.up.railway.app/api/confusion-matrix");
  }, []);

  const fetchRandomTest = () => {
    fetch('https://ml-logisticregression-backend-production.up.railway.app/api/random-test')
      .then((res) => res.json())
      .then((data) => {
        setPrediction(data.prediction);
        setExpected(data.expected);
      })
      .catch((err) => console.error("Error fetching prediction:", err));
  };

  return (
    <div className="max-w-[1140px] m-auto flex flex-col space-y-8 p-8">
      <div className="w-full flex flex-col text-gray-500 p-6">
        <h1 className="font-bold text-4xl">Machine Learning Project Showcase</h1>
        <p className="text-gray-500 pt-6">
          Basic project to showcase SK-Learn and Logistic Regression models for predicting land mines with over 90% accuracy.
        </p>

        <div className="flex flex-wrap justify-between pt-6">
          <div className="flex flex-col gap-6 w-full md:w-2/3">
            <div className="bg-black text-white p-8 rounded-md text-center">
              <p>Accuracy on training data: 82%</p>
              <p>Accuracy on test data: 91%</p>
            </div>

            <div className="bg-black text-white p-8 rounded-md text-center">
              <p>Total data samples used for training: 208 scans</p>
            </div>

            <button className="bg-black text-white p-8 rounded-md active:bg-green-500 transition-colors duration-300"
              onClick={fetchRandomTest}>
              Click Me To Test a Random Entry
            </button>

            {/* Prediction Section */}
            <div className="bg-black text-white p-8 rounded-md text-center">
              <p>Prediction:</p>
              <div className="flex justify-center items-center gap-4">
                {prediction === 'M' && <img src={seaMineIcon} alt="Sea Mine" className="w-24 h-24" />}
                {prediction === 'R' && <img src={rockIcon} alt="Rock" className="w-24 h-24" />}
              </div>
            </div>

            {/* Expected Section */}
            <div className="bg-black text-white p-8 rounded-md text-center">
              <p>Expected:</p>
              <div className="flex justify-center items-center gap-4">
                {expected === 'M' && <img src={seaMineIcon} alt="Sea Mine" className="w-24 h-24" />}
                {expected === 'R' && <img src={rockIcon} alt="Rock" className="w-24 h-24" />}
              </div>
            </div>
          </div>

          {/* Right Column - How it Works */}
          <div className="w-full md:w-1/3 flex flex-col self-start p-6">
            <h3 className="text-xl font-bold">How it works?</h3>
            <p className="mt-4">
              Using the Dataset provided here: 
              <a href="https://www.kaggle.com/datasets/mayurdalvi/sonar-mine-dataset" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
                Kaggle Sonar Mine Dataset
              </a>
            </p>
            <p className="mt-4 leading-relaxed">
              Utilizing Python libraries like SKLearn, Numpy, and Pandas, I built a model that processes sonar data and predicts whether an object is a mine or a rock.
            </p>
          </div>
        </div>
      </div>

      {/* Confusion Matrix - Now correctly spaced below */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold">Confusion Matrix</h2>
        {imageUrl && <img src={imageUrl} alt="Confusion Matrix" className="max-w-full" />}

        <p className="w-full md:w-1/2 flex flex-col self-start p-6 mt-4">The confusion matrix is generated based on the test data used to represent out comes. As you can see the model is mostly accurate, however it does have more false negatives than false positives
        which can be dangerous as a mine being predicted as a rock could be catastrophic vs a rock being predicted as mine might just result in additional safety measures around something harmless. Moving forward I want to compare different accuracies from a variety of models </p>


      </div>
    </div>
  );
};

export default MainBody;
