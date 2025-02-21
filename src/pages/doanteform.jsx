// import React, { useState } from "react";

// const DonateForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     foodType: "",
//     quantity: "",
//     location: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for your donation! We'll reach out soon.");
//   };

//   return (
//     <div className="bg-white py-12 px-6 text-center">
//       {/* Inspirational Quote */}
//       <div className="mb-8 text-xl font-semibold italic text-gray-700">
//         "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi
//       </div>

//       {/* Donation Form */}
//       <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Donate Food</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
//           <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
//           <input type="text" name="foodType" placeholder="Type of Food" value={formData.foodType} onChange={handleChange} className="w-full p-2 border rounded" required />
//           <input type="text" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded" required />
//           <input type="text" name="location" placeholder="Pickup Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
//           <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Donate Now</button>
//         </form>
//       </div>

//       {/* Testimonials Section */}
//       <div className="mt-12">
//         <h3 className="text-2xl font-bold mb-6">What Our Donors Say</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Testimonial Cards */}
//           {[
//             { text: "Giving food has never been easier!", name: "Rahul S." },
//             { text: "Amazing initiative, happy to contribute!", name: "Priya M." },
//             { text: "A great way to help those in need.", name: "Amit K." },
//           ].map((review, index) => (
//             <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md transform transition duration-500 hover:rotate-y-180">
//               <p className="text-lg italic">"{review.text}"</p>
//               <p className="mt-4 font-bold">- {review.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonateForm;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const DonateForm = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     foodType: "",
// //     quantity: "",
// //     location: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Thank you for your donation! We'll reach out soon.");
// //   };

// //   const testimonials = [
// //     { img: "rahul.jpg", text: "Giving food has never been easier!", name: "Rahul S." },
// //     { img: "priya.jpg", text: "Amazing initiative, happy to contribute!", name: "Priya M." },
// //     { img: "amit.jpg", text: "A great way to help those in need.", name: "Amit K." },
// //   ];

// //   const [flipped, setFlipped] = useState(Array(testimonials.length).fill(false));

// //   const toggleFlip = (index) => {
// //     setFlipped((prev) => prev.map((flip, i) => (i === index ? !flip : flip)));
// //   };

// //   return (
// //     <div className="bg-white py-12 px-6 text-center">
// //       {/* Inspirational Quote */}
// //       <div className="mb-8 text-xl font-semibold italic text-gray-700">
// //         "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi
// //       </div>

// //       {/* Donation Form */}
// //       <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
// //         <h2 className="text-2xl font-bold mb-4">Donate Food</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
// //           <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
// //           <input type="text" name="foodType" placeholder="Type of Food" value={formData.foodType} onChange={handleChange} className="w-full p-2 border rounded" required />
// //           <input type="text" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded" required />
// //           <input type="text" name="location" placeholder="Pickup Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
// //           <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Donate Now</button>
// //         </form>
// //       </div>

// //       {/* Testimonials Section */}
// //       <div className="mt-12">
// //         <h3 className="text-2xl font-bold mb-6">What Our Donors Say</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {testimonials.map((review, index) => (
// //             <div
// //               key={index}
// //               className="relative w-64 h-64 perspective-1000 mx-auto"
// //               onClick={() => toggleFlip(index)}
// //             >
// //               <div className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d ${flipped[index] ? "rotate-y-180" : ""}`}>
// //                 {/* Front (Image) */}
// //                 <div className="absolute w-full h-full backface-hidden flex justify-center items-center bg-gray-200 rounded-lg shadow-md">
// //                   <img src={review.img} alt={review.name} className="w-full h-full object-cover rounded-lg" />
// //                 </div>
// //                 {/* Back (Text) */}
// //                 <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md">
// //                   <p className="text-lg italic">"{review.text}"</p>
// //                   <p className="mt-4 font-bold">- {review.name}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DonateForm;

