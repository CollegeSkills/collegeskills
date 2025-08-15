
import axios from "axios";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/contact`, formData);
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error sending message.");
    }
  };

  return (
   <>
   <Navbar/>
   <div className="min-h-screen p-6 md:p-16">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-brand-primary">// GET IN TOUCH</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900 md:text-6xl font-oswald">
          Let&apos;s work together to create{" "} <br />
          <span className="text-brand-primary">the life and business</span>
        </h1>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col gap-10 md:flex-row">
        {/* Left - Form */}
        <div className="w-full p-8 border-2 rounded-lg md:w-1/2 border-brand-light">
          <h2 className="mb-1 text-2xl font-semibold font-oswald">Send A Message</h2>
          <p className="mb-6 text-sm text-gray-500">
            Unlock your potential with expert guidance! Schedule a free
            consultation toward personal and business success.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="p-2 border-b outline-none"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-2 border-b outline-none"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-2 border-b outline-none"
              required
              type="email"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-2 border-b outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="col-span-2 p-2 border-b outline-none"
              rows="4"
              required
            />
            <button
              type="submit"
              className="col-span-2 px-4 py-2 mt-4 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-orange-500 to-brand-primary"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-center w-full text-gray-700 md:w-1/2">
          <div className="mb-8">
            <h3 className="text-xl font-semibold font-oswald">Call Us</h3>
            <p className="text-sm text-gray-500">
              Call us today for personalized coaching and transformative growth!
            </p>
            <p className="mt-1 font-bold text-brand-primary">+1 840 841 256</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold font-oswald">Email Us</h3>
            <p className="text-sm text-gray-500">
              Email us now for expert coaching and tailored growth solutions!
            </p>
            <p className="mt-1 font-bold text-brand-primary">collegeskills@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-oswald">Visit Us</h3>
            <p className="text-sm text-gray-500">
              Visit us for personalized coaching and guidance toward lasting
              success!
            </p>
            <p className="mt-1 font-bold text-brand-primary">
              New Delhi , India 
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Contact;
