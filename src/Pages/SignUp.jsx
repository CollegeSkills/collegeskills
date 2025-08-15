import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from '../assets/animation.png';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, phone, email, password } = form;
    if (!name || !phone || !email || !password) {
      toast.error("All fields are required!");
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
     // submit form data to backend or show success
    toast.success("Form submitted successfully!");
    setForm({ name: "", phone: "", email: "", password: "" });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen p-4">
        <ToastContainer position="top-right" />
        <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white shadow-lg rounded-xl md:flex-row">
          {/* Left Image Section */}
          <div className="flex items-center justify-center md:w-1/2 bg-orange-50">
            <img
              src={image}
              alt="Illustration"
              className="w-3/4 h-auto"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full p-8 md:w-1/2 md:p-12">
            <h2 className="mb-6 text-2xl lg:text-gray-800 text-brand-primary lg:font-bold">
              Personality Checker Form
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              {/* Password Input with Eye Icon */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-3 pr-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 flex items-center cursor-pointer right-3"
                >
                  {showPassword ? (
                    // EyeOff Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.035.166-2.032.476-2.958m2.552 5.513A3.5 3.5 0 1112 15.5a3.5 3.5 0 01-1.472-6.796m-3.132-3.13l12 12"
                      />
                    </svg>
                  ) : (
                    // Eye Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 font-medium text-white transition-all duration-300 bg-orange-400 rounded-md hover:bg-orange-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
