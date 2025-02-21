// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DonorInfo from "./donorInfo";

// const DonorAuth = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     name: "",
//     city: "",
//     foodType: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       alert(`Logged in as Donor: ${formData.email}`);
//     } else {
//       alert(`Signed up successfully!`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           {isLogin ? "Donor Login" : "Donor Sign Up"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//           {/* Show more fields if Logging in */}
//           {isLogin && (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="foodType"
//                 placeholder="Type of Food"
//                 value={formData.foodType}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </>
//           )}

//           <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           onClick = {() => navigate("/donorInfo")}>
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-gray-600">
//           {isLogin ? "New here?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-500 underline"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DonorAuth;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const DonorAuth = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     name: "",
//     contactNo: "", // Contact number field
//     location: "",  // Location field
//     foodType: "",  // Food type field
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       alert(`Logged in as Donor: ${formData.email}`);
//       navigate("/donorInfo");
//     } else {
//       alert(`Signed up successfully!`);
//       setIsLogin(true); // Switch back to login after sign-up
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           {isLogin ? "Donor Login" : "Donor Sign Up"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//           {/* Show extra fields for Login */}
//           {isLogin && (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="contactNo"
//                 placeholder="Contact Number"
//                 value={formData.contactNo}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="foodType"
//                 placeholder="Type of Food"
//                 value={formData.foodType}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-gray-600">
//           {isLogin ? "New here?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-500 underline"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DonorAuth;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonorAuth = () => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Donor", // Default role selection
    name: "",
    contactNo: "",
    location: "",
    foodType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      alert(`Registered as ${formData.role}: ${formData.email}`);
      navigate("/donorInfo");
    } else {
      alert(`Signed up successfully!`);
      setIsRegister(true); // Switch back to register after sign-up
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isRegister ? "Register" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          {/* Show extra fields for Register */}
          {isRegister && (
            <>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-white"
                required
              >
                <option value="Donor">Donor</option>
                <option value="NGO">NGO</option>
              </select>
              
            </>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            {isRegister ? "Register" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          {isRegister ? "Already have an account?" : "New here?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-500 underline"
          >
            {isRegister ? "Sign Up" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default DonorAuth;
