// src/pages/feedback.jsx

import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { name, feedback });
    // Here you can add code to send the feedback to a server or API
    alert("Thank you for your feedback!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center">Give Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium">Your Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Enter your feedback"
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
