import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import imagedashboard from "../assets/dashboard.jpg";
import imagedashboard1 from "../assets/dashboard1.jpg";

const SaasLandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500 py-10 dark:text-gray-100">
        <nav className="top-0 left-0 w-full px-8 flex items-center justify-center">
          <a href="/" className="text-3xl font-bold text-blue-500">
            LOGO
          </a>
          <ul className="ml-8 space-x-4 flex items-center">
            <li className="inline-block">
              <Link
                activeClass="text-blue-200"
                to="featuresSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-100 text-md font-customFont1 hover:text-blue-200 cursor-pointer transition-colors duration-300"
              >
                Features
              </Link>
            </li>
            <li className="inline-block">
              <Link
                activeClass="text-blue-200"
                to="pricingSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-100 text-md font-customFont1 hover:text-blue-200 cursor-pointer transition-colors duration-300"
              >
                Pricing
              </Link>
            </li>
            <li className="inline-block">
              <Link
                activeClass="text-blue-200"
                to="aboutUsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-100 text-md font-customFont1 hover:text-blue-200 cursor-pointer transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="inline-block">
              <Link
                activeClass="text-blue-200"
                to="contactSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-100 text-md font-customFont1 hover:text-blue-200 cursor-pointer transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          {/* Left Section (Text) */}
          <div className="flex flex-col justify-center p-6 md:pl-16 text-center sm:text-left rounded-lg lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
              Welcome to the Future{" "}
              <span className="text-blue-900">of Industrial Laundry:</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg text-gray-100">
              Elevating Work Productivity with AI and ML Expertise!
            </p>
            <div className="mt-8 sm:mt-12">
              <a
                href="/"
                className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>

            {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#_"
              className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Button Text</span>
            </a>
          </div> */}
          </div>

          {/* Right Section (Image) */}
          <div className="relative flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={imagedashboard}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md shadow-xl"
            />

            {/* Overlapping Image */}
            {/* <img
            src={imagedashboard1}
            alt=""
            className="absolute top-0 left-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 object-contain"
          /> */}
          </div>
        </div>
      </section>

      {/* Features Section */}

      <div
        id="featuresSection"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x={0}
                    y={0}
                    width=".135"
                    height=".30"
                  >
                    <circle cx={1} cy={1} r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width={52}
                  height={24}
                />
              </svg>
              <span className="relative">
                Discover Our Comprehensive Solutions:
              </span>
            </span>
            What Do We Have to Offer?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Unlocking the Full Potential of Your Workforce with Our Advanced
            Worker Monitoring System
          </p>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Intuitive Dashboard
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                A clean and user-friendly dashboard that provides a clear
                overview of workers' activities, statistics, and performance
                metrics at a glance.
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Data Security</h6>
              <p className="mb-3 text-sm text-gray-900">
                Ensuring that all worker data is securely stored and access to
                sensitive information is restricted to authorized personnel
                only.
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>

          <div className="flex flex-col justify-between p-5 border rounded shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                AI-Powered Insights
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Unleashing the Potential of Worker Monitoring with Smart
                Analysis
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Simple Onboarding
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Easy-to-follow onboarding process for setting up the system and
                adding workers, requiring minimal technical knowledge.
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Pricing Section */}

      <>
        <main
          id="pricingSection"
          className="max-w-6xl mx-auto pt-10 pb-18 px-8"
        >
          <div className="max-w-md mx-auto mb-14 text-center">
            <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
              <span className="text-indigo-600">Flexible</span> Plans
            </h1>
            <p className="text-xl text-gray-500 font-medium">
              Choose a plan that works best for you and your team.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
            <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
              <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                <img
                  src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                  alt=""
                  className="rounded-3xl w-20 h-20"
                />
                <div className="ml-5">
                  <span className="block text-2xl font-semibold">Basic</span>
                  <span>
                    <span className="font-medium text-gray-500 text-xl align-top">
                      $ 
                    </span>
                    <span className="text-3xl font-bold">10 </span>
                  </span>
                  <span className="text-gray-500 font-medium">/ user</span>
                </div>
              </div>
              <ul className="mb-7 font-medium text-gray-500">
                <li className="flex text-lg mb-2">
                  <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                  <span className="ml-3">
                    Get started with{" "}
                    <span className="text-black">messaging</span>
                  </span>
                </li>
                <li className="flex text-lg mb-2">
                  <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                  <span className="ml-3">
                    Flexible <span className="text-black">team meetings</span>
                  </span>
                </li>
                <li className="flex text-lg">
                  <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                  <span className="ml-3">
                    <span className="text-black">5 TB</span> cloud storage
                  </span>
                </li>
              </ul>
              <a
                href="#/"
                className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
              >
                Choose Plan
                <img
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                />
              </a>
            </div>
            <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
              <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                <img
                  src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                  alt=""
                  className="rounded-3xl w-20 h-20"
                />
                <div className="ml-5">
                  <span className="block text-3xl font-semibold text-white">
                    Startup
                  </span>
                  <span>
                    <span className="font-medium text-xl align-top">$ </span>
                    <span className="text-3xl font-bold text-white">24 </span>
                  </span>
                  <span className="font-medium">/ user</span>
                </div>
              </div>
              <ul className="mb-10 font-medium text-xl">
                <li className="flex mb-6">
                  <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                  <span className="ml-3">
                    All features in <span className="text-white">Basic</span>
                  </span>
                </li>
                <li className="flex mb-6">
                  <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                  <span className="ml-3">
                    Flexible <span className="text-white">call scheduling</span>
                  </span>
                </li>
                <li className="flex">
                  <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                  <span className="ml-3">
                    <span className="text-white">15 TB</span> cloud storage
                  </span>
                </li>
              </ul>
              <a
                href="#/"
                className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
              >
                Choose Plan
                <img
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                />
              </a>
            </div>
            <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
              <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                <img
                  src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                  alt=""
                  className="rounded-3xl w-20 h-20"
                />
                <div className="ml-5">
                  <span className="block text-2xl font-semibold">
                    Enterprise
                  </span>
                  <span>
                    <span className="font-medium text-gray-500 text-xl align-top">
                      $ 
                    </span>
                    <span className="text-3xl font-bold">35 </span>
                  </span>
                  <span className="text-gray-500 font-medium">/ user</span>
                </div>
              </div>
              <ul className="mb-7 font-medium text-gray-500">
                <li className="flex text-lg mb-2">
                  <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                  <span className="ml-3">
                    All features in <span className="text-black">Startup</span>
                  </span>
                </li>
                <li className="flex text-lg mb-2">
                  <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                  <span className="ml-3">
                    Growth <span className="text-black">oriented</span>
                  </span>
                </li>
                <li className="flex text-lg">
                  <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                  <span className="ml-3">
                    <span className="text-black">Unlimited</span> cloud storage
                  </span>
                </li>
              </ul>
              <a
                href="#/"
                className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
              >
                Choose Plan
                <img
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                />
              </a>
            </div>
          </div>
        </main>
      </>

      {/* AboutUsSection */}
      <section
        id="aboutUsSection"
        className="flex items-center pt-10 md:pt-2 xl:h-screen font-poppins  "
      >
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 md:text-center md:mb-20">
            <h2 className="pb-2 text-3xl font-bold text-gray-800 md:text-4xl ">
              What we do
            </h2>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-blue-200"></div>
              <div className="flex-1 h-2 bg-blue-400"></div>
              <div className="flex-1 h-2 bg-blue-300"></div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <img
                src={imagedashboard1}
                alt=""
                className="relative z-40 object-cover w-full h-96 rounded-md shadow-xl"
              />
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-800 border-l-4 border-blue-500 dark:border-blue-400 ">
                Providing Efficient Worker Monitoring
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 ">
                Improve laundry operations and productivity with our advanced
                Worker Monitoring System. Our system allows you to track worker
                activities, optimize processes, and ensure smooth operations.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600 ">
                  <span className="mr-3 text-blue-500  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Streamline laundry processes for maximum efficiency.
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 ">
                  <span className="mr-3 text-blue-500 dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Ensure timely completion of tasks and improve customer
                  satisfaction.
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 ">
                  <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Iron man ipsum dolor sit amet, consectetur adipiscing
                </li>
              </ul>
              <a
                href="#"
                className="px-4 py-3 text-blue-700 transition-all transform border border-blue-500 hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contactSection">
        {/* ====== Contact Section Start */}
        <section className="relative z-10 overflow-hidden mx-8 bg-gray-100 py-20 lg:py-10">
          <div className="container mx-auto">
            <h2 className="text-dark mb-6 text-3xl text-center font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              GET IN TOUCH WITH US
            </h2>
            <p className="w-full text-body-color mb-9 md:px-32 text-center leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </p>
            <div className="-mx-4 flex flex-wrap lg:justify-between">
              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-dark mb-1 text-xl font-bold">
                        Our Location
                      </h4>
                      <p className="text-body-color text-base">
                        99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width={24}
                        height={26}
                        viewBox="0 0 24 26"
                        className="fill-current"
                      >
                        <path d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z" />
                        <path d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z" />
                        <path d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-dark mb-1 text-xl font-bold">
                        Phone Number
                      </h4>
                      <p className="text-body-color text-base">
                        (+62)81 414 257 9980
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width={28}
                        height={19}
                        viewBox="0 0 28 19"
                        className="fill-current"
                      >
                        <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-dark mb-1 text-xl font-bold">
                        Email Address
                      </h4>
                      <p className="text-body-color text-base">
                        info@yourdomain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                  <form>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Phone"
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows={6}
                        placeholder="Your Message"
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-blue-700 border-primary w-full rounded border p-3 text-white transition hover:bg-blue-400"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  <div>
                    <span className="absolute -top-10 -right-9 z-[-1]">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                    <span className="absolute -right-10 top-[90px] z-[-1]">
                      <svg
                        width={34}
                        height={134}
                        viewBox="0 0 34 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="31.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                    <span className="absolute -left-7 -bottom-7 z-[-1]">
                      <svg
                        width={107}
                        height={134}
                        viewBox="0 0 107 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="104.999"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 104.999 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 104.999 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 104.999 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 104.999 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 104.999 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 104.999 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 104.999 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 104.999 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 104.999 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 104.999 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 90.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 90.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 90.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 90.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 90.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 90.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 90.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 90.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 90.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 90.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 75.6654 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 75.6654 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 75.6654 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 75.6654 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 75.6654 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 75.6654 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 75.6654 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 75.6654 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 75.6654 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 75.6654 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 60.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 60.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 60.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 60.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 60.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 60.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 60.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 60.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 60.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 60.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 46.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 46.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 46.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 46.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 46.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 46.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 46.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 46.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 46.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 46.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Contact Section End */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600">
                <svg
                  className="h-8"
                  viewBox="0 0 118 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.83 19.2047C37.2352 19.237 36.6469 19.0679 36.16 18.7247C35.9566 18.5739 35.7929 18.3758 35.6831 18.1476C35.5733 17.9193 35.5208 17.6678 35.53 17.4147V8.1447C35.5252 8.1055 35.5293 8.0656 35.5422 8.0282C35.555 7.9908 35.5762 7.9569 35.6042 7.9289C35.6322 7.9009 35.6661 7.8797 35.7035 7.8669C35.7409 7.854 35.7808 7.8499 35.82 7.8547H37.5C37.69 7.8547 37.78 7.9547 37.78 8.1447V16.6947C37.78 17.0747 37.95 17.2647 38.3 17.2647C38.4484 17.2708 38.5968 17.254 38.74 17.2147C38.94 17.2147 39.05 17.2747 39.06 17.4547L39.21 18.7047C39.2172 18.7412 39.2165 18.7787 39.208 18.8149C39.1995 18.851 39.1833 18.885 39.1605 18.9143C39.1378 18.9437 39.109 18.9679 39.0762 18.9852C39.0433 19.0025 39.0071 19.0126 38.97 19.0147C38.602 19.1363 38.2175 19.2004 37.83 19.2047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M47.28 18.1347C46.4359 18.8322 45.375 19.2137 44.28 19.2137C43.185 19.2137 42.1242 18.8322 41.28 18.1347C40.5381 17.3857 40.1218 16.374 40.1218 15.3197C40.1218 14.2654 40.5381 13.2537 41.28 12.5047C42.1258 11.8108 43.186 11.4316 44.28 11.4316C45.374 11.4316 46.4342 11.8108 47.28 12.5047C48.0049 13.2606 48.4096 14.2674 48.4096 15.3147C48.4096 16.362 48.0049 17.3688 47.28 18.1247V18.1347ZM42.86 16.8147C43.2518 17.1696 43.7614 17.3661 44.29 17.3661C44.8186 17.3661 45.3283 17.1696 45.72 16.8147C46.0746 16.4071 46.2698 15.885 46.2698 15.3447C46.2698 14.8045 46.0746 14.2824 45.72 13.8747C45.3283 13.5199 44.8186 13.3233 44.29 13.3233C43.7614 13.3233 43.2518 13.5199 42.86 13.8747C42.5055 14.2824 42.3102 14.8045 42.3102 15.3447C42.3102 15.885 42.5055 16.4071 42.86 16.8147Z"
                    fill="currentColor"
                  />
                  <path
                    d="M57.66 11.6847C57.85 11.6847 57.94 11.7847 57.94 11.9747V19.1447C57.9575 19.6287 57.8669 20.1104 57.6749 20.5549C57.4829 20.9995 57.1943 21.3957 56.83 21.7147C56.0214 22.4042 54.9816 22.7615 53.92 22.7147C52.9612 22.7484 52.0151 22.4866 51.21 21.9647C50.8662 21.739 50.5725 21.4449 50.3472 21.1009C50.1218 20.7568 49.9696 20.3701 49.9 19.9647C49.9 19.7647 49.9 19.6747 50.17 19.6747H51.85C51.9213 19.6771 51.9905 19.7002 52.049 19.741C52.1076 19.7818 52.1531 19.8386 52.18 19.9047C52.289 20.2084 52.5062 20.4613 52.79 20.6147C53.1359 20.7932 53.5209 20.8826 53.91 20.8747C54.1448 20.8876 54.3798 20.8535 54.6013 20.7745C54.8228 20.6956 55.0263 20.5732 55.2 20.4147C55.3587 20.2489 55.4821 20.0526 55.5629 19.8378C55.6437 19.623 55.6801 19.394 55.67 19.1647V18.5347C55.0685 18.9771 54.3364 19.2059 53.59 19.1847C53.0676 19.2037 52.5468 19.117 52.0587 18.9297C51.5707 18.7423 51.1256 18.4584 50.75 18.0947C50.0291 17.3489 49.6261 16.3521 49.6261 15.3147C49.6261 14.2774 50.0291 13.2806 50.75 12.5347C51.1274 12.1743 51.5731 11.8931 52.0608 11.7076C52.5486 11.5221 53.0685 11.4361 53.59 11.4547C54.358 11.4344 55.1098 11.678 55.72 12.1447V11.9847C55.7154 11.9464 55.7194 11.9075 55.7317 11.8709C55.744 11.8344 55.7643 11.801 55.7911 11.7732C55.8179 11.7454 55.8506 11.724 55.8867 11.7104C55.9229 11.6968 55.9616 11.6915 56 11.6947L57.66 11.6847ZM53.78 17.4047C54.0376 17.4127 54.2939 17.364 54.5306 17.262C54.7673 17.1601 54.9788 17.0074 55.15 16.8147C55.4825 16.3854 55.6629 15.8577 55.6629 15.3147C55.6629 14.7717 55.4825 14.2441 55.15 13.8147C54.9794 13.6247 54.7692 13.4742 54.5343 13.374C54.2993 13.2738 54.0453 13.2263 53.79 13.2347C53.5294 13.2265 53.2702 13.275 53.0302 13.3769C52.7902 13.4788 52.5752 13.6316 52.4 13.8247C52.0317 14.2354 51.838 14.7735 51.86 15.3247C51.842 15.8705 52.0314 16.4029 52.39 16.8147C52.5656 17.0073 52.7807 17.1598 53.0206 17.2616C53.2605 17.3634 53.5195 17.4122 53.78 17.4047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M66.57 18.1347C65.7242 18.8286 64.664 19.2078 63.57 19.2078C62.476 19.2078 61.4158 18.8286 60.57 18.1347C59.8445 17.3771 59.4395 16.3687 59.4395 15.3197C59.4395 14.2708 59.8445 13.2623 60.57 12.5047C61.4166 11.8126 62.4765 11.4345 63.57 11.4345C64.6635 11.4345 65.7234 11.8126 66.57 12.5047C67.2949 13.2606 67.6996 14.2674 67.6996 15.3147C67.6996 16.362 67.2949 17.3688 66.57 18.1247V18.1347ZM62.14 16.8147C62.3317 16.9971 62.5577 17.1396 62.8049 17.234C63.0521 17.3284 63.3155 17.3729 63.58 17.3647C63.8428 17.3715 64.1044 17.3265 64.3498 17.2321C64.5952 17.1377 64.8195 16.9959 65.01 16.8147C65.3588 16.4043 65.5503 15.8833 65.5503 15.3447C65.5503 14.8061 65.3588 14.2851 65.01 13.8747C64.8195 13.6936 64.5952 13.5517 64.3498 13.4574C64.1044 13.363 63.8428 13.3179 63.58 13.3247C63.3155 13.3166 63.0521 13.361 62.8049 13.4554C62.5577 13.5498 62.3317 13.6924 62.14 13.8747C61.7913 14.2851 61.5998 14.8061 61.5998 15.3447C61.5998 15.8833 61.7913 16.4043 62.14 16.8147Z"
                    fill="currentColor"
                  />
                  <path
                    d="M71.31 9.9847C71.0457 10.2161 70.7063 10.3436 70.355 10.3436C70.0037 10.3436 69.6644 10.2161 69.4 9.9847C69.2802 9.8716 69.1847 9.7352 69.1194 9.5839C69.0542 9.4326 69.0205 9.2695 69.0205 9.1047C69.0205 8.9399 69.0542 8.7769 69.1194 8.6255C69.1847 8.4742 69.2802 8.3378 69.4 8.2247C69.6671 7.9991 70.0054 7.8754 70.355 7.8754C70.7046 7.8754 71.0429 7.9991 71.31 8.2247C71.4299 8.3378 71.5254 8.4742 71.5906 8.6255C71.6559 8.7769 71.6895 8.9399 71.6895 9.1047C71.6895 9.2695 71.6559 9.4326 71.5906 9.5839C71.5254 9.7352 71.4299 9.8716 71.31 9.9847ZM71.52 19.2047C70.9256 19.2339 70.3383 19.0651 69.85 18.7247C69.6497 18.5717 69.4888 18.3729 69.381 18.145C69.2731 17.9171 69.2213 17.6667 69.23 17.4147V11.9747C69.2252 11.9355 69.2293 11.8956 69.2422 11.8582C69.255 11.8208 69.2762 11.7869 69.3042 11.7589C69.3322 11.7309 69.3661 11.7097 69.4035 11.6969C69.4409 11.684 69.4808 11.6799 69.52 11.6847H71.2C71.39 11.6847 71.48 11.7847 71.48 11.9747V16.6947C71.48 17.0747 71.65 17.2647 71.99 17.2647C72.1417 17.2702 72.2933 17.2533 72.44 17.2147C72.64 17.2147 72.75 17.2747 72.76 17.4547L72.91 18.7047C72.9172 18.7412 72.9165 18.7787 72.908 18.8149C72.8995 18.851 72.8833 18.885 72.8605 18.9143C72.8378 18.9437 72.809 18.9679 72.7762 18.9852C72.7433 19.0025 72.7071 19.0126 72.67 19.0147C72.2988 19.137 71.9109 19.2011 71.52 19.2047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M79.09 11.4447C79.6148 11.424 80.1383 11.5089 80.6296 11.6944C81.1209 11.88 81.57 12.1623 81.95 12.5247C82.6572 13.2837 83.0504 14.2824 83.0504 15.3197C83.0504 16.357 82.6572 17.3558 81.95 18.1147C81.5718 18.4804 81.1233 18.7655 80.6317 18.9528C80.1401 19.1402 79.6157 19.2259 79.09 19.2047C78.3412 19.2214 77.6073 18.9932 77 18.5547V22.1647C77 22.3547 76.9 22.4447 76.71 22.4447H75.03C74.9917 22.4519 74.9522 22.4496 74.9149 22.4381C74.8777 22.4265 74.8438 22.4061 74.8162 22.3785C74.7887 22.3509 74.7682 22.3171 74.7567 22.2798C74.7451 22.2426 74.7429 22.2031 74.75 22.1647V13.9647C74.7618 13.8845 74.7546 13.8027 74.7292 13.7257C74.7037 13.6488 74.6605 13.5788 74.6032 13.5215C74.5459 13.4642 74.476 13.4211 74.399 13.3956C74.3221 13.3701 74.2402 13.363 74.16 13.3747H73.83C73.61 13.3747 73.5 13.2947 73.5 13.1347V11.9547C73.4948 11.8817 73.5148 11.8091 73.5567 11.7491C73.5985 11.689 73.6597 11.6451 73.73 11.6247C74.0759 11.499 74.442 11.438 74.81 11.4447C75.177 11.4122 75.5453 11.4901 75.8678 11.6682C76.1902 11.8464 76.4522 12.1168 76.62 12.4447C76.9421 12.1189 77.3273 11.8622 77.752 11.6902C78.1767 11.5183 78.632 11.4347 79.09 11.4447ZM77.53 16.8147C77.7083 17.0011 77.9225 17.1494 78.1597 17.2507C78.3969 17.352 78.6521 17.4042 78.91 17.4042C79.1679 17.4042 79.4232 17.352 79.6603 17.2507C79.8975 17.1494 80.1117 17.0011 80.29 16.8147C80.6656 16.3958 80.8629 15.8469 80.84 15.2847C80.8662 14.7221 80.6684 14.1719 80.29 13.7547C80.1117 13.5684 79.8975 13.4201 79.6603 13.3188C79.4232 13.2174 79.1679 13.1652 78.91 13.1652C78.6521 13.1652 78.3969 13.2174 78.1597 13.3188C77.9225 13.4201 77.7083 13.5684 77.53 13.7547C77.1662 14.1793 76.9768 14.726 77 15.2847C76.9797 15.843 77.1688 16.3887 77.53 16.8147Z"
                    fill="currentColor"
                  />
                  <path
                    d="M87.77 19.2047C86.8723 19.2416 85.9822 19.0269 85.2 18.5847C84.8862 18.3957 84.619 18.1384 84.4181 17.832C84.2173 17.5256 84.0881 17.1779 84.04 16.8147C84.04 16.6147 84.11 16.5147 84.33 16.5147H85.8C85.8699 16.5175 85.9378 16.5394 85.996 16.5783C86.0542 16.6171 86.1006 16.6712 86.13 16.7347C86.34 17.2747 86.89 17.5447 87.77 17.5447C88.077 17.5588 88.3826 17.4969 88.66 17.3647C88.7558 17.3215 88.8379 17.2531 88.8978 17.1668C88.9577 17.0805 88.993 16.9795 89 16.8747C89 16.6147 88.84 16.4347 88.52 16.3147C88.1405 16.1884 87.7481 16.1045 87.35 16.0647C86.8785 16.0113 86.4109 15.9278 85.95 15.8147C85.5018 15.7133 85.0943 15.4799 84.78 15.1447C84.5949 14.9169 84.4587 14.6534 84.3797 14.3707C84.3008 14.088 84.2809 13.792 84.3212 13.5013C84.3616 13.2105 84.4613 12.9311 84.6142 12.6806C84.7671 12.43 84.9699 12.2136 85.21 12.0447C85.9308 11.5856 86.7765 11.3619 87.63 11.4047C88.4564 11.3768 89.274 11.5812 89.99 11.9947C90.2786 12.1582 90.527 12.3839 90.7173 12.6555C90.9076 12.9271 91.0349 13.2377 91.09 13.5647C91.09 13.7647 91 13.8647 90.82 13.8647H89.34C89.2777 13.8684 89.2157 13.8532 89.1622 13.8211C89.1087 13.789 89.0661 13.7414 89.04 13.6847C88.9411 13.4479 88.7549 13.2581 88.52 13.1547C88.255 13.0161 87.959 12.9472 87.66 12.9547C87.3669 12.9388 87.0745 12.9973 86.81 13.1247C86.7168 13.1607 86.6366 13.2237 86.5795 13.3057C86.5225 13.3877 86.4913 13.4849 86.49 13.5847C86.4964 13.7215 86.5465 13.8526 86.6329 13.9588C86.7193 14.065 86.8374 14.1406 86.97 14.1747C87.354 14.3195 87.7533 14.4201 88.16 14.4747C88.6277 14.5363 89.0917 14.6231 89.55 14.7347C89.9982 14.8362 90.4057 15.0695 90.72 15.4047C90.8882 15.5894 91.018 15.8055 91.1021 16.0407C91.1862 16.2758 91.2229 16.5253 91.21 16.7747C91.2186 17.1204 91.1375 17.4624 90.9745 17.7674C90.8115 18.0723 90.5722 18.3298 90.28 18.5147C89.5329 18.9944 88.6574 19.235 87.77 19.2047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M101.78 18.7047C101.786 18.7402 101.784 18.7765 101.776 18.8114C101.767 18.8464 101.752 18.8792 101.73 18.9081C101.709 18.937 101.682 18.9613 101.651 18.9796C101.62 18.9979 101.586 19.0098 101.55 19.0147C101.185 19.1339 100.804 19.198 100.42 19.2047C100.04 19.2441 99.656 19.1847 99.306 19.0323C98.955 18.8799 98.65 18.6396 98.42 18.3347C97.714 18.942 96.8 19.2536 95.87 19.2047C95.438 19.2246 95.007 19.1539 94.604 18.9972C94.201 18.8405 93.835 18.6012 93.53 18.2947C93.227 17.9736 92.9922 17.5946 92.8392 17.1805C92.6863 16.7664 92.6186 16.3257 92.64 15.8847V11.9747C92.64 11.7847 92.73 11.6847 92.92 11.6847H94.6C94.79 11.6847 94.88 11.7847 94.88 11.9747V15.5847C94.862 16.0345 95.015 16.4743 95.31 16.8147C95.457 16.9707 95.636 17.0933 95.834 17.1744C96.032 17.2555 96.246 17.2931 96.46 17.2847C96.679 17.2943 96.898 17.2604 97.104 17.1848C97.31 17.1093 97.499 16.9937 97.66 16.8447C97.812 16.6877 97.931 16.5011 98.008 16.2964C98.086 16.0917 98.12 15.8733 98.11 15.6547V11.9747C98.11 11.7847 98.2 11.6847 98.39 11.6847H100.09C100.28 11.6847 100.37 11.7847 100.37 11.9747V16.6847C100.37 17.0747 100.54 17.2647 100.87 17.2647C101.025 17.2707 101.18 17.2539 101.33 17.2147C101.368 17.2041 101.408 17.2022 101.446 17.2092C101.485 17.2161 101.521 17.2317 101.553 17.2548C101.585 17.2779 101.611 17.3079 101.63 17.3425C101.648 17.3771 101.658 17.4155 101.66 17.4547L101.78 18.7047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M117.67 18.7047C117.679 18.7405 117.68 18.7779 117.673 18.8141C117.665 18.8502 117.65 18.8844 117.628 18.914C117.606 18.9436 117.578 18.968 117.545 18.9854C117.513 19.0029 117.477 19.0129 117.44 19.0147C117.068 19.1356 116.681 19.1997 116.29 19.2047C115.695 19.2354 115.108 19.0665 114.62 18.7247C114.409 18.5783 114.238 18.3822 114.121 18.1537C114.004 17.9252 113.945 17.6713 113.95 17.4147V15.0647C113.971 14.6163 113.821 14.1766 113.53 13.8347C113.39 13.6784 113.216 13.5552 113.023 13.4739C112.829 13.3927 112.62 13.3554 112.41 13.3647C112.221 13.3576 112.033 13.3935 111.859 13.4697C111.686 13.5459 111.533 13.6605 111.41 13.8047C111.146 14.1398 111.011 14.5586 111.03 14.9847V18.6747C111.03 18.8647 110.94 18.9647 110.75 18.9647H109.06C109.021 18.9696 108.981 18.9654 108.944 18.9526C108.906 18.9397 108.872 18.9185 108.844 18.8905C108.816 18.8626 108.795 18.8286 108.782 18.7912C108.769 18.7538 108.765 18.714 108.77 18.6747V15.0647C108.792 14.6212 108.653 14.1846 108.38 13.8347C108.258 13.6877 108.105 13.5694 107.932 13.4882C107.76 13.407 107.571 13.3648 107.38 13.3647C107.176 13.3565 106.973 13.3914 106.783 13.4673C106.593 13.5431 106.422 13.6581 106.28 13.8047C105.994 14.1291 105.847 14.5529 105.87 14.9847V18.6747C105.875 18.714 105.871 18.7538 105.858 18.7912C105.845 18.8286 105.824 18.8626 105.796 18.8905C105.768 18.9185 105.734 18.9397 105.697 18.9526C105.659 18.9654 105.619 18.9696 105.58 18.9647H103.95C103.76 18.9647 103.67 18.8647 103.67 18.6747V13.9647C103.682 13.8845 103.675 13.8027 103.649 13.7257C103.624 13.6488 103.581 13.5788 103.523 13.5215C103.466 13.4642 103.396 13.4211 103.319 13.3956C103.242 13.3701 103.16 13.363 103.08 13.3747H102.75C102.53 13.3747 102.42 13.2947 102.42 13.1347V11.9547C102.415 11.8817 102.435 11.8091 102.477 11.7491C102.519 11.689 102.58 11.6451 102.65 11.6247C102.996 11.499 103.362 11.438 103.73 11.4447C104.083 11.4146 104.438 11.485 104.753 11.6478C105.068 11.8106 105.33 12.0591 105.51 12.3647C105.847 12.045 106.247 11.7982 106.684 11.6399C107.121 11.4816 107.586 11.4152 108.05 11.4447C108.501 11.4227 108.95 11.5072 109.362 11.6914C109.774 11.8756 110.136 12.1542 110.42 12.5047C110.751 12.145 111.158 11.8634 111.611 11.68C112.064 11.4967 112.552 11.4164 113.04 11.4447C113.476 11.4243 113.912 11.4946 114.32 11.6513C114.728 11.8079 115.099 12.0474 115.41 12.3547C115.714 12.6752 115.949 13.0541 116.102 13.4684C116.255 13.8826 116.323 14.3237 116.3 14.7647V16.6947C116.3 17.0747 116.47 17.2647 116.79 17.2647C116.945 17.2719 117.1 17.2551 117.25 17.2147C117.457 17.2147 117.567 17.2947 117.58 17.4547L117.67 18.7047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="mt-4 max-w-xs text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>
              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Services</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      1on1 Coaching
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Company Review
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      HR Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Company</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Helpful Links</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">Legal</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Accessibility
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Returns Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            © 2022. Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SaasLandingPage;
