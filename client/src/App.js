import React, { useEffect, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginContext } from "./components/ContextProvider/Context";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/dashboard/pages/Profile";
import Dashboard from "./components/Dashboard";
import Employees from "./components/dashboard/pages/Employees";
import Statistics from "./components/dashboard/pages/Statistics";
import Settings from "./components/dashboard/pages/Settings";
import Error from "./components/Error";
import Alerts from "./components/dashboard/pages/Alerts";
import PeopleDetection from "./components/dashboard/pages/PeopleDetection";
import ViewAllFeed from "./components/dashboard/pages/live-video-page/cameras/ViewAllFeed";
import ForgotPassword from "./components/login/ForgotPassword";
import RTSPPersonDetectionComponent from "./components/dashboard/pages/live-video-page/AI detection/RTSPPersonDetectionComponent";
import SaasLandingPage from "./components/LandingPage";
import LiveVideoFeed from "./components/dashboard/pages/live-video-page/LiveVideoFeed";
import RTSPstream from "./components/dashboard/pages/RTSPstream";
import WorkerProfile from "./components/dashboard/pages/WorkerProfile";

function App() {
  const [data, setData] = useState(false);
  const { setLoginData } = useContext(LoginContext);

  useEffect(() => {
    const DashboardValid = async () => {
      let token = localStorage.getItem("usersdatatoken");

      const res = await fetch("/validuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const data = await res.json();

      if (data.status === 401 || !data) {
        console.log("user not valid");
      } else {
        console.log("user verified");
        setLoginData(data);
      }
    };

    const fetchData = async () => {
      await DashboardValid();
      setData(true);
    };

    fetchData();
  }, [setLoginData]);

  return (
    <>
      {data ? (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/worker-profile" element={<WorkerProfile />} />
            <Route path="/people-detection" element={<PeopleDetection />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/live-video-feed" element={<LiveVideoFeed />} />
            <Route path="/view-all-feed" element={<ViewAllFeed />} />
            <Route path="/rtsp-stream" element={<RTSPstream />} />
            <Route path="/saas-landing-page" element={<SaasLandingPage />} />
            <Route
              path="/RTSPPersonDetectionComponent"
              element={<RTSPPersonDetectionComponent />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <div className="flex justify-center ml-60 mt-8 items-center h-screen">
          Loading...
        </div>
      )}
    </>
  );
}

export default App;
