import React from 'react';
import Single from '../assets/person.jpg'
import Double from '../assets/person.jpg'
import Triple from '../assets/person.jpg'

const Cards = () => {
  return (
    <div className='w-full py-[9rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl bg-green-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>FOOD SAVED</h2>
              <p className='text-center text-4xl font-bold'>56,000 Tons </p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>56,000 tons of surplus food saved from going to waste,
                     reducing environmental impact and promoting sustainability. 🌍♻️</p>
                  {/* <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p> */}
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          <div className='w-full shadow-xl bg-green-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>NGOs</h2>
              <p className='text-center text-4xl font-bold'>21 NGOs</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>21 NGOs empowered with a reliable food supply, 
                    helping them feed more people in need. 🤝💙</p>
                  {/* <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p> */}
              </div>
              {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          <div className='w-full shadow-xl bg-green-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>MEALS</h2>
              <p className='text-center text-4xl font-bold'>60,000</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>60,000  nutritious meals delivered to underserved communities,
                     ensuring no food goes to waste and no one sleeps hungry. 🍽️✨</p>
                  {/* <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p> */}
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
      </div>
    </div>
  );
};

export default Cards;