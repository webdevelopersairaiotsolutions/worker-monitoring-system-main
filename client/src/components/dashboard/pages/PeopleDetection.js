import React, { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import Webcam from "react-webcam";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const PeopleDectection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [peopleCount, setPeopleCount] = useState(0);

  useEffect(() => {
    const runCoco = async () => {
      const net = await cocoSsd.load();
      console.log("COCO-SSD model loaded.");

      setInterval(() => {
        detect(net);
      }, 100);
    };

    const detect = async (net) => {
      // Check if webcam data is available
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get video properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width and height
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Set canvas width and height
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Detect objects
        const predictions = await net.detect(video);

        // Get canvas context
        const ctx = canvasRef.current.getContext("2d");

        // Clear canvas
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Filter predictions to only include "person" class
        const personPredictions = predictions.filter(
          (prediction) => prediction.class === "person"
        );

        // Update people count
        setPeopleCount(personPredictions.length);

        // Draw bounding boxes and labels for person predictions
        personPredictions.forEach((prediction) => {
          const [x, y, width, height] = prediction.bbox;

          // Draw bounding box
          ctx.beginPath();
          ctx.rect(x, y, width, height);
          ctx.lineWidth = 2;
          ctx.strokeStyle = "red";
          ctx.fillStyle = "red";
          ctx.globalAlpha = 0.5;
          ctx.stroke();

          // Draw label
          ctx.globalAlpha = 1;
          ctx.font = "16px Arial";
          ctx.fillStyle = "red";
          ctx.fillText("Person", x, y > 10 ? y - 5 : 10);
        });
      }
    };

    runCoco();
  }, []);

  return (
    <div className="p-6 ml-60 mt-14">
       <Navbar />
      <Sidebar />
      <h1 className="title">Real-Time Object Detection</h1>
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </div>
      <h2 className="count">People Detected: {peopleCount}</h2>
    </div>
  );
};

export default PeopleDectection;
