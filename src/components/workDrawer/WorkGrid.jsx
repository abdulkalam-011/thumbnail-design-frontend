import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PreviewModal from "./PreviewModal";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const WorkGrid = () => {
  const works = useSelector((state) => state.work.data);
  const gridRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className=" py-20 px-4">
        <div className="max-w-7xl mx-auto mb-10">
          <h2 className="text-yellow-400 text-3xl font-bold uppercase font-montserrat">
            Glimpse of Work
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Selected visual projects
          </p>
        </div>

        <div
          ref={gridRef}
          className="
            max-w-7xl mx-auto
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            auto-rows-[280px]
            grid-flow-dense
          "
        >
          {works.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`
                work-card relative overflow-hidden cursor-pointer rounded-xl 
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
