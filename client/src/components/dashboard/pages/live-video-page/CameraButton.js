import React from "react";
import { useNavigate } from "react-router-dom";

const CameraButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    navigate(page);
  };

  return (
    <div>
      <div id="button-container">
        <h1>Camera Feeds</h1>

        <button
          className="bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
          onClick={() => handleButtonClick("/camera1")}
        >
          Camera 1
        </button>
        <button
          className="bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
          onClick={() => handleButtonClick("/camera2")}
        >
          Camera 2
        </button>
        <button
          className="bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
          onClick={() => handleButtonClick("/camera3")}
        >
          Camera 3
        </button>
        <button
          className="bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
          onClick={() => handleButtonClick("/camera4")}
        >
          Camera 4
        </button>
        <button
          className="bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
          onClick={() => handleButtonClick("/camera5")}
        >
          Camera 5
        </button>
        <button
          className="bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
          onClick={() => handleButtonClick("/camera6")}
        >
          Camera 6
        </button>
        <button
          className="bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
          onClick={() => handleButtonClick("/camera7")}
        >
          Camera 7
        </button>
      </div>
    </div>
  );
};

export default CameraButton;
