import React from "react";

const historyData = {
  ngo: [
    { id: 1, donor: "John Doe", food: "Fresh cucumbers, 10kgs", date: "2025-02-10" },
    { id: 2, donor: "Jane Smith", food: "Sealed biscuits pack", date: "2025-02-12" },
  ],
  donor: [
    { id: 1, recipient: "NGO A", food: "Canned beans", date: "2025-02-15" },
    { id: 2, recipient: "NGO B", food: "Fresh tomatoes, 5kgs", date: "2025-02-18" },
  ],
};

const HistoryPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Donation History</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">NGO History</h2>
        <ul className="list-disc pl-5 bg-white p-4 shadow-md rounded-lg">
          {historyData.ngo.map((deal) => (
            <li key={deal.id} className="mt-2">
              {deal.donor} donated {deal.food} on {deal.date}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold">Donor History</h2>
        <ul className="list-disc pl-5 bg-white p-4 shadow-md rounded-lg">
          {historyData.donor.map((deal) => (
            <li key={deal.id} className="mt-2">
              Donated {deal.food} to {deal.recipient} on {deal.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryPage;
