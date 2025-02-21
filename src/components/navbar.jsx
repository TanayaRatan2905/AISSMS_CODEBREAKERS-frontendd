// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/temp-logo.png";  // Ensure this logo exists

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="flex items-start justify-between border-b-gray-400">
//     <div className="flex items-between px-5">
//     <NavLink to="/" >Home</NavLink>
//     <NavLink to="/donate">Donate</NavLink>
//     <NavLink to="/ngo">Find NGO</NavLink>
//     <NavLink to="/about" >About</NavLink>
//     <NavLink to="/contact">Contact</NavLink>
//     </div>

//   <img
//     onClick={() => navigate("/")}
//     className="w-25 cursor-pointer ml-auto"  // ml-auto moves it to the right
//     src={logo}
//     alt="Logo"
//   />
// </div>

//   );
// };

// export default Navbar;


// import React from 'react'

// const navbar = () => {
//   return (
//     <div className='text-white'>
//       <h1 className='w-full text-3xl font-bold text-red-500'>Food.</h1>
//       <ul className='flex'>
//         <li className='p-4'>Home</li>
//         <li className='p-4'>Company</li>
//         <li className='p-4'>Resources</li>
//         <li className='p-4'>About</li>
//         <li className='p-4'>Contact</li>
//       </ul>
//     </div>
//   )
// }

// export default navbar

import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom'
import  profileIcon from "../assets/profileIcons.png" 
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showProfile, setShowProfile] = useState(true);
  const location = useLocation();
  useEffect(()=>{
    if (location.pathname === "/" || location.pathname === "/donate"){
      setShowProfile(false)
    }else{
      setShowProfile(true)
    }
  },[location])


  return (
    <div className='z-10 flex justify-between gap-20 items-center h-24 mx-auto px-10 text-white'>
      <h1 className='text-6xl font-bold text-[#00df9a]'>SEVA.</h1>
      <ul className={`hidden  md:flex gap-5`}>
        <li>
          <Link to= "/">Home</Link></li>
        <li>
          <Link to="/History">History</Link></li>
        <li>
          <Link to="/feedback">Feedback</Link></li>
        <li>
          <Link to="/aboutus">About</Link>
        </li>
        <li className="relative">
          <button onClick={() => setIsOpen(!isOpen)}>Contact</button>
          {isOpen && (
            <ul className="absolute bg-white text-black right-0 mt-2 w-40 rounded-md shadow-md">
              <li className="px-4 py-2 hover:bg-gray-100">📧 Email: example@mail.com</li>
              <li className="px-4 py-2 hover:bg-gray-100">📞 Phone: +123 456 7890</li>
            </ul>
          )}
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div className={`${showProfile ? "block":"hidden"} w-12 h-auto`}>
        <img src={profileIcon}></img>
      </div>
    </div>
  );
};

export default Navbar;
