// import React from 'react';
// import Single from '../assets/person.jpg'
// import Double from '../assets/person.jpg'
// import Triple from '../assets/person.jpg'

// const Cards = () => {
//   return (
//     <div className='w-full py-[9rem] px-4 bg-white'>
//       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
//           <div className='w-full shadow-xl bg-green-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//               <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
//               <h2 className='text-2xl font-bold text-center py-8'>FOOD SAVED</h2>
//               <p className='text-center text-4xl font-bold'>56,000 Tons </p>
//               <div className='text-center font-medium'>
//                   <p className='py-2 border-b mx-8 mt-8'>56,000 tons of surplus food saved from going to waste,
//                      reducing environmental impact and promoting sustainability. 🌍♻️</p>
//                   {/* <p className='py-2 border-b mx-8'>1 Granted User</p>
//                   <p className='py-2 border-b mx-8'>Send up to 2 GB</p> */}
//               </div>
//               {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
//           </div>
//           <div className='w-full shadow-xl bg-pink-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
//               <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
//               <h2 className='text-2xl font-bold text-center py-8'>NGOs</h2>
//               <p className='text-center text-4xl font-bold'>21 NGOs</p>
//               <div className='text-center font-medium'>
//                   <p className='py-2 border-b mx-8 mt-8'>21 NGOs empowered with a reliable food supply, 
//                     helping them feed more people in need. 🤝💙</p>
//                   {/* <p className='py-2 border-b mx-8'>1 Granted User</p>
//                   <p className='py-2 border-b mx-8'>Send up to 2 GB</p> */}
//               </div>
//               {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
//           </div>
//           <div className='w-full shadow-xl bg-green-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
//               <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
//               <h2 className='text-2xl font-bold text-center py-8'>MEALS</h2>
//               <p className='text-center text-4xl font-bold'>60,000</p>
//               <div className='text-center font-medium'>
//                   <p className='py-2 border-b mx-8 mt-8'>60,000  nutritious meals delivered to underserved communities,
//                      ensuring no food goes to waste and no one sleeps hungry. 🍽️✨</p>
//                   {/* <p className='py-2 border-b mx-8'>1 Granted User</p>
//                   <p className='py-2 border-b mx-8'>Send up to 2 GB</p> */}
//               </div>
//               {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
//           </div>
//       </div>
//     </div>
//   );
// };

//  export default Cards;

// // import React from "react";
// // import Autoplay from "embla-carousel-autoplay";
// // import { Carousel, CarouselItem } from "@/components/ui/carousel"; // Ensure you have a proper carousel component
// // import Single from "../assets/person.jpg";
// // import Double from "../assets/person.jpg";
// // import Triple from "../assets/person.jpg";

// // const Home = () => {
// //   return (
// //     <div className="w-full">
// //       {/* Embla Autoplay Carousel */}
// //       <Carousel
// //         plugins={[
// //           Autoplay({
// //             delay: 2000,
// //           }),
// //         ]}
// //         className="w-full h-[500px] overflow-hidden"
// //       >
// //         <CarouselItem>
// //           <img src={Single} alt="Slide 1" className="w-full h-full object-cover" />
// //         </CarouselItem>
// //         <CarouselItem>
// //           <img src={Double} alt="Slide 2" className="w-full h-full object-cover" />
// //         </CarouselItem>
// //         <CarouselItem>
// //           <img src={Triple} alt="Slide 3" className="w-full h-full object-cover" />
// //         </CarouselItem>
// //       </Carousel>

