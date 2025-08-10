import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import image from "../../assets/need-help.png";
const EnquiryForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    background: "",
    course: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (formData.background && formData.course) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/form/submit",
        formData
      );

      // Show success message
      toast.success("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "", // include all your form fields here
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="grid items-center grid-cols-1 gap-6 px-4 bg-orange-400 md:grid-cols-2 lg:h-[450px]">
      {/* Left Side Image */}

      <div className="hidden md:block">
        <div className="w-full max-w-md px-10 mx-auto mb-6 mt-9">
          <h2 className="mb-1 text-3xl font-medium text-white lg:text-6xl font-oswald">
            Need Help?
          </h2>
          <p className="pt-2 text-lg text-white">
            Connect with us & know what's best for you.
          </p>
        </div>
        <img src={image} alt="help" className="relative w-6/12 -mt-9 left-28" />
      </div>

      {/* Right Side Form */}
      <div className="block w-full max-w-md px-10 mx-auto mt-9 md:hidden">
        <h2 className="mb-1 text-3xl font-medium text-white lg:text-6xl font-oswald">
          Need Help?
        </h2>
        <p className="pt-2 text-lg text-white">
          Connect with us & know what's best for you.
        </p>
      </div>
      <div className="w-full max-w-xl p-8 mx-auto bg-white lg:-mx-8 lg:max-w-7xl rounded-xl mb-9 lg:mb-0">
        {/* Steps */}
        <div className="flex items-center mb-6">
          <div
            className={`flex items-center gap-2 ${
              step === 1 ? "text-orange-500" : "text-orange-400"
            }`}
          >
            <span className="font-bold">1</span> About You
          </div>
          <span className="mx-4 text-orange-300">────────</span>
          <div
            className={`flex items-center gap-2 ${
              step === 2 ? "text-orange-500" : "text-orange-400"
            }`}
          >
            <span className="font-bold">2</span> Personal Details
          </div>
        </div>

        {/* Step 1: About You */}
        {step === 1 && (
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">
                Tell us about your background?
              </label>
              <select
                name="background"
                value={formData.background}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="">Select Background</option>
                <option value="College Student">College Student</option>
                <option value="School Student">School Student</option>
                <option value="Corporate Training">Corporate Training</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-gray-700">
                What type of course are you interested in?
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="">Select Course</option>
                <option value="Soft Skills">Soft Skills</option>
                <option value="B2B Training">B2B Training</option>
                <option value="Corporate Training">Corporate Training</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 font-semibold text-white rounded-md bg-brand-primary"
            >
              Next
            </button>
          </form>
        )}

        {/* Step 2: Personal Details */}
        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white rounded-md bg-brand-primary"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryForm;
