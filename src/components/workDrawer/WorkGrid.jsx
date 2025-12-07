import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

import PreviewModal from "./PreviewModal";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WorkGrid = () => {
  const works = useSelector((state) => state.work.data);
  const gridRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  useGSAP(()=>{
    gsap.from(".text", {
      y:30,
      duration: 1,
      ease: "power3.out",
      opacity: 0,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 90%",
        end: "top 80%",
        scrub:1,
      },
     })
  } );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-card", {
       y: 50,
        opacity: 0,
        width: "0",
        repeat: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          scrub:1,
        },
      });
    }, [gridRef]);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="py-10">
        <div className="  mb-10">
          <h2 className="text-yellow-400 md:text-3xl text-2xl leading-6 font-bold uppercase font-montserrat text">
            Glimpse of my Work
          </h2>
          <p className="text-gray-400 text-sm text">
            Selected visual projects
          </p>
        </div>

        <div
          ref={gridRef}
          className="
            max-w-8xl 
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {works.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`
                work-card relative overflow-hidden cursor-pointer rounded-xl w-full md:w-auto
                ${item.span}
              `}
              
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Hover overlay */}
              <div className="
                absolute inset-0
                bg-black/40 opacity-0
                hover:opacity-40
                transition-opacity
                flex items-end p-4
              ">
                <h3 className="text-white font-medium">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeItem && (
        <PreviewModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </>
  );
};

export default WorkGrid;
