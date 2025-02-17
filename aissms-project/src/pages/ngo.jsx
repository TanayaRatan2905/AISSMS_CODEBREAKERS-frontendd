// // src/pages/ngo.jsx

// import React from 'react';

// const NGO = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
//         <h2 className="text-2xl font-bold text-center">NGOs for Food Donation</h2>
//         <p className="text-center mt-4">Here are some NGOs that are actively involved in food distribution to those in need.</p>

//         {/* List of NGOs */}
//         <ul className="mt-6 space-y-4">
//           <li className="border-b py-2">NGO 1: Helping Hands</li>
//           <li className="border-b py-2">NGO 2: Food for All</li>
//           <li className="border-b py-2">NGO 3: Hunger Relief</li>
//           <li className="border-b py-2">NGO 4: Feed the Nation</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NGO;  // Default export

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MixFood from "../assets/mixfood.jpg";
import ngobg from "../assets/ngobg.png";
const NGO = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    mission: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for registering your NGO! We will contact you soon.");
  };

  return (
    <div
  className="py-12 px-6 text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${ngobg})` }}
>
      {/* NGO Information Section */}
      <div className="w-screen">
        <img
          src={MixFood}
          alt="NGO Work"
          className="w-370 h-[12.5vh] rounded-lg shadow-lg object-cover"
        />
        <h2 className="text-3xl font-bold mt-6">Join as an NGO</h2>
        <p className="text-gray-600 mt-2">
          Partner with us to help redistribute surplus food to those in need.
        </p>
      </div>

      {/* NGO Registration Form */}
      <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">NGO Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="NGO Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
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
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="mission"
            placeholder="Your NGO's Mission"
            value={formData.mission}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NGO;

