import React from "react";

import { Link } from "react-router";

const Header = () => {
  return (
      <div className="fixed left-0 top-3 w-full flex justify-center items-center ">
    <header className=" bg-black w-[85%] shadow-lg shadow-gray-900 inset-shadow-sm rounded-full flex justify-between items-center sm:py-4 sm:px-5" >
      <div className="text-xl font-montserrat font-bold "><a href="#hero">Abdul Kalam</a></div>
      <div className="">
        <nav className="">
        <ul className="flex space-x-6  ">
          <li><a href="#contact">contact</a></li>
          <li><a href="#contact" className="bg-white text-black px-4 py-2 rounded-full">Hire me</a></li>
        </ul>
         
      </nav>
      </div>
      
    </header>
    </div>
  );
};

export default Header;