// //       {/* Cards Section */}
// //       <div className="w-full py-[9rem] px-4 bg-white">
// //         <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
// //           <div className="w-full shadow-xl bg-green-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
// //             <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
// //             <h2 className="text-2xl font-bold text-center py-8">FOOD SAVED</h2>
// //             <p className="text-center text-4xl font-bold">56,000 Tons</p>
// //             <div className="text-center font-medium">
// //               <p className="py-2 border-b mx-8 mt-8">
// //                 56,000 tons of surplus food saved from going to waste, reducing environmental impact
// //                 and promoting sustainability. 🌍♻️
// //               </p>
// //             </div>
// //           </div>
// //           <div className="w-full shadow-xl bg-pink-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
// //             <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="/" />
// //             <h2 className="text-2xl font-bold text-center py-8">NGOs</h2>
// //             <p className="text-center text-4xl font-bold">21 NGOs</p>
// //             <div className="text-center font-medium">
// //               <p className="py-2 border-b mx-8 mt-8">
// //                 21 NGOs empowered with a reliable food supply, helping them feed more people in
// //                 need. 🤝💙
// //               </p>
// //             </div>
// //           </div>
// //           <div className="w-full shadow-xl bg-green-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
// //             <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
// //             <h2 className="text-2xl font-bold text-center py-8">MEALS</h2>
// //             <p className="text-center text-4xl font-bold">60,000</p>
// //             <div className="text-center font-medium">
// //               <p className="py-2 border-b mx-8 mt-8">
// //                 60,000 nutritious meals delivered to underserved communities, ensuring no food goes
// //                 to waste and no one sleeps hungry. 🍽️✨
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// // // import React, { useState, useEffect } from "react";
// // // import canfood from "../assets/canfood.jpg";
// // // import donate from "../assets/donate.webp";
// // // import veggies from "../assets/veggies.avif";

// // // const images = [canfood, donate, veggies];

// // // const Carousel = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   // Function to go to the next slide
// // //   const nextSlide = () => {
// // //     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// // //   };

// // //   // Function to go to the previous slide
// // //   const prevSlide = () => {
// // //     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // //   };

// // //   // Auto-slide every 3 seconds
// // //   useEffect(() => {
// // //     const interval = setInterval(nextSlide, 3000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
// // //       {/* Image Slide */}
// // //       <div className="w-full h-full">
// // //         <img
// // //           src={images[currentIndex]}
// // //           alt="Slide"
// // //           className="w-full h-[500px] object-cover rounded-lg transition-all duration-500"
// // //         />
// // //       </div>

// // //       {/* Left Arrow */}
// // //       <button
// // //         onClick={prevSlide}
// // //         className="absolute left-5 text-white bg-gray-800/50 p-3 rounded-full text-2xl hover:bg-gray-900 transition"
// // //       >
// // //         &#10094;
// // //       </button>

// // //       {/* Right Arrow */}
// // //       <button
// // //         onClick={nextSlide}
// // //         className="absolute right-5 text-white bg-gray-800/50 p-3 rounded-full text-2xl hover:bg-gray-900 transition"
// // //       >
// // //         &#10095;
// // //       </button>

// // //       {/* Dot Indicators */}
// // //       <div className="absolute bottom-5 flex space-x-3">
// // //         {images.map((_, index) => (
// // //           <span
// // //             key={index}
// // //             className={`w-4 h-4 rounded-full transition-all duration-300 ${
// // //               index === currentIndex ? "bg-white scale-125 shadow-md" : "bg-gray-400 opacity-70"
// // //             }`}
// // //           ></span>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Carousel;

import React from 'react';
import Single from '../assets/person.jpg';
import Double from '../assets/person.jpg';
import Triple from '../assets/person.jpg';

const Cards = () => {
  const cardData = [
    {
      img: Single,
      title: "FOOD SAVED",
      value: "56,000 Tons",
      text: "56,000 tons of surplus food saved from going to waste, reducing environmental impact and promoting sustainability. 🌍♻️",
      bgColor: "bg-blue-100",
    },
    {
      img: Double,
      title: "NGOs",
      value: "21 NGOs",
      text: "21 NGOs empowered with a reliable food supply, helping them feed more people in need. 🤝💙",
      bgColor: "bg-blue-100",
    },
    {
      img: Triple,
      title: "MEALS",
      value: "60,000",
      text: "60,000 nutritious meals delivered to underserved communities, ensuring no food goes to waste and no one sleeps hungry. 🍽️✨",
      bgColor: "bg-blue-100",
    },
    {
      img: Triple,
      title: "DONORS",
      value: "100",
      text: "100 donors donated food",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <div className="w-full align-middle py-16 px-4 bg-white">
      <div className="w-full mx-auto grid md:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div key={index} className={`card w-72 shadow-lg ${card.bgColor} flex flex-col p-4 rounded-lg hover:scale-105 duration-300`}>
            <img className="w-full h-48 object-cover rounded-t-lg" src={card.img} alt={card.title} />
            <div className="card-body p-4">
              <h2 className="text-2xl font-bold text-center">{card.title}</h2>
              <p className="text-center text-3xl font-bold my-2">{card.value}</p>
              <p className="text-center text-gray-700">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
