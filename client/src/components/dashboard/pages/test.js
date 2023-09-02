import React, { useRef, useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const RTSPstream = () => {
  const playerConfigs = [
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

  useEffect(() => {
    playerConfigs.forEach(({ streamURL, canvasRef }) => {
      try {
        if (!canvasRef.current) {
          canvasRef.current = document.createElement("canvas");
        }
        new JSMpeg.Player(streamURL, {
          canvas: canvasRef.current,
        });
      } catch (error) {
        console.error(
          `An error occurred while creating player for ${streamURL}:`,
          error
        );
      }
    });
  }, []);

  return (
    <div className="p-6 ml-72 mt-14">
      <Navbar />
      <Sidebar />
      <div className="flex flex-wrap w-full gap-3 justify-normal">
        {playerConfigs.map(({ canvasRef }, index) => (
          <canvas
            key={index}
            ref={canvasRef}
            className="bg-black rounded-[10px]"
            style={{ height: "240px", width: "375px" }}
          ></canvas>
        ))}
      </div>
    </div>
  );
};

export default RTSPstream;
