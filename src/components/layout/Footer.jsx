import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const watermarkRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // Watermark parallax
      gsap.fromTo(
        watermarkRef.current,
        { y: 120 },
        {
          y: -120,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Cards scrub reveal
      gsap.from(cardsRef.current, {
        y: 40,
        x: 10,
        opacity: 0,
        rotate: 5,
        stagger: 0.01,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: true,
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative  bg-black/30 rounded-4xl text-white px-6 md:px-20 py-4 overflow-hidden"
    >
      {/* WATERMARK */}
      <h1
        ref={watermarkRef}
        className="absolute inset-0 flex items-center justify-center text-5xl
                   sm:text-[150px] font-extrabold uppercase
                   text-white/10 sm:whitespace-nowrap
                   pointer-events-none select-none top-60"
      >
        LET’S CONNECT
      </h1>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* CTA BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 " >
          {/* EMAIL – PRIMARY CTA */}
          <a
            ref={(el) => (cardsRef.current[1] = el)}
            href="mailto:abdulkalam.buss@gmail.com"
            target="_blank"
            className="h-[180px] border-2 border-yellow-400 p-8
                       flex flex-col justify-between
                       hover:bg-yellow-400 hover:text-black
                       transition-all duration-300 rounded-2xl "
          >
            <span className="text-sm uppercase tracking-widest opacity-60">
              Email
            </span>
            <span className="sm:text-2xl font-semibold text-sm">
              abdulkalam.buss@gmail.com
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            ref={(el) => (cardsRef.current[1] = el)}
            href="https://instagram.com/abdulkalam_011"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[180px] border border-white/20 p-8
                       flex flex-col justify-between
                       hover:border-yellow-400 transition-colors"
          >
            <span className="text-sm uppercase tracking-widest opacity-60">
              Instagram
            </span>
            <span className="text-xl font-medium flex items-center gap-3">
              <FaInstagram className="text-yellow-400" />
              @abdulkalam_011
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            ref={(el) => (cardsRef.current[2] = el)}
            href="https://wa.me/918303778433?text=Hello%20Abdul%20Kalam"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[180px] border border-white/20 p-8
                       flex flex-col justify-between
                       hover:border-yellow-400 transition-colors"
          >
            <span className="text-sm uppercase tracking-widest opacity-60">
              WhatsApp
            </span>
            <span className="text-xl font-medium flex items-center gap-3">
              <FaWhatsapp className="text-yellow-400" />
              +91 8303778433
            </span>
          </a>
        </div>

        {/* FOOTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/20 pt-8 text-sm text-white/60">
          <nav className="flex gap-8 uppercase tracking-wider">
            <a href="#hero" className="hover:text-yellow-400">Home</a>
            <a href="#work" className="hover:text-yellow-400">Work</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>

          <span>
            © Abdul Kalam 2026. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
