// import React from 'react';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Admin/Navbar";
import Sidebar from "../../Components/Admin/Sidebar";

const GetContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:4000/api/v1/get-contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(res.data.contacts);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <h1 className="mb-6 text-3xl font-bold text-brand-primary">
            Contact Details
          </h1>

          {loading ? (
            <p>Loading...</p>
          ) : contacts.length === 0 ? (
            <p>No contact messages found.</p>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full table-auto">
                <thead className="text-white bg-brand-primary">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Phone</th>
                    <th className="px-4 py-2 text-left">Message</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">
                        {contact.firstName} {contact.lastName}
                      </td>
                      <td className="px-4 py-2">{contact.email}</td>
                      <td className="px-4 py-2">{contact.phone}</td>
                      <td className="max-w-sm px-4 py-2 truncate">
                        {contact.message}
                      </td>
                      <td className="px-4 py-2">
                        {new Date(contact.createdAt).toLocaleDateString()}
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
  );
};

export default GetContact;
