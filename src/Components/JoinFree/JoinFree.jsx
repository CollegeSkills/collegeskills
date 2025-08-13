import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const JoinFree = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/free/join-free",
        {
          name,
          phone,
          email,
        }
      );

      if (res.status === 201) {
        toast.success(res.data.message);
        setName("");
        setPhone("");
        setEmail("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Button */}
      <button
        className="bg-[#FF9E0D] text-white px-6 py-3 rounded-full font-semibold"
        onClick={() => setShowModal(true)}
      >
        Join For Free
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Join For Free</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-xl font-bold text-gray-500"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name*</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <label className="block text-sm font-medium">
                Whatsapp Number*
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="\d{10}"
                title="Please enter a valid 10-digit number"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <div>
                <label className="block text-sm font-medium">Email*</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {message && (
                <p className="text-sm text-center text-green-600">{message}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#FF9E0D] text-white py-2 rounded-md font-semibold"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinFree;
