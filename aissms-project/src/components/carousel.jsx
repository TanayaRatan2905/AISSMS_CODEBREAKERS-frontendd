// // // // // import React from "react";
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import { Navigation, Pagination, Autoplay } from "swiper/modules";
// // // // // import "swiper/css";
// // // // // import "swiper/css/navigation";
// // // // // import "swiper/css/pagination";

// // // // // const images = [
// // // // //   "canfood.jpg",
// // // // //   "veggies.avif",
// // // // //   "doante.webp",
// // // // // ];

// // // // // const Carousel = () => {
// // // // //   return (
// // // // //     <div className="w-full max-w-4xl mx-auto py-6">
// // // // //       <Swiper
// // // // //         modules={[Navigation, Pagination, Autoplay]}
// // // // //         spaceBetween={20}
// // // // //         slidesPerView={1}
// // // // //         navigation
// // // // //         pagination={{ clickable: true }}
// // // // //         autoplay={{ delay: 3000 }}
// // // // //         loop={true}
// // // // //         className="rounded-2xl shadow-lg"
// // // // //       >
// // // // //         {images.map((src, index) => (
// // // // //           <SwiperSlide key={index}>
// // // // //             <img
// // // // //               src={src}
// // // // //               alt={`Slide ${index + 1}`}
// // // // //               className="w-full h-[400px] object-cover rounded-2xl"
// // // // //             />
// // // // //           </SwiperSlide>
// // // // //         ))}
// // // // //       </Swiper>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Carousel;

// // // // // import React, { useState } from 'react';

// // // // // const Carousel = () => {
// // // // //   const images = [
// // // // //     "canfood.jpg",
// // // // //     "donate.webp",
// // // // //     "veggies.avif",
// // // // //   ];

// // // // //   const [current, setCurrent] = useState(0);

// // // // //   const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // // // //   const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

// // // // //   return (
// // // // //     <div className="relative w-full max-w-[800px] mx-auto my-8">
// // // // //       <img className="w-full h-[300px] object-cover rounded-lg" src={images[current]} alt="carousel" />
      
// // // // //       {/* Left Arrow */}
// // // // //       <button className="absolute top-1/2 left-2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>&#10094;</button>

// // // // //       {/* Right Arrow */}
// // // // //       <button className="absolute top-1/2 right-2 bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}>&#10095;</button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Carousel;

// // // // import React, { useState } from "react";
// // // // import canfood from "../assets/canfood.jpg";
// // // // import donate from "../assets/donate.webp";
// // // // import veggies from "../assets/veggies.avif";

// // // // const Carousel = () => {
// // // //   const images = [canfood, donate, veggies]; // ✅ Use imported images

// // // //   const [current, setCurrent] = useState(0);

// // // //   const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // // //   const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

// // // //   return (
// // // //     <div className="relative w-full max-w-[800px] mx-auto my-8">
// // // //       <img className="w-full h-[300px] object-cover rounded-lg" src={images[current]} alt="carousel" />
      
// // // //       {/* Left Arrow */}
// // // //       <button className="absolute top-1/2 left-2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>&#10094;</button>

// // // //       {/* Right Arrow */}
// // // //       <button className="absolute top-1/2 right-2 bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}>&#10095;</button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Carousel;

// // // import React, { useState, useEffect } from "react";
// // // import canfood from "../assets/canfood.jpg";
// // // import donate from "../assets/donate.webp";
// // // import veggies from "../assets/veggies.avif";

// // // const Carousel = () => {
// // //   const images = [canfood, donate, veggies]; // Import images
// // //   const [current, setCurrent] = useState(0);

// // //   // Autoplay: Change slide every 3 seconds
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// // //     }, 3000);

// // //     return () => clearInterval(interval); // Cleanup on unmount
// // //   }, [images.length]);

// // //   return (
// // //     <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
// // //       {/* Image */}
// // //       <img
// // //         className="absolute w-full h-full object-cover transition-opacity duration-1000"
// // //         src={images[current]}
// // //         alt="carousel"
// // //       />

// // //       {/* Arrows */}
// // //       <button
// // //         className="absolute left-5 text-white bg-gray-900 p-3 rounded-full text-2xl z-10"
// // //         onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
// // //       >
// // //         &#10094;
// // //       </button>

// // //       <button
// // //         className="absolute right-5 text-white bg-gray-900 p-3 rounded-full text-2xl z-10"
// // //         onClick={() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
// // //       >
// // //         &#10095;
// // //       </button>

// // //       {/* Dots Indicator */}
// // //       <div className="absolute bottom-5 flex space-x-2">
// // //         {images.map((_, index) => (
// // //           <span
// // //             key={index}
// // //             className={`w-4 h-4 rounded-full ${index === current ? "bg-white" : "bg-gray-500"}`}
// // //           ></span>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Carousel;

// // import React, { useState, useEffect } from "react";
// // import canfood from "../assets/canfood.jpg";
// // import donate from "../assets/donate.webp";
// // import veggies from "../assets/veggies.avif";

