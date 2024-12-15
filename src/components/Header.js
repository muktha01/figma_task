import React from "react";
import '../App.css';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-red-100 via-red-100 to-red-50 h-100  to-white py-12">
     
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className="text-2xl font-bold">Logo Here</div>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About</li>
          <li className="hover:text-red-500 cursor-pointer">Services</li>
          <li className="hover:text-red-500 cursor-pointer">Tour Listing</li>
          <li className="hover:text-red-500 cursor-pointer">Supplier Registration</li>
        </ul>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
