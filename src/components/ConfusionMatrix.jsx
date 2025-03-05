import React, { useState, useEffect } from "react";

const ConfusionMatrix = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl("https://ml-logisticregression-backend-production.up.railway.app/api/confusion-matrix"); 
  }, []);

  return (
    <div className="absolute bottom-[10%] w-full md:max-w-[50%] max-w-[600px] h-full flex flex-col text-gray-500 p-6" >
      <h2>Confusion Matrix</h2>
      {imageUrl && <img src={imageUrl} alt="Confusion Matrix" />}
    </div>
  );
};

export default ConfusionMatrix;
