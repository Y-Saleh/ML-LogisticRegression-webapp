import React, { useState } from 'react';
import seaMineIcon from '../Assets/icons8-sea-mine-100.png';
import rockIcon from '../Assets/icons8-rock-48.png';

const MainBody = () => {
  const [prediction, setPrediction] = useState(null);
  const [expected, setExpected] = useState(null);

  const fetchRandomTest = () => {
    const API_BASE_URL = "ml-logisticregression-webapp.railway.internal";
    fetch(API_BASE_URL + "/api/random-test")
      .then((res) => res.json())
      .then((data) => {
        setPrediction(data.prediction);
        setExpected(data.expected);
      })
      .catch((err) => console.error("Error fetching prediction:", err));
  };

  return (
    <div className='max-w-[1140px] m-auto flex-col'>
      <div className='absolute top-[10%] w-full md:max-w-[50%] max-w-[600px] h-full flex flex-col text-gray-500 p-6'>
        <h1 className='font-bold text-4xl'>Machine Learning Project Showcase</h1>
        <p className='text-gray-500 pt-6'>
          Basic project to showcase SK-Learn and use of Logistic Regression models to create a predictive model capable of predicting land mines with an accuracy greater than 95%.
        </p>

        <div className="flex flex-wrap justify-between p-6">
          <div className="flex flex-col gap-6 w-full md:w-2/3">
            <div className="bg-black text-white p-8 rounded-md">
              <p className="text-center">Accuracy: 96%</p>
            </div>

            <div className="bg-black text-white p-8 rounded-md">
              <p className="text-center">Total data samples used for training: 208 scans</p>
            </div>

            {/* Test Button */}
            <button className="bg-black text-white p-8 rounded-md active:bg-green-500 transition-colors duration-300"
              onClick={fetchRandomTest}
              
            >
              Click Me To Test a Random Entry
            </button>

            {/* Prediction Section */}
            <div className="bg-black text-white p-8 rounded-md">
              <p>Prediction:</p>
              <div className="flex justify-center items-center gap-4">
                {prediction === 'M' && <img src={seaMineIcon} alt="Sea Mine" className="w-24 h-24" />}
                {prediction === 'R' && <img src={rockIcon} alt="Rock" className="w-24 h-24" />}
              </div>
            </div>

            {/* Expected Section */}
            <div className="bg-black text-white p-8 rounded-md">
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
              <a 
                href="https://www.kaggle.com/datasets/mayurdalvi/sonar-mine-dataset"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline ml-1"
              >
                Kaggle Sonar Mine Dataset
              </a>
            </p>
            <p className="mt-4 leading-relaxed">
              By utilizing Python libraries for machine learning such as SKLearn and numerical 
              libraries like Numpy and Pandas, I built a model capable of processing 
              sonar data into suitable training data. This model then uses a linear regression 
              algorithm to accurately predict whether an object is a mine or a rock.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
