// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   "/assets/aboutus1.webp",
//   "/assets/aboutus2.jpg",
//   "/assets/aboutus3.avif",
//   "/assets/aboutus4.jpg",
//   "/assets/aboutus4.jpg",
//   "/assets/aboutus4.jpg",

// ];

// const BubbleAnimation = () => {
//   const [bubbles, setBubbles] = useState([]);

//   // Function to add a new bubble at a random position
//   const addBubble = () => {
//     const newBubble = {
//       id: Math.random(),
//       image: images[Math.floor(Math.random() * images.length)],
//       x: Math.random() * 80 + 10, // Random X position (10% to 90%)
//       y: Math.random() * 80 + 10, // Random Y position (10% to 90%)
//     };
//     setBubbles((prev) => [...prev, newBubble]);

//     // Remove bubble after some time
//     setTimeout(() => {
//       setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
//     }, 4000); // Bubble disappears after 4s
//   };

//   useEffect(() => {
//     const interval = setInterval(addBubble, 1500); // Generate bubbles every 1.5s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-gray-100">
//       <AnimatePresence>
//         {bubbles.map((bubble) => (
//           <motion.div
//             key={bubble.id}
//             className="absolute w-24 h-24 bg-cover rounded-full shadow-lg"
//             style={{
//               backgroundImage: `url(${bubble.image})`,
//               left: `${bubble.x}%`,
//               top: `${bubble.y}%`,
//             }}
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1.1 }}
//             exit={{ opacity: 0, scale: 0 }}
//             transition={{ duration: 2 }}
//           />
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default BubbleAnimation;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutus1 from "../assets/aboutus1.webp";
import aboutus2 from "../assets/aboutus2.jpg";
import aboutus3 from "../assets/aboutus3.avif";
import aboutus4 from "../assets/aboutus4.jpg";
import aboutus5 from "../assets/aboutus5.jpg";
import aboutus6 from "../assets/aboutus6.jpeg";

const images = [aboutus1, aboutus2, aboutus3, aboutus4, aboutus5, aboutus6];



const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState([]);

  // Function to add a new bubble at a random position
  const addBubble = () => {
    const newBubble = {
      id: Math.random(),
      image: images[Math.floor(Math.random() * images.length)],
      x: Math.random() * 90 + 5, // More spread-out X positions
      y: Math.random() * 90 + 5, // More spread-out Y positions
    };
    setBubbles((prev) => [...prev, newBubble]);

    // Remove bubble after a longer time to keep more on screen
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 6000); // Bubbles last for 6s now
  };

  useEffect(() => {
    const interval = setInterval(addBubble, 1000); // Faster generation (1s instead of 1.5s)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-gray-100">
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute w-20 h-20 md:w-40 md:h-40 bg-cover rounded-full shadow-lg"
            style={{
              backgroundImage: `url(${bubble.image})`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 2 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BubbleAnimation;
