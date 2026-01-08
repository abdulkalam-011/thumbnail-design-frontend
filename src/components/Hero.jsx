import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const Hero = () => {
  useGSAP(() => {
    gsap.from(".marquee-track", {
      x: "-20%",
      scale: 2,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".marquee-track",
        start: "top 90%",
        scrub: 1,
      },
    });
  });

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-16 pt-20 lg:pt-28">

        {/* LEFT CONTENT */}
        <div className="flex items-center">
          <div className="max-w-xl">
            <h3 className="font-montserrat text-sm sm:text-base">
              welcome to my{" "}
              <span className="text-yellow-400 font-bold">portfolio.</span>
            </h3>

            <h1 className="mt-3 font-bold font-montserrat leading-tight text-[clamp(1.5rem,5vw,2.8rem)]">
              Transform Your <br />
              Thumbnails into{" "}
              <span className="relative inline-block border-2 border-dashed border-yellow-400 px-3 uppercase transition-all duration-300 hover:bg-yellow-400 hover:text-black">
                clicks
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white" />
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg font-bodoni text-gray-300">
              I help Youtubers by designing high-quality thumbnails that attract
              more viewers, grow channels, and save time.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-400 px-6 py-3 font-bold text-black transition-all hover:bg-transparent hover:text-yellow-400 md:text-lg"
            >
              Get Free Thumbnail
              <GoArrowUpRight />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-xl shadow-[3px_8px_20px_rgba(0,0,0,0.3)] shadow-blue-400">
            <img
              src="images/hero.webp"
              alt="thumbnail"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* AVATARS */}
      <div className="mt-6 flex justify-center lg:justify-end gap-3 px-6 lg:px-16">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>

      {/* MARQUEE */}
      <div className="absolute bottom-0 w-full overflow-hidden py-3 sm:py-6 font-montserrat">
        <div className="marquee-track flex gap-16 sm:gap-24 whitespace-nowrap">
          {Array(6)
            .fill("Abdul Kalam")
            .map((text, i) => (
              <span
                key={i}
                className="text-2xl sm:text-4xl lg:text-7xl font-thin"
              >
                {text} -
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
