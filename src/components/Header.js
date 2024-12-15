import React, { useRef } from "react";
import '../App.css';

const Header = ({ onScroll, refs }) => {
  const { homeRef, aboutRef,  } = refs;

  return (
    <header className="bg-gradient-to-b from-red-200 via-red-200 to-red-50 h-100  to-white py-12">
     
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className="text-2xl font-bold">Logo Here</div>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-red-500 cursor-pointer"
         
          
          >Home</li>
          <li className="hover:text-red-500 cursor-pointer"  onClick={() => onScroll(homeRef)} >Benefit</li>
          <li className="hover:text-red-500 cursor-pointer">Services</li>
          <li className="hover:text-red-500 cursor-pointer">Tour Listing</li>
          <li onClick={() => onScroll(aboutRef)} className="hover:text-red-500 cursor-pointer">Footer</li>
        </ul>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
