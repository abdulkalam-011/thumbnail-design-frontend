import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.from(".marquee-track", {
      transform: "translateX(-20%)",
      duration: 1.3,
      scale: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".marquee-track",
        start: "top 90%",
        scrub: 1,
      },
    });
  });

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      console.log(e.clientY);
    });
  });
  return (
    <>
      <div className=" grid lg:grid-cols-2 h-screen lg:gap-5 gap-2 text-white grid-rows-2 lg:grid-rows-1 relative">
        <div className=" flex justify-center items-center overflow-hidden ">
          <div className="w-full h-2/3 py-7 lg:py-0 lg:pt-10">
            <h3 className="font-montserrat">
              welcome to my{" "}
              <span className="text-yellow-400 font-bold">portfolio.</span>
            </h3>
            <h1 className="text-[20px] lg:text-[40px] font-bold leading-5 lg:leading-10 font-montserrat mt-2 lg:mt-5 ">
              Transform Your<br />
              Thumbnails into{" "}
              <span className="border-2 leading-tight px-3 border-dashed relative border-yellow-400 uppercase hover:bg-yellow-400 transition-all duration-300 ease-in-out">
                clicks{" "}
                <span className="w-2 h-2 bg-white absolute -bottom-1 -right-1" />
              </span>
            </h1>
            <p className="text-[12px] font-bodoni sm:py-5 md:text-[16px] py-2">
              I help Youtubers by designing High Quality Thumbnails that
              attract more Viewers to grow their channel and save their time.
            </p>
            <div className="mt-2 text-md rounded-full p-2  bg-yellow-400 border-yellow-400  w-fit md:px-8 md:py-6 font-bold md:mt-5 md:text-2xl font-montserrat flex items-center gap-2 border md:hover:bg-yellow-400 md:hover:border-yellow-400 md:hover:text-black transition-all duration-300 ease-in-out md:border-white md:bg-transparent">
            <a href="#contact">
              Get Free Thumbnail 
            </a>
            <GoArrowUpRight />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden ">
          <div className="lg:w-full lg:h-2/3  h-full w-full flex justify-center items-start lg:items-center flex-col gap-2">
            <div className="w-fit h-fit overflow-hidden rounded-xl shadow-[3px_8px_20px_rgba(0,0,0,0.3)] shadow-blue-400 backdrop-blur-lg">
              <img src="images/hero.webp" alt="thumbnail" className="border" />
            </div>
            <div className="lg:w-full h-16   w-full flex lg:justify-end  lg:pr-10 justify-center items-center gap-2 md:mt-4 mt-2">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="w-10 h-10 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="md:h-20 h-10 lg:h-30 w-full  absolute bottom-0 right-0 font-montserrat font-thin whitespace-nowrap overflow-hidden flex  marquee mt-4">
          <div className="marquee-track flex items-center gap-16 lg:gap-32">
            <h3 className="text-3xl lg:text-8xl">Abdul Kalam</h3>
            <h3 className="text-3xl lg:text-8xl">-</h3>
            <h3 className="text-3xl lg:text-8xl">Abdul Kalam</h3>
            <h3 className="text-3xl lg:text-8xl">-</h3>
            <h3 className="text-3xl lg:text-8xl">Abdul Kalam</h3>
            <h3 className="text-3xl lg:text-8xl">-</h3>
            <h3 className="text-3xl lg:text-8xl">Abdul Kalam</h3>
            <h3 className="text-3xl lg:text-8xl">-</h3>
            <h3 className="text-3xl lg:text-8xl">Abdul Kalam</h3>
            <h3 className="text-3xl lg:text-8xl">-</h3>
            <h3 className="text-3xl lg:text-8xl">Abdul Kalam</h3>
            <h3 className="text-3xl lg:text-8xl">-</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
