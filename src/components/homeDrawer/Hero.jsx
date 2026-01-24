import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const statsRef = useRef([]);

  useGSAP(
    () => {
      // 🌊 Background / glow parallax
      gsap.to(glowRef.current, {
        y: 180,
        scale: 1.25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 🔢 Number counter with blur morph
      statsRef.current.forEach((el) => {
        const value = Number(el.dataset.value);

        gsap.fromTo(
          el,
          {
            innerText: 0,
            filter: "blur(12px)",
            opacity: 0.4,
          },
          {
            innerText: value,
            filter: "blur(0px)",
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            onUpdate() {
              el.innerText = Math.floor(el.innerText);
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center"
    >
      {/* 🖼 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/thumbnail-design-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* 🌈 Glow */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[320px] h-80
        sm:w-[420px] sm:h-[420px]
        md:w-[550px] md:h-[550px]
        bg-yellow-800/40 blur-[120px] rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-3 mb-6 text-xs sm:text-sm bg-white/10 rounded-full backdrop-blur mt-20 lg:mt-24 animate-pulse">
          🟢 Available for new projects
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Thumbnails That{" "}
          <span className="block sm:inline text-yellow-400">
            Stop The Scroll
          </span>
        </h1>

        {/* Description */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
          I design high-CTR thumbnails for creators who want to dominate their
          niche. Turn impressions into views with strategic, click-worthy
          visuals.
        </p>

        {/* CTA */}
        <div className="mt-4 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#work" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            View Portfolio →
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition">
            Contact Me
          </a>
        </div>
      </div>

      {/* 📊 Stats */}
      <div className="relative z-10 mt-10 sm:mt-20 px-5 sm:px-8 mb-10 bg-zinc-800/50 rounded-2xl py-8 backdrop-blur-sm max-w-5xl sm:w-full mx-auto border border-zinc-700">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center">
          {[
            { label: "VIEWS GENERATED", value: 50, suffix: "M+" },
            { label: "THUMBNAILS CREATED", value: 500, suffix: "+" },
            { label: "AVG CTR INCREASE", value: 15, suffix: "%" },
            { label: "HAPPY CREATORS", value: 50, suffix: "+" },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-center items-baseline gap-1">
                <span
                  ref={(el) => (statsRef.current[i] = el)}
                  data-value={item.value}
                  className="text-3xl sm:text-4xl font-bold"
                >
                  0
                </span>
                <span className="text-xl sm:text-2xl font-bold">
                  {item.suffix}
                </span>
              </div>
              <p className="mt-2 text-[10px] sm:text-xs text-gray-400 tracking-widest">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
