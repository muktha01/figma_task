import React, { useState } from "react";

const FaqSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="p-8 sm:p-16">
      
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

     
      <div className="space-y-4 max-w-3xl mx-auto">
       
        <div
          className={`border rounded-lg ${
            openQuestion === 1 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <button
            className="flex items-center justify-between w-full px-6 py-4 text-left bg-gray-100 font-medium text-gray-900 focus:outline-none"
            onClick={() => toggleQuestion(1)}
          >
            What are the benefits of partnering with MaltaXplore?
            <svg
              className={`w-5 h-5 transform ${
                openQuestion === 1 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 1 && (
            <p className="px-6 py-4 text-gray-700">
              By partnering with MaltaXplore, you gain access to exclusive,
              locally-curated experiences, competitive pricing, and dedicated
              support, helping you provide unique value to your clients.
            </p>
          )}
        </div>

       
        <div
          className={`border rounded-lg ${
            openQuestion === 2 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <button
            className="flex items-center justify-between w-full px-6 py-4 text-left   bg-gray-100 font-medium text-gray-900 focus:outline-none"
            onClick={() => toggleQuestion(2)}
          >
            How do I register as a partner?
            <svg
              className={`w-5 h-5 transform ${
                openQuestion === 2 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 2 && (
            <p className="px-6 py-4 text-gray-700">
              You can register as a partner by visiting our website and
              completing the partner application form.
            </p>
          )}
        </div>

        
        <div
          className={`border rounded-lg ${
            openQuestion === 3 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <button
            className="flex items-center justify-between w-full  bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 focus:outline-none"
            onClick={() => toggleQuestion(3)}
          >
            What type of businesses can partner with MaltaXplore?
            <svg
              className={`w-5 h-5 transform ${
                openQuestion === 3 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 3 && (
            <p className="px-6 py-4 text-gray-700">
              Any business offering tours, activities, or dining experiences
              that align with our values can partner with MaltaXplore.
            </p>
          )}
        </div>

       
        <div
          className={`border rounded-lg ${
            openQuestion === 4 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <button
            className="flex items-center justify-between w-full  bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 focus:outline-none"
            onClick={() => toggleQuestion(4)}
          >
            Is there a minimum commitment required to partner?
            <svg
              className={`w-5 h-5 transform ${
                openQuestion === 4 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 4 && (
            <p className="px-6 py-4 text-gray-700">
              No, there is no minimum commitment required. We aim to make it
              easy for you to start partnering with us.
            </p>
          )}
        </div>

       
        <div
          className={`border rounded-lg ${
            openQuestion === 5 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <button
            className="flex items-center justify-between w-full  bg-gray-100 px-6 py-4 text-left font-medium text-gray-900 focus:outline-none"
            onClick={() => toggleQuestion(5)}
          >
            Will my business receive marketing support from MaltaXplore?
            <svg
              className={`w-5 h-5 transform ${
                openQuestion === 5 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === 5 && (
            <p className="px-6 py-4 text-gray-700">
              Yes, we provide marketing support to help you maximize your
              exposure and reach your target audience.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
