// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:4000/api/admin/login", formData);
//       toast.success("Login successful!");

//       // Save token (optional)
//       localStorage.setItem("adminToken", res.data.token);
//       localStorage.setItem("admin", JSON.stringify(res.data.admin));

//       navigate("/admin/dashboard");
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 bg-orange-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//         <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-white rounded-md bg-brand-primary hover:bg-orange-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // add react-icons
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/admin/login", formData);
      toast.success("Login successful!");

      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("admin", JSON.stringify(res.data.admin));

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 px-4 bg-orange-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
          </div>
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring"
            />
            <div
              className="absolute inset-y-0 flex items-center pt-5 cursor-pointer right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white rounded-md bg-brand-primary hover:bg-orange-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
