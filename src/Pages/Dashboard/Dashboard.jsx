import React from 'react';
import Navbar from "../../Components/Admin/Navbar";
import Sidebar from "../../Components/Admin/Sidebar";

const Dashboard = () => {
  const adminName = "Admin"; // Replace this dynamically later if needed

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar adminName={adminName} />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <h2 className="mb-4 text-2xl font-semibold">Dashboard Content</h2>
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
