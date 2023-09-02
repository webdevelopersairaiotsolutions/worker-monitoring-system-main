import React, { useState } from "react";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const WorkerMonitoringSystem = () => {
  const initialNotifications = [
    {
      id: 1,
      title: "Task Assigned",
      description: "You have been assigned a new task.",
      status: "blue", // Meant to be done
      read: false,
    },
    {
      id: 2,
      title: "Task In Progress",
      description: "Task #123 is in progress.",
      status: "yellow", // In progress
      read: false,
    },
    {
      id: 3,
      title: "Task Completed",
      description: "Task #456 has been completed successfully.",
      status: "green", // Everything OK or done
      read: false,
    },
    {
      id: 4,
      title: "Equipment Maintenance",
      description: "Maintenance of equipment #789 is scheduled.",
      status: "blue", // Meant to be done
      read: true,
    },
    {
      id: 5,
      title: "Unauthorized Access Detected",
      description: "An unauthorized person was detected in the restricted area.",
      status: "red", // Hazard or anomaly detected
      read: false,
    },
    {
      id: 6,
      title: "Shift Reminder",
      description: "Your shift will begin in one hour.",
      status: "green", // Everything OK or done
      read: false,
    },
    {
      id: 7,
      title: "Task In Progress",
      description: "Task #890 is in progress.",
      status: "yellow", // In progress
      read: false,
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortOrderSelectChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredNotifications = notifications.filter((notification) =>
    notification.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedNotifications = filteredNotifications.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="p-6 ml-72 mt-20 font-customFont1">
      <Navbar />
      <Sidebar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-md border p-4 ${
              notification.status === "blue"
                ? "border-blue-200 bg-blue-100"
                : notification.status === "green"
                ? "border-green-200 bg-green-100"
                : notification.status === "yellow"
                ? "border-yellow-200 bg-yellow-100"
                : "border-red-200 bg-red-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  {/* Your SVG path */}
                </svg>
                <h4 className="ml-2 text-md leading-6 font-medium">
                  {notification.title}
                </h4>
              </div>
              <button
                type="button"
                className={`rounded-md focus:outline-none focus:ring-2 ${
                  notification.status === "blue"
                    ? "focus:ring-blue-500"
                    : notification.status === "green"
                    ? "focus:ring-green-500"
                    : notification.status === "yellow"
                    ? "focus:ring-yellow-500"
                    : "focus:ring-red-500"
                }`}
              >
                {/* Your SVG path for button */}
              </button>
            </div>
            <p className="text-sm mt-2">{notification.description}</p>
            <div className="flex mt-3">
              <button
                type="button"
                className={`w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium ${
                  notification.status === "blue"
                    ? "border-transparent bg-blue-700 text-white hover:bg-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    : notification.status === "green"
                    ? "border-transparent bg-green-700 text-white hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    : notification.status === "yellow"
                    ? "border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                    : "border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                }`}
              >
                Investigate
              </button>
              <button
                type="button"
                className={`w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 ml-2 text-base font-medium ${
                  notification.status === "blue"
                    ? "border-transparent bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                    : notification.status === "green"
                    ? "border-transparent bg-green-200 text-green-800 hover:bg-green-300 focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                    : notification.status === "yellow"
                    ? "border-transparent bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                    : "border-transparent bg-red-200 text-red-800 hover:bg-red-300 focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                }`}
              >
                Dismiss
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkerMonitoringSystem;
