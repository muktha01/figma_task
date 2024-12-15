import React from "react";

const PartnershipCards = () => {
  return (
    <div className="text-center p-8 bg-gray-50 pb-20">
      <h1 className="text-2xl font-bold mb-8">
        Best Partnership Deal With MaltaXplore?
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-80 p-6 rounded-lg shadow-lg bg-white text-left border-2 ">
          <h2 className="font-bold text-lg mb-4">Unlock Unmatched Local Expertise</h2>
          <p className="text-gray-600">
            Partner with MaltaXplore to bring unparalleled knowledge of Malta’s hidden gems to your clients, adding value through authentic, locally-curated experiences that only insiders can provide.
          </p>
        </div>
        <div className="w-80 p-6 rounded-lg shadow-lg bg-white text-left border-2 ">
          <h2 className="font-bold text-lg mb-4">Boost Your Brand with Exclusive Offerings</h2>
          <p className="text-gray-600">
            Stand out by offering unique, captivating travel experiences that set you apart in a competitive market—crafted with MaltaXplore’s deep understanding of Malta’s rich culture and landscapes.
          </p>
        </div>
        <div className="w-80 p-6 rounded-lg shadow-lg bg-white text-left border-2">
          <h2 className="font-bold text-lg mb-4">Reliability and Dedicated Support</h2>
          <p className="text-gray-600">
            Count on a reliable partnership backed by consistent support and competitive pricing, ensuring a seamless experience for both your team and clients every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipCards;
