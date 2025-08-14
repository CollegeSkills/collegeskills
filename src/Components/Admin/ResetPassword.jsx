// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ResetPassword = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
  
//   const handleSubmit = async () => {
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     const token = window.location.pathname.split("/").pop();

//     try {
//       const res = await fetch(
//         `http://localhost:4000/api/admin/reset-password/${token}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             newPassword: password, // backend field name match
//           }),
//         }
//       );

//       const data = await res.json();

//       if (res.ok) {
//         toast.success(
//           data.message || "Password reset successful! Please login."
//         );
//       } else {
//         toast.error(data.message || "Failed to reset password.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-orange-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h2 className="mb-4 text-2xl font-bold text-center">Reset Password</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="password"
//             placeholder="New Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-2 text-white rounded-md bg-brand-primary hover:bg-orange-600"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:4000/api/admin/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword: password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Password reset successful! Please login.");
        navigate("/login");
      } else {
        toast.error(data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
              required
            />
            <span
              className="absolute inset-y-0 flex items-center text-gray-500 cursor-pointer right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
              required
            />
            <span
              className="absolute inset-y-0 flex items-center text-gray-500 cursor-pointer right-3"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white rounded-md bg-brand-primary hover:bg-orange-600"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
