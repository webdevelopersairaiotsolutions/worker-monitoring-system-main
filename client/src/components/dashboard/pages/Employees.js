import React, { useState } from "react";
import avatar from "../../../assets/avatar.png";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const Employees = () => {
  // Dummy employee data
  const employeesData = [
    {
      id: 1,
      name: "John Doe",
      position: "Laundry Operator",
      department: "Operations",
      avatar: avatar,
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Software Engineer",
      department: "Engineering",
      avatar: avatar,
      status: "active",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Sales Manager",
      department: "Sales",
      avatar: avatar,
      status: "inactive",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Graphic Designer",
      department: "Design",
      avatar: avatar,
      status: "inactive",
    },
    {
      id: 5,
      name: "David Wilson",
      position: "Accountant",
      department: "Finance",
      avatar: avatar,
      status: "active",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      position: "Human Resources Manager",
      department: "Human Resources",
      avatar: avatar,
      status: "inactive",
    },
    {
      id: 7,
      name: "Robert Garcia",
      position: "Customer Service Representative",
      department: "Customer Service",
      avatar: avatar,
      status: "active",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      position: "Marketing Specialist",
      department: "Marketing",
      avatar: avatar,
      status: "inactive",
    },
    {
      id: 9,
      name: "William Clark",
      position: "Operations Manager",
      department: "Operations",
      avatar: avatar,
      status: "active",
    },
    {
      id: 10,
      name: "Sophia Lee",
      position: "Product Manager",
      department: "Product Management",
      avatar: avatar,
      status: "inactive",
    },
    // Add more employees here
  ];

  const [employees, setEmployees] = useState(employeesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const handleEditEmployee = (employeeId) => {
    // Handle the edit functionality here
    console.log(`Edit employee with ID: ${employeeId}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    if (filter === "all") {
      return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        employee.department.toLowerCase() === filter.toLowerCase() &&
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "position") {
      return a.position.localeCompare(b.position);
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div className="p-6 ml-72 mt-20">
      <Navbar />
      <Sidebar />

      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div className="md:mb-0">
            <input
              type="text"
              placeholder="Search employees"
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="filter" className="font-medium text-sm">
                Filter by Department:
              </label>
              <select
                id="filter"
                className="w-40 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                {/* Add more departments here */}
              </select>
            </div>
            <div>
              <label htmlFor="sort" className="font-medium text-sm">
                Sort by:
              </label>
              <select
                id="sort"
                className="w-40 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="name">Name</option>
                <option value="position">Position</option>
                {/* Add more sorting options here */}
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-16 pl- py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                       <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt={employee.name}
                />
                      {employee.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{employee.position}</td>
                  <td className="px-6 py-4 text-sm">{employee.department}</td>
                  <td className="px-6 py-4 text-sm">
                    {employee.status === "active" ? (
                      <span className="text-green-600 font-semibold">
                        Active
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        On Leave
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="/worker-profile"
                      className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
