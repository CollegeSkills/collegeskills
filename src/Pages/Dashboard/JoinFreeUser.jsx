import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Admin/Navbar";
import Sidebar from "../../Components/Admin/Sidebar";
import axios from "axios";

const JoinFreeUser = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetchFormSubmissions();
  }, []);

  const fetchFormSubmissions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:4000/api/v1/free/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Form submission API response:", res.data);

      const data = res.data?.users || [];

      setSubmissions(data);
    } catch (err) {
      console.error("Error fetching submissions:", err);
      setSubmissions([]); // fallback to empty array
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <div className="min-h-screen p-4 md:p-8 bg-gray-50">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 md:text-3xl">
              Join Free Users Submissions
            </h2>

            {loading ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : (
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="w-full border-collapse table-auto">
                  <thead className="text-sm text-gray-700 bg-gray-100 md:text-base">
                    <tr>
                      <th className="p-4 text-left border-b">S.No.</th>
                      <th className="p-4 text-left border-b">Name</th>
                      <th className="p-4 text-left border-b">Email</th>
                      <th className="p-4 text-left border-b">Phone No.</th>
                      <th className="p-4 text-left border-b">Joined At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.length === 0 ? (
                      <tr>
                        <td
                          colSpan="5"
                          className="p-4 text-center text-gray-500"
                        >
                          No submissions found
                        </td>
                      </tr>
                    ) : (
                      submissions.map((item, index) => (
                        <tr
                          key={item._id}
                          className="transition hover:bg-gray-50"
                        >
                          <td className="p-4 border-b">{index + 1}</td>
                          <td className="p-4 border-b">{item.name}</td>
                          <td className="p-4 border-b">{item.email}</td>
                          <td className="p-4 border-b">{item.phone}</td>
                          <td className="p-4 border-b">
                            {new Date(item.joinedAt).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinFreeUser;
