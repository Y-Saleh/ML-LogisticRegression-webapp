import React, { useState, useEffect } from "react";

const ConfusionMatrix = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl("https://ml-logisticregression-backend-production.up.railway.app/api/confusion-matrix"); 
  }, []);

  return (
    <div className="max-w-[1140px] m-auto flex-col" >
      <h2>Confusion Matrix</h2>
      {imageUrl && <img src={imageUrl} alt="Confusion Matrix" />}
    </div>
  );
};

export default ConfusionMatrix;
