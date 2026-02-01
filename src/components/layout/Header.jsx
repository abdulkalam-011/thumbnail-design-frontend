import { GoArrowUpRight } from "react-icons/go";


const Header = () => {
  return (
      <div className="fixed left-0 top-3 w-full flex justify-center items-center z-99 sm:px-10 md:px-15 lg:px-20 px-2 sm:text-xl text-sm">
    <header className="mx-auto bg-black w-full shadow-lg shadow-gray-900 inset-shadow-sm rounded-full flex justify-between items-center p-3  sm:p-5" >
      <div className=" font-montserrat font-bold hover:text-yellow-400 text-sm"><a href="#hero">Abdul Kalam</a></div>
      <div className="">
        <nav className=""> 
        <ul className="flex font-semibold text-sm items-center">
          <li><a href="#work" className="flex gap-2 items-center hover:text-yellow-400 arrow">Work <span className="opacity-0  transition-all duration-300"><GoArrowUpRight /></span></a></li>
          <li><a href="#contact" className="bg-white text-black sm:px-4 sm:py-2 px-2 py-1  rounded-full hover:bg-yellow-400 hover:text-white transition-all duration-300">Hire Me</a></li>
        </ul> 
      </nav>
      </div>
      
    </header>
    </div>
  );
};

export default Header;
