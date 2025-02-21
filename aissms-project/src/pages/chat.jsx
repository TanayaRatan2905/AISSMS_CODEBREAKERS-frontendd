// import React from 'react'

// const chat = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default chat

import React, { useState } from "react";
import { FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "You", text: "Hello! Is the food ready?" },
    { id: 2, sender: "NGO", text: "Yes, we have packed it for pickup." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, sender: "You", text: input }]);
    setInput("");
  };

  const handleFinalDelivery = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "You", text: `Final Delivery Confirmed! 📍 Location: (${latitude}, ${longitude})` },
      ]);
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Profile Bar */}
      <div className="bg-blue-500 text-white p-4 flex items-center shadow-md">
        <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
        <h2 className="text-lg font-semibold">NGO Chat</h2>
      </div>

      {/* Chat Section */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === "You" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input Bar */}
      <div className="p-4 bg-white flex items-center shadow-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg outline-none"
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          <FaPaperPlane />
        </button>
        <button onClick={handleFinalDelivery} className="ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
          <FaMapMarkerAlt /> Final Delivery
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
