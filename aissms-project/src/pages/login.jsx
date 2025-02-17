// src/pages/login.jsx

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic (e.g., validate credentials, redirect, etc.)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;  // Default export

// import React, { useState } from "react";

// const SpecialLogin = () => {
//   const [role, setRole] = useState(""); // Donor or NGO
//   const [isSignup, setIsSignup] = useState(false); // Login or Signup
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     name: "",
//     city: "",
//     foodType: "",
//     organization: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(isSignup ? "Account Created Successfully!" : "Logged In Successfully!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
//       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
//         {/* Role Selection */}
//         {!role ? (
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-4 text-gray-700">Choose Your Role</h2>
//             <div className="flex justify-center space-x-4">
//               <button 
//                 onClick={() => setRole("donor")} 
//                 className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
//                 Donor
//               </button>
//               <button 
//                 onClick={() => setRole("ngo")} 
//                 className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
//                 NGO
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Login or Signup Selection */}
//             {!isSignup ? (
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold text-gray-700">Welcome {role === "donor" ? "Donor" : "NGO"}!</h2>
//                 <p className="text-gray-500 mb-4">Choose an option below:</p>
//                 <div className="flex justify-center space-x-4">
//                   <button 
//                     onClick={() => setIsSignup(true)} 
//                     className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition">
//                     Sign Up
//                   </button>
//                   <button 
//                     onClick={() => setIsSignup(false)} 
//                     className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition">
//                     Log In
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {/* Signup Form */}
//                 <h2 className="text-xl font-bold text-gray-700 text-center mb-4">Sign Up as a {role === "donor" ? "Donor" : "NGO"}</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded" required />
//                   <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded" required />
//                   <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">Create Account</button>
//                 </form>
//               </div>
//             )}

//             {/* Login Form */}
//             {!isSignup && (
//               <div>
//                 <h2 className="text-xl font-bold text-gray-700 text-center mb-4">Login as a {role === "donor" ? "Donor" : "NGO"}</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded" required />
//                   <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded" required />
//                   {role === "donor" ? (
//                     <>
//                       <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded" required />
//                       <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full p-3 border rounded" required />
//                       <input type="text" name="foodType" placeholder="Type of Food" value={formData.foodType} onChange={handleChange} className="w-full p-3 border rounded" required />
//                     </>
//                   ) : (
//                     <>
//                       <input type="text" name="organization" placeholder="NGO Name" value={formData.organization} onChange={handleChange} className="w-full p-3 border rounded" required />
//                       <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full p-3 border rounded" required />
//                     </>
//                   )}
//                   <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Login</button>
//                 </form>
//               </div>
//             )}

//             {/* Go Back Option */}
//             <div className="text-center mt-4">
//               <button onClick={() => { setRole(""); setIsSignup(false); }} className="text-gray-500 hover:underline">← Back</button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SpecialLogin;
