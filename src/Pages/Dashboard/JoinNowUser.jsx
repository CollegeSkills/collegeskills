import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../Components/Admin/Navbar";
import Sidebar from "../../Components/Admin/Sidebar";

const JoinNowUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/now/join-now`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-6">
            <div className="min-h-screen p-6">
              <h1 className="mb-4 text-2xl font-bold">Sign Up Users</h1>

              {loading ? (
                <p className="text-gray-600">Loading users...</p>
              ) : users.length === 0 ? (
                <p className="text-gray-600">No users found.</p>
              ) : (
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                  <table className="w-full border-collapse table-auto">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left border">Id</th>
                        <th className="px-4 py-2 text-left border">Name</th>
                        <th className="px-4 py-2 text-left border">Phone</th>
                        <th className="px-4 py-2 text-left border">Email</th>
                        <th className="px-4 py-2 text-left border">
                          Created At
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, idx) => (
                        <tr key={user._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border">{idx + 1}</td>
                          <td className="px-4 py-2 border">{user.name}</td>
                          <td className="px-4 py-2 border">{user.phone}</td>
                          <td className="px-4 py-2 border">{user.email}</td>
                          <td className="px-4 py-2 border">
                            {new Date(user.createdAt).toLocaleDateString()}{" "}
                            {new Date(user.createdAt).toLocaleTimeString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinNowUser;
