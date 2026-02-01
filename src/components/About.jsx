import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiCheck } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const introRef = useRef(null);
  const utilityRef = useRef(null);

  useGSAP(
    () => {
      /* WORD BY WORD REVEAL */
      const words = textRef.current.querySelectorAll(".word");

      gsap.from(words, {
        opacity: 0,
        y: 20,
        rotateX: 45,
        stagger: 0.02,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      });
    
      /* PARALLAX IMAGE */
      gsap.to(imageRef.current, {
        y: -20,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "top 80%",
          scrub: true,
        },
      });

      //name animation
      gsap.from(introRef.current,{
        y:20,
        x:40,
        opacity:0,
        scrollTrigger:{
          trigger:introRef.current,
          start:"top bottom",
          end:"bottom 70%",
          scrub:true,
        }
      })

      // // intro animation
      // gsap.from(imageRef.current,{
      //   opacity:0,
      //   y:20,
      //   x:-40,
      //   scrollTrigger:{
      //     trigger:imageRef.current,
      //     top:"top bottom",
      //     end:"bottom 50%",
      //     scrub:true,
      //   }
      // })
      // gsap.from(utilityRef.current,{
      //   opacity:0,
      //   y:30,
      //   width:0,
      //   x:-40,
      //   scrollTrigger:{
      //     trigger:utilityRef.current,
      //     start:"top bottom",
      //     end:"top bottom",
      //     scrub:1,
      //     markers:true,
      //   }
      // })
    },
    { scope: containerRef }
  );

  const splitWords = (text) =>
    text.split("").map((word, i) => (
      <span key={i} className="word inline-block">
        &nbsp;{word}
      </span>
    ));

  return (
    <section
      ref={containerRef}
      className="text-white px-4 md:px-10 overflow-hidden font-montserrat "
    >
      <div ref={introRef} className=" text-center sm:text-left  max-w-7xl mx-auto mb-16  flex flex-col sm:flex-row items-center justify-between ">
        <div><p className="text-yellow-400 text-[10px] sm:text-sm font-semibold uppercase leading-tight">
          The person behind the pixels
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Meet Abdul Kalam
        </h2></div>
        <span className="lg:w-[30%] lg:bg-zinc-800 lg:border lg:border-zinc-700 lg:py-2 lg:px-4 lg:rounded-2xl  font-bodoni"><p>Visual storyteller, data nerd, and your partner in fighting the algorithm.</p></span>
        
      </div>

      <div ref={utilityRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {/* IMAGE CARD */}
        <div className="bg-zinc-900 rounded-3xl px-6 py-3 grayscale-0 hover:grayscale-75 transition-all duration-300 ease-in-out bg-[url('/images/profile.jpg')] bg-cover bg-center flex flex-col items-start justify-between p-6 min-h-[400px]" ref={imageRef}>
          <span className="inline-block bg-yellow-200 text-black text-xs font-semibold px-3 py-1 rounded-full mt-6 mb-4">
            AVAILABLE FOR HIRE
          </span>
          <span>
            {" "}
            <h3 className="text-xl font-semibold text-black">Abdul Kalam</h3>
            <p className="text-sm text-gray-400">Senior Thumbnail Designer</p>
          </span>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* TEXT REVEAL CARD */}
          <div className="bg-zinc-900 border border-yellow-400/30 rounded-3xl p-6 relative">
          <h1 className="absolute sm:top-10 lg:right-10 sm:text-9xl text-6xl font-bodoni text-zinc-800 right-3 top-20">"</h1>
            <h3
              
              className="text-2xl md:text-3xl font-semibold leading-tight words"
            >
              I don't just design. I engineer 
              <span className="text-yellow-400 words">
                 &nbsp;clicks.
              </span>
            </h3>

            <p ref={textRef} className="text-gray-400 text-sm leading-relaxed mt-3 max-w-xl words overflow-hidden">
              {splitWords(
                "With over 5 years of experience, I’ve moved past “making things look pretty.” My approach blends psychology, composition, and analytics to turn views into clicks."
              )}
            </p>

            <div className="flex gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <FiCheck className="text-yellow-400" />
                5+ Years Exp.
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="text-yellow-400" />
                500+ Projects
              </div>
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-3xl p-6">
              <h4 className="font-semibold text-lg mb-4">🛠️ My Arsenal</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Photoshop",
                  "Blender 3D",
                  "Midjourney",
                  "Figma",
                  "Lightroom",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="bg-zinc-800/50 px-4 py-2 rounded-full text-sm hover:bg-zinc-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 text-black rounded-3xl p-6 flex flex-col justify-between items-start">
              <div className=" w-full flex justify-between items-center">
                <span>
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="uppercase text-sm font-semibold">
                  Satisfaction rate
                </p>
                </span>
                <span className="text-green-500 bg-white p-3 rounded-full font-bold"><FaArrowUpLong /></span>
              </div>

              <a href="#contact" className="mt-6 font-semibold hover:underline underline-offset-4 hover:text-black/90 ">
                Let’s Work Together →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