// // const Carousel = () => {
// //   const images = [canfood, donate, veggies];
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   return (
// //     <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
// //       {/* Image Container with Fade Effect */}
// //       <div className="absolute w-full h-full transition-opacity duration-1000 ease-in-out">
// //         <img
// //           className="w-full h-full object-cover brightness-75"
// //           src={images[current]}
// //           alt="carousel"
// //         />
// //       </div>

// //       {/* Overlay Text */}
// //       <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
// //         <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
// //           Donate Food, Save Lives
// //         </h1>
// //         <p className="text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-md">
// //           Connecting surplus food sources with NGOs for a hunger-free world.
// //         </p>
// //         <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition">
// //           Get Involved
// //         </button>
// //       </div>

// //       {/* Navigation Arrows */}
// //       <button
// //         className="absolute left-5 text-white bg-white/30 backdrop-blur-md p-3 rounded-full text-2xl z-10 shadow-md hover:bg-white/50 transition"
// //         onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
// //       >
// //         &#10094;
// //       </button>

// //       <button
// //         className="absolute right-5 text-white bg-white/30 backdrop-blur-md p-3 rounded-full text-2xl z-10 shadow-md hover:bg-white/50 transition"
// //         onClick={() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
// //       >
// //         &#10095;
// //       </button>

// //       {/* Dot Indicators with Active Scaling Effect */}
// //       <div className="absolute bottom-5 flex space-x-3">
// //         {images.map((_, index) => (
// //           <span
// //             key={index}
// //             className={`w-4 h-4 rounded-full transition-all duration-300 ${
// //               index === current ? "bg-white scale-125 shadow-md" : "bg-gray-400 opacity-70"
// //             }`}
// //           ></span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Carousel;

// import React, { useState, useEffect } from "react";
// import canfood from "../assets/canfood.jpg";
// import donate from "../assets/donate.webp";
// import veggies from "../assets/veggies.avif";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 px-8 flex justify-between items-center z-50 shadow-lg">
//       <h1 className="text-2xl font-bold">Food Connect</h1>
//       <ul className="flex space-x-6">
//         <li className="hover:text-gray-300 cursor-pointer">Home</li>
//         <li className="hover:text-gray-300 cursor-pointer">About</li>
//         <li className="hover:text-gray-300 cursor-pointer">Donate</li>
//         <li className="hover:text-gray-300 cursor-pointer">Contact</li>
//       </ul>
//     </nav>
//   );
// };

// const Carousel = () => {
//   const images = [canfood, donate, veggies];
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w- h-screen flex items-center justify-center overflow-hidden">
//       {/* Image Container with Smooth Transition */}
//       <div className="absolute w-full h-full transition-opacity duration-1000 ease-in-out">
//         <img
//           className="w-full h-full object-cover brightness-75"
//           src={images[current]}
//           alt="carousel"
//         />
//       </div>

//       {/* Overlay Text */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
//         <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
//           Donate Food, Save Lives
//         </h1>
//         <p className="text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-md">
//           Connecting surplus food sources with NGOs for a hunger-free world.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition">
//           Get Involved
//         </button>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         className="absolute left-5 text-white bg-white/30 backdrop-blur-md p-3 rounded-full text-2xl z-10 shadow-md hover:bg-white/50 transition"
//         onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
//       >
//         &#10094;
//       </button>

//       <button
//         className="absolute right-5 text-white bg-white/30 backdrop-blur-md p-3 rounded-full text-2xl z-10 shadow-md hover:bg-white/50 transition"
//         onClick={() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
//       >
//         &#10095;
//       </button>

//       {/* Dot Indicators */}
//       <div className="absolute bottom-5 flex space-x-3">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`w-4 h-4 rounded-full transition-all duration-300 ${
//               index === current ? "bg-white scale-125 shadow-md" : "bg-gray-400 opacity-70"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Carousel />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import canfood from "../assets/canfood.jpg";
import donate from "../assets/donate.webp";
import veggies from "../assets/veggies.avif";

const Carousel = () => {
  const images = [canfood, donate, veggies];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen pt-16 flex items-center justify-center overflow-hidden">
      {/* Image Container with Smooth Transition */}
      <div className="absolute w-full h-full transition-opacity duration-1000 ease-in-out">
        <img
          className="w-full h-full object-cover brightness-75"
          src={images[current]}
          alt="carousel"
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Donate Food, Save Lives
        </h1>
        <p className="text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-md">
          Connecting surplus food sources with NGOs for a hunger-free world.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition">
          Get Involved
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-5 text-white bg-white/30 backdrop-blur-md p-3 rounded-full text-2xl z-10 shadow-md hover:bg-white/50 transition"
        onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
      >
        &#10094;
      </button>

      <button
        className="absolute right-5 text-white bg-white/30 backdrop-blur-md p-3 rounded-full text-2xl z-10 shadow-md hover:bg-white/50 transition"
        onClick={() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
      >
        &#10095;
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 flex space-x-3">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-125 shadow-md" : "bg-gray-400 opacity-70"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
