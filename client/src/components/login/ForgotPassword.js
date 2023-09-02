// ForgotPassword.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom (assuming you are using React Router)
import image1 from "../../assets/login1.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here, you should make an API call to your backend to initiate the password reset process
      // For example, using axios:
      // await axios.post('/api/reset-password', { email });
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (error) {
      setMessage("Error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-customColor py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-lg font-bold">
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address to reset your password.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          {message && (
            <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-customColorTwo text-white rounded-md py-2 hover:bg-customColor transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-gray-600 underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
