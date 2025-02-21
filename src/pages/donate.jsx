// // // // // const Donate = () => {
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col items-center justify-center bg-white">
// // // // //         <h2 className="text-2xl font-bold text-orange-500 mb-6">Donate Food</h2>
        
// // // // //         <input 
// // // // //           type="text" 
// // // // //           placeholder="Food Item" 
// // // // //           className="border p-2 rounded-md w-64 mb-4"
// // // // //         />
// // // // //         <input 
// // // // //           type="number" 
// // // // //           placeholder="Quantity" 
// // // // //           className="border p-2 rounded-md w-64 mb-4"
// // // // //         />
        
// // // // //         {/* Image Placeholder */}
// // // // //         <img 
// // // // //           src="CLOUDINARY_IMAGE_URL_HERE" 
// // // // //           alt="Food Details" 
// // // // //           className="w-80 mb-4 rounded-lg shadow-md"
// // // // //         />
  
// // // // //         <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md">
// // // // //           Submit
// // // // //         </button>
// // // // //       </div>
// // // // //     );
// // // // //   };
  
// // // // //   export default Donate;
  
// // // // import React from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const DonateFoodOrNGO = () => {
// // // //   const navigate = useNavigate();

// // // //   return (
// // // //     <div className='w-full h-screen flex flex-col items-center justify-center text-white bg-gray-900 px-4'>
// // // //       <h1 className='text-4xl font-bold mb-6'>How would you like to contribute?</h1>
// // // //       <div className='flex space-x-6'>
// // // //         <button 
// // // //           className='bg-[#00df9a] text-black font-medium w-[200px] px-6 py-3 rounded-md' 
// // // //           onClick={() => navigate('/donate-food')}
// // // //         >
// // // //           Donate Food
// // // //         </button>
// // // //         <button 
// // // //           className='bg-[#00df9a] text-black font-medium w-[200px] px-6 py-3 rounded-md' 
// // // //           onClick={() => navigate('/register-ngo')}
// // // //         >
// // // //           Register as NGO
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DonateFoodOrNGO;

// import React from 'react';
// import Carousel from '../components/carousel'; 
// import { useNavigate } from 'react-router-dom';

// const Donate = () => {

//   const navigate = useNavigate();

//   return (
//     <div className="relative w-full bg-white py-16 px-4">
//       <div className="relative max-w-[1240px] mx-auto">
//         <Carousel/>
//         <div className="text-center mt-8">
//           <h2 className="text-3xl font-bold">How would you like to contribute?</h2>
//           <p className="text-gray-600 mt-2">Choose an option below to get started.</p>
//         </div>

        
//         <div className="grid md:grid-cols-2 gap-6 mt-8">
//           <div className="p-6 border rounded-lg shadow-lg text-center">
//             <h3 className="text-2xl font-bold">Donate Food</h3>
//             <p className="text-gray-600 mt-2">Help provide food to those in need.</p>
//             <button className="bg-green-500 text-white px-6 py-2 mt-4 rounded-md"
//             onClick={() => navigate('/donateform')}
//             >Donate Now
//             </button>
//           </div>
          
//           <div className="p-6 border rounded-lg shadow-lg text-center">
//             <h3 className="text-2xl font-bold">Register as NGO</h3>
//             <p className="text-gray-600 mt-2">Join us in distributing food effectively.</p>
//             <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md"
//              onClick={() => navigate('/ngo')}
//             >Join Now</button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Donate;

// // import React from 'react';
// // import Carousel from '../components/carousel'; 
// // import { useNavigate } from 'react-router-dom';

// // const Donate = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="relative w-full bg-white py-16 px-4">
// //       <div className="relative max-w-[1240px] mx-auto">
// //         <Carousel/>
        
// //         <div className="text-center mt-8">
// //           <h2 className="text-3xl font-bold">How would you like to contribute?</h2>
// //           <p className="text-gray-600 mt-2">Choose an option below to get started.</p>
// //         </div>

// //         {/* Options Grid */}
// //         <div className="grid md:grid-cols-3 gap-6 mt-8">
// //           {/* Donate Food */}
// //           <div className="p-6 border rounded-lg shadow-lg text-center">
// //             <h3 className="text-2xl font-bold">Donate Food</h3>
// //             <p className="text-gray-600 mt-2">Help provide food to those in need.</p>
// //             <button 
// //               className="bg-green-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-green-600 transition"
// //               onClick={() => navigate('/donateform')}>
// //               Donate Now
// //             </button>
// //           </div>

// //           {/* Register as NGO */}
// //           <div className="p-6 border rounded-lg shadow-lg text-center">
// //             <h3 className="text-2xl font-bold">Register as NGO</h3>
// //             <p className="text-gray-600 mt-2">Join us in distributing food effectively.</p>
// //             <button 
// //               className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600 transition"
// //               onClick={() => navigate('/ngo')}>
// //               Join Now
// //             </button>
// //           </div>

// //           {/* Join Us - Login Page Redirect */}
// //           <div className="p-6 border rounded-lg shadow-lg text-center bg-gray-100">
// //             <h3 className="text-2xl font-bold">Join Us</h3>
// //             <p className="text-gray-600 mt-2">Be a part of our community.</p>
// //             <button 
// //               className="bg-purple-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-purple-600 transition"
// //               onClick={() => navigate('/login')}>
// //               Get Started
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Donate;
import React from "react";
import Carousel from "../components/carousel";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-white py-16 px-4 flex flex-col items-center" style={{backgroundImage: "url('../assets/thebg.jpg')"}}>
      <div className="relative max-w-[1240px] w-full">
        <Carousel />
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold">How would you like to contribute?</h2>
          <p className="text-gray-600 mt-2">Choose an option below to get started.</p>
        </div>

        {/* Options Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Donate Food (Redirects to DonorAuth) */}
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold">Donate Food</h3>
            <p className="text-gray-600 mt-2">Help provide food to those in need.</p>
            <button
              className="bg-green-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-green-600"
              onClick={() => navigate("/donorAuth")}
            >
              Donate Now
            </button>
          </div>

          {/* Register as NGO (Redirects to NGOAuth) */}
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold">Register as NGO</h3>
            <p className="text-gray-600 mt-2">Join us in distributing food effectively.</p>
            <button
              className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600"
              onClick={() => navigate("/NGOAuth")}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
