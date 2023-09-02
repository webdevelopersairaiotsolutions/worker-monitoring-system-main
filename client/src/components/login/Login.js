import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image1 from "../../assets/login1.jpg";
import image2 from "../../assets/login2.jpg";
import image3 from "../../assets/login3.jpg";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("usersdatatoken");
    if (token) {
      setTimeout(() => {
        history("/dash");
      }, 2000); // delay for 2 seconds
    }
  }, [history]);

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const loginuser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      toast.error("Email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("Includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("Password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters!", {
        position: "top-center",
      });
    } else {
      const data = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await data.json();

      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/dash");
        setInpval({ ...inpval, email: "", password: "" });
      }
    }
  };

  return (
    <section
      className="flex justify-center font-customFont1 items-center min-h-screen bg-blue-100"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg flex ">
        {/* Container on the left */}
        <div
          className="w-custom-width-1 p-4 text-white rounded-l-lg flex flex-col justify-center py-8"
          style={{
            backgroundImage: `url(${image3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          {/* Add the content you want inside the container here */}
          <div className="text-center py-12">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
              Discover the <span className="text-orange-500">Future</span> of
              Industrial Laundry
            </h1>
            <p className="mt-4 sm:mt-6 text-lg text-gray-100">
              Elevating Work Productivity with Advanced AI and ML Technologies
            </p>
          </div>
          {/* <p className="text-xs text-right mt-1">
            <a
              href="/saas-landing-page"
              className="text-blue-500 hover:underline"
            >
              Landing Page
            </a>
          </p> */}
        </div>

        {/* Form on the right */}
        <div className="w-1/2 p-8 h-custom-height-3">
          <div className="text-center">
            <h5 className="text-4xl font-bold my-10 text-orange-500 ">Welcome!</h5>
            <p className="text-sm">Please enter your email to continue.</p>
          </div>
          <form className="mt-4">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={inpval.email}
                onChange={setVal}
                placeholder="Enter Your Email Address"
                required
                autoFocus
                className="w-full border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mt-4">
              <input
                id="password"
                name="password"
                type={passShow ? "text" : "password"}
                value={inpval.password}
                onChange={setVal}
                placeholder="Enter Your Password"
                required
                className="w-full border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <p className="text-xs text-right mt-1">
                <a
                  href="/forgot-password"
                  className="text-blue-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </p>
            </div>
            <button
              type="submit"
              onClick={loginuser}
              className="w-full bg-blue-500  text-white rounded-md py-2 mt-6 hover:bg-blue-800 transition-colors duration-300"
            >
              Sign In
            </button>

            {/* Line and OR text */}
            <div className="flex items-center m-4 space-x-4 text-gray-400">
              <hr className="flex-grow border-gray-300" />
              <span className="font-semibold">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google login button */}
            <button className="w-full h-10 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>

            <p className="text-sm text-center mt-4">
              Don't have an Account?{" "}
              <NavLink
                to="/register"
                className="text-blue-500 font-bold hover:underline"
              >
                Sign Up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
