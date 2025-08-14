import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 🔁 For redirect
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const JoinNow = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // 👈 redirect hook
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true); // 🔁 show loading

    try {
      const res = await axios.post(
        "${import.meta.env.VITE_API_URL}/api/v1/now/join-now",
        formData
      );
      toast.success("🎉 Registration successful!");

      // ✅ Reset form
      setFormData({ name: "", phone: "", email: "", password: "" });

      // ✅ Redirect to home after 1.5s
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // 🛑 stop loading
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center px-4 py-1 lg:pt-16 pb-9">
        <div className="w-full max-w-xl p-8 space-y-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-3xl font-bold text-center text-brand-primary">
            Join Now
          </h2>

          {message && (
            <p className="text-sm font-medium text-center text-green-600">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Whatsapp Number*
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                pattern="\d{10}" // exactly 10 digits
                title="Please enter a valid 10-digit number"
                placeholder="Your Whatsapp Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email*</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Password*</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading} // 🔒 disable when loading
              className="w-full py-2 font-semibold text-white transition rounded-md bg-brand-primary hover:bg-opacity-90 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}{" "}
              {/* 👈 button text changes */}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinNow;
