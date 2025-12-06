import React from "react";

import { Link } from "react-router";

const Header = () => {
  return (
      <div className="fixed left-0 top-3 w-full flex justify-center items-center ">
    <header className=" bg-black w-[85%] shadow-2xl shadow-gray-400 rounded-full flex justify-between items-center sm:p-5 p-1" >
      <div className="text-xl ml-5"><a href="#hero"> fdfjf</a></div>
      <div className="mr-5">
        <nav>
        <ul className="flex space-x-6 mr-4">
          <li><a href="#contact">contact</a></li>
        </ul>

      </nav>
      </div>
      
    </header>
    </div>
  );
};

export default Header;
