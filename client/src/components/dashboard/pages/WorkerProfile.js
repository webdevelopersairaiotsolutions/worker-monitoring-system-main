import React from "react";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

function WorkerProfile() {
  return (
    <div>
      <div className="p-16 p-6 ml-72 mt-20">
        <Navbar />
        <Sidebar />
        <div className="p-4 bg-white shadow mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">22</p>
                <p className="text-gray-400">Orders Completed</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">10</p>
                <p className="text-gray-400">Customers Served</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400">Reviews</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  className="h-48 w-48 rounded-full mx-auto"
                  src="https://media.istockphoto.com/id/184100493/photo/confident-businesswoman-portrait-isolated.jpg?s=612x612&w=0&k=20&c=Ja_BgLtbME1fKk17-kVDAs0b7rFkjf4WfSVi4WEYLvw="
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-12 space-x-4">
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Connect
              </a>
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Message
              </a>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="container mx-auto my-5 p-5">
              <div className="md:flex no-wrap md:-mx-2">
                <div className="w-full md:w-3/12 md:mx-2">
                  {/* Profile Card Content */}
                  <div className="bg-white p-3 border-t-4 border-yellow-400">
                    <div className="image overflow-hidden"></div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                      Emily Johnson
                    </h1>
                    <h3 className="text-gray-600 font-lg text-semibold leading-6">
                      Laundry Operator at Laundry Solutions
                    </h3>
                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                      Committed laundry operator ensuring the highest quality
                      standards in garment care. Detail-oriented and efficient
                      in managing laundry processes to meet customer needs.
                    </p>
                    <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                      <li className="flex items-center py-3">
                        <span>Current Status</span>
                        <span className="ml-auto">
                          <span className="bg-yellow-500 py-1 px-2 rounded text-white text-sm">
                            On Duty
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span>Employment Since</span>
                        <span className="ml-auto">Jan 10, 2022</span>
                      </li>
                    </ul>
                  </div>

                  <div className="my-4"></div>

                  {/* Friends Card Content */}
                  <div className="bg-white p-3 hover:shadow">
                    <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                      <span className="text-green-500">
                        <svg
                          className="h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                      <span>Employees in the Same Department</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-center my-2">
                        <img
                          className="h-16 w-16 rounded-full mx-auto"
                          src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                          alt=""
                        />
                        <a href="#" className="text-main-color">
                          Kojstantin
                        </a>
                      </div>
                      <div className="text-center my-2">
                        <img
                          className="h-16 w-16 rounded-full mx-auto"
                          src="https://avatars2.githubusercontent.com/u/24622175?s=60&v=4"
                          alt=""
                        />
                        <a href="#" className="text-main-color">
                          James
                        </a>
                      </div>
                      <div className="text-center my-2">
                        <img
                          className="h-16 w-16 rounded-full mx-auto"
                          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                          alt=""
                        />
                        <a href="#" className="text-main-color">
                          Natie
                        </a>
                      </div>
                      <div className="text-center my-2">
                        <img
                          className="h-16 w-16 rounded-full mx-auto"
                          src="https://e1.pxfuel.com/desktop-wallpaper/534/172/desktop-wallpaper-stylish-people-to-follow-on-instagram-instagram-girl-profile-pic.jpg"
                          alt=""
                        />
                        <a href="#" className="text-main-color">
                          Casey
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-9/12 mx-2 h-64">
                  {/* About Section Content */}
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span className="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">About Emily Johnson</span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            First Name
                          </div>
                          <div className="px-4 py-2">Emily</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Last Name
                          </div>
                          <div className="px-4 py-2">Johnson</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Gender</div>
                          <div className="px-4 py-2">Female</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Contact No.
                          </div>
                          <div className="px-4 py-2">+11 987654321</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Current Address
                          </div>
                          <div className="px-4 py-2">
                            Beech Creek, PA, Pennsylvania
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Permanent Address
                          </div>
                          <div className="px-4 py-2">
                            Arlington Heights, IL, Illinois
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Email</div>
                          <div className="px-4 py-2">
                            <a
                              className="text-blue-800"
                              href="mailto:emily@example.com"
                            >
                              emily@example.com
                            </a>
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Birthday
                          </div>
                          <div className="px-4 py-2">May 21, 1995</div>
                        </div>
                      </div>
                    </div>
                    <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                      Show Full Information
                    </button>
                  </div>

                  <div className="my-4"></div>

                  {/* Experience and Education Content */}
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="grid grid-cols-2">
                      <div>
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                          <span className="text-green-500">
                            <svg
                              className="h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </span>
                          <span className="tracking-wide">Experience</span>
                        </div>
                        <ul className="list-inside space-y-2">
                          <li>
                            <div className="text-teal-600">
                              Laundry Operator at FreshClean Laundries
                            </div>
                            <div className="text-gray-500 text-xs">
                              June 2022 - Present
                            </div>
                          </li>
                          <li>
                            <div className="text-teal-600">
                              Laundry Assistant at Spotless Linen Services
                            </div>
                            <div className="text-gray-500 text-xs">
                              September 2020 - May 2022
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                          <span className="text-green-500">
                            <svg
                              className="h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path
                                fill="#fff"
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                              />
                            </svg>
                          </span>
                          <span className="tracking-wide">Education</span>
                        </div>
                        <ul className="list-inside space-y-2">
                          <li>
                            <div className="text-teal-600">
                              Laundry Operations Certification
                            </div>
                            <div className="text-gray-500 text-xs">
                              January 2020 - April 2020
                            </div>
                          </li>
                          <li>
                            <div className="text-teal-600">
                              High School Diploma
                            </div>
                            <div className="text-gray-500 text-xs">
                              June 2017 - May 2020
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerProfile;
