import React, { useState, useEffect } from "react";
import ChartFour from "../charts/ChartFour";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const Statistics = () => {
  // Dummy statistic data

  return (
    <div className="p-6 ml-72 mt-20 font-customFont1 ">
      <Navbar />
      <Sidebar />

      <>
        {/* component */}
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap w-full gap-12 justify-center">
            {/* 1 card */}
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                {/* svg for worker performance */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Worker Performance</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  {/* svg for team */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Performance Team</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  {/* svg for remaining time */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>1 Week Left</p>
                </div>
                <div className="border-t-2" />
                <div className="flex justify-between">
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Team Members</p>
                    <div className="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Worker 1"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                        alt="Worker 2"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                        alt="Worker 3"
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Performance</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>34%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 card */}
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-purple-500 left-4 -top-6">
                {/* svg for attendance */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">
                  Attendance Statistics
                </p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  {/* svg for AI ML */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>AI-Enabled Analysis</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  {/* svg for real-time */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>Real-time Monitoring</p>
                </div>
                <div className="border-t-2 " />
                <div className="flex justify-between">
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Total Worker</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>231</p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Attendance</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>10% Present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                {/* svg for anomaly detection */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Anomaly Detection</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  {/* svg for team */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Detection Team</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  {/* svg for remaining time */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>2 Days Left</p>
                </div>
                <div className="border-t-2 " />
                <div className="flex justify-between">
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Team Members</p>
                    <div className="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Team Member 1"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                        alt="Team Member 2"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                        alt="Team Member 3"
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">
                      Anomaly Detection
                    </p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 card */}
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                {/* svg for equipment status */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Equipment Status</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  {/* svg for team */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Maintenance Team</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  {/* svg for remaining time */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>1 Month Left</p>
                </div>
                <div className="border-t-2 " />
                <div className="flex justify-between">
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Team Members</p>
                    <div className="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Team Member 1"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                        alt="Team Member 2"
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Progress</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>90%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
  <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-indigo-500 left-4 -top-6">
    {/* svg for CCTV camera */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
  <div className="mt-8">
    <p className="text-xl font-semibold my-2">CCTV Monitoring</p>
    <div className="flex space-x-2 text-gray-400 text-sm">
      {/* svg for location */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
      <p>Main Office</p>
    </div>
    <div className="flex space-x-2 text-gray-400 text-sm my-3">
      {/* svg for remaining time */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p>2 Days Left</p>
    </div>
    <div className="border-t-2" />
    <div className="flex justify-between">
      <div className="my-2">
        <p className="font-semibold text-base mb-2">Cameras</p>
        <div className="flex space-x-2">
          <img
            src="https://image.shutterstock.com/image-photo/cctv-camera-on-pole-260nw-600225191.jpg"
            alt="Camera 1"
            className="w-6 h-6 rounded-full"
          />
          <img
            src="https://image.shutterstock.com/image-photo/cctv-camera-on-pole-260nw-600225191.jpg"
            alt="Camera 2"
            className="w-6 h-6 rounded-full"
          />
          <img
            src="https://image.shutterstock.com/image-photo/cctv-camera-on-pole-260nw-600225191.jpg"
            alt="Camera 3"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
      <div className="my-2">
        <p className="font-semibold text-base mb-2">Alert Level</p>
        <div className="text-base text-indigo-600 font-semibold">
          <p>Low</p>
        </div>
      </div>
    </div>
  </div>


            </div>
          </div>
        </div>
      </>

      <h2 className="text-2xl text-black font-semibold p-4">
        Total work hours
      </h2>
      <ChartFour />
    </div>
  );
};

export default Statistics;
