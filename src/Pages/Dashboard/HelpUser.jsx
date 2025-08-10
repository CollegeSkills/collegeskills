import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Admin/Navbar";
import Sidebar from "../../Components/Admin/Sidebar";
import axios from "axios";

const HelpUser = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchFormSubmissions();
  }, []);

  const fetchFormSubmissions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:4000/api/v1/form/submissions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Form submission API response:", res.data); // 👈 Check response structure

      // If API returns an object like { data: [...] }, adjust accordingly
      const data = Array.isArray(res.data) ? res.data : res.data?.data || [];

      setSubmissions(data);
    } catch (err) {
      console.error("Error fetching submissions:", err);
      setSubmissions([]); // fallback to empty array
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <h2 className="mb-4 text-2xl font-semibold">Need Help User Data</h2>
          <div className="p-4 overflow-x-auto">
            <table className="min-w-full overflow-hidden bg-white rounded-lg shadow-md">
              <thead className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Phone</th>
                  <th className="px-6 py-3 text-left">Background</th>
                  <th className="px-6 py-3 text-left">Course</th>
                  <th className="px-6 py-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {Array.isArray(submissions) && submissions.length > 0 ? (
                  submissions.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-3">{item.name}</td>
                      <td className="px-6 py-3">{item.email}</td>
                      <td className="px-6 py-3">{item.phone}</td>
                      <td className="px-6 py-3">{item.background}</td>
                      <td className="px-6 py-3">{item.course}</td>
                      <td className="px-6 py-3">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-3 text-center text-gray-500">
                      No submissions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpUser;
