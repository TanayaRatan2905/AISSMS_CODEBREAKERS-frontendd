// import React from "react";
// import { motion } from "framer-motion";
// import FounderImage from "../assets/founder.jpg";
// import Partner1 from "../assets/partner1.png";
// import Partner2 from "../assets/partner2.png";
// import Partner3 from "../assets/partner3.png";
// import BubbleAnimation from "../components/BubbleAnimation";

// const AboutUs = () => {
//   return (
//     <div className="bg-white text-gray-900">
//       {/* Bubbles Animation Section */}
//       <div className="h-[50vh] w-full flex items-center justify-center bg-gray-100">
//         <BubbleAnimation />
//       </div>
      
//       {/* About Section */}
//       <div className="max-w-4xl mx-auto text-center py-12">
//         <h2 className="text-4xl font-bold">About Our Mission</h2>
//         <p className="text-gray-600 mt-4">
//           We aim to bridge the gap between surplus food sources and NGOs, ensuring efficient redistribution
//           to those in need. Our platform makes it seamless for donors and organizations to connect and make an impact.
//         </p>
//       </div>

//       {/* Founders Section */}
//       <div className="bg-gray-200 py-12">
//         <h2 className="text-3xl font-bold text-center">Meet Our Founders</h2>
//         <div className="flex justify-center mt-6">
//           <img src={FounderImage} alt="Founder" className="w-40 h-40 rounded-full shadow-lg" />
//         </div>
//         <p className="text-center mt-4 font-semibold">John Doe - CEO & Founder</p>
//       </div>

//       {/* Partners Section */}
//       <div className="py-12">
//         <h2 className="text-3xl font-bold text-center">Our Partners</h2>
//         <div className="flex justify-center gap-6 mt-6">
//           <img src={Partner1} alt="Partner" className="h-20" />
//           <img src={Partner2} alt="Partner" className="h-20" />
//           <img src={Partner3} alt="Partner" className="h-20" />
//         </div>
//       </div>

//       {/* Timeline Section */}
//       <div className="bg-gray-100 py-12">
//         <h2 className="text-3xl font-bold text-center">Our Progress Timeline</h2>
//         <div className="max-w-4xl mx-auto mt-8">
//           <div className="relative border-l-4 border-green-500 pl-6">
//             <div className="mb-6">
//               <h3 className="text-xl font-bold">2023 - Launched</h3>
//               <p className="text-gray-600">Our platform was officially launched to connect donors with NGOs.</p>
//             </div>
//             <div className="mb-6">
//               <h3 className="text-xl font-bold">2024 - 500+ Donations</h3>
//               <p className="text-gray-600">Successfully redistributed over 500 food donations.</p>
//             </div>
//             <div className="mb-6">
//               <h3 className="text-xl font-bold">2025 - Expansion</h3>
//               <p className="text-gray-600">Expanded operations to 10+ cities, increasing our reach and impact.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import { motion } from "framer-motion";
import FounderImage from "../assets/founder1.jpeg";
import Partner1 from "../assets/founder2.jpeg";
import Partner2 from "../assets/founder3.jpg";
import Partner3 from "../assets/founder4.jpeg";
import BubbleAnimation from "../components/BubbleAnimation";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Bubbles Animation Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <BubbleAnimation />
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto text-center py-12">
        <motion.h2 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          About Our Mission
        </motion.h2>
        <p className="text-gray-600 mt-4">
          We aim to bridge the gap between surplus food sources and NGOs, ensuring efficient redistribution
          to those in need. Our platform makes it seamless for donors and organizations to connect and make an impact.
        </p>
      </div>

      {/* Founders Section */}
      <div className="bg-gray-200 py-12">
        <h2 className="text-3xl font-bold text-center">Meet Our Founders</h2>
        <div className="flex justify-center mt-6">
          <motion.img
            src={FounderImage}
            alt="Founder"
            className="w-40 h-40 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-center mt-4 font-semibold">John Doe - CEO & Founder</p>
      </div>

      {/* Partners Section (with Scrolling) */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center">Our Partners</h2>
        <div className="flex overflow-auto justify-center items-center whitespace-nowrap gap-6 mt-6 px-4">
          {[Partner1, Partner2, Partner3].map((partner, index) => (
            <motion.img 
              key={index}
              src={partner} 
              alt="Partner" 
              className="h-20 mx-4 inline-block"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>

      {/* Timeline Section (with Framer Motion) */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center">Our Progress Timeline</h2>
        <div className="max-w-4xl mx-auto mt-8 relative border-l-4 border-green-500 pl-6">
          {[
            { year: "2023", title: "Launched", description: "Our platform was officially launched to connect donors with NGOs." },
            { year: "2024", title: "500+ Donations", description: "Successfully redistributed over 500 food donations." },
            { year: "2025", title: "Expansion", description: "Expanded operations to 10+ cities, increasing our reach and impact." }
          ].map((event, index) => (
            <motion.div 
              key={index} 
              className="mb-6 relative"
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-6 top-1 w-4 h-4 bg-green-500 rounded-full"></div>
              <h3 className="text-xl font-bold">{event.year} - {event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
