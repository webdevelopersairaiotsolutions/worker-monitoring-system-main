import React, { useState, useRef, useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import { FiMinimize, FiMaximize, FiX } from "react-icons/fi";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const RTSPstream = () => {
  const playerConfigs = [
    // ... your player configurations ...
    { streamURL: "ws://localhost:2000/api/stream/1", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/2", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/3", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/4", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/5", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/6", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/7", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/8", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/9", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/10", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/11", canvasRef: useRef(null) },
    { streamURL: "ws://localhost:2000/api/stream/12", canvasRef: useRef(null) },
  ];

  const Modal = ({ streamURL, onClose }) => {
    const canvasRef = useRef(null);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);

    useEffect(() => {
      // This effect runs once when the component mounts, as indicated by the empty dependency array [].
    
      try {
        // Attempt to create a JSMpeg player for the provided streamURL and render it onto the canvas.
    
        // Check if the canvasRef has a current value.
        if (!canvasRef.current) {
          // If the canvasRef doesn't have a current value (is null or undefined),
          // create a new canvas element and assign it to the canvasRef.
          canvasRef.current = document.createElement("canvas");
        }
    
        // Create a new JSMpeg player instance with the provided streamURL and canvas.
        // This player will render the video stream onto the canvas.
        new JSMpeg.Player(streamURL, {
          canvas: canvasRef.current,
        });
      } catch (error) {
        // If an error occurs during the creation of the JSMpeg player, log the error.
    
      // Log an error message indicating which streamURL encountered the error.
      console.error(
        `An error occurred while creating player for ${streamURL}:`,
        error
      );
    }
    }, []);
    

    const handleMinimize = () => {
      setIsMinimized(true);
      setIsMaximized(false);
    };

    const handleMaximize = () => {
      setIsMinimized(false);
      setIsMaximized(true);
    };

    const handleRestore = () => {
      setIsMinimized(false);
      setIsMaximized(false);
    };

    return (
      <div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90"
        style={{ zIndex: 9999 }}
      >
        <div
          className="relative bg-black rounded-[10px] overflow-hidden"
          style={{
            height: isMinimized ? "300px" : isMaximized ? "90vh" : "500px",
            width: isMinimized ? "440px" : isMaximized ? "80%" : "780px",
          }}
        >
          <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="absolute top-8 right-8 flex gap-2">
          {isMaximized ? (
            <button className="text-white text-xl" onClick={handleRestore}>
              <FiMinimize />
            </button>
          ) : (
            <React.Fragment>
              {isMinimized ? (
                <button className="text-white text-xl" onClick={handleRestore}>
                  <FiMaximize />
                </button>
              ) : (
                <button className="text-white text-xl" onClick={handleMaximize}>
                  <FiMaximize />
                </button>
              )}
              <button className="text-white text-xl" onClick={handleMinimize}>
                <FiMinimize />
              </button>
            </React.Fragment>
          )}
          <button className="text-white text-xl" onClick={onClose}>
            <FiX />
          </button>
        </div>
      </div>
    );
  };

  const [selectedStreamURL, setSelectedStreamURL] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStreamClick = (streamURL) => {
    setSelectedStreamURL(streamURL);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStreamURL(null);
  };

  useEffect(() => {
    // This effect runs once when the component mounts, as indicated by the empty dependency array [].
  
    // Loop through each player configuration in the playerConfigs array.
    playerConfigs.forEach(({ streamURL, canvasRef }) => {
      try {
        // Check if the canvasRef has a current value.
        if (!canvasRef.current) {
          // If the canvasRef doesn't have a current value (is null or undefined),
          // create a new canvas element and assign it to the canvasRef.
          canvasRef.current = document.createElement("canvas");
        }
  
        // Create a new JSMpeg player instance with the provided streamURL and canvas.
        // This player will render the video stream onto the canvas.
        new JSMpeg.Player(streamURL, {
          canvas: canvasRef.current,
        });
      } catch (error) {
        // If an error occurs during the creation of the JSMpeg player, log the error.
        console.error(
          `An error occurred while creating player for ${streamURL}:`,
          error
        );
      }
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <div className="flex flex-wrap w-full gap-5 justify-normal m-4">
        {playerConfigs.map(({ streamURL, canvasRef }, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleStreamClick(streamURL)}
          >
           <canvas
            key={index}
            ref={canvasRef}
            className="bg-black my-2 rounded-[10px]"
            style={{ height: "240px", width: "375px" }}
          ></canvas>
          </div>
        ))}
      </div>
      {isModalOpen && selectedStreamURL && (
        <Modal streamURL={selectedStreamURL} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RTSPstream;
