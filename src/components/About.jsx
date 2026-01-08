import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBolt, FaRedoAlt, FaPaintBrush, FaVideo } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      /* ================= Scroll Animations ================= */
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.from(imageWrapRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          scrub: true,
        },
      });

      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          scrub: true,
        },
      });

      /* ================= Image Glow + Parallax ================= */
      const wrap = imageWrapRef.current;

      const onMove = (e) => {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        gsap.to(glowRef.current, {
          x: x - 80,
          y: y - 80,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });

        gsap.to(imageRef.current, {
          rotateY: (x - cx) / 15,
          rotateX: -(y - cy) / 15,
          transformPerspective: 600,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(glowRef.current, { opacity: 0, duration: 0.3 });
        gsap.to(imageRef.current, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
        ease: "elastic.out(1,0.3)"
        });
      };

      wrap.addEventListener("mousemove", onMove);
      wrap.addEventListener("mouseleave", onLeave);

      /* ================= Magnetic Cards ================= */
      cardsRef.current.forEach((card) => {
        const strength = 20;

        const cardMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(card, {
            x: (x / rect.width) * strength,
            y: (y / rect.height) * strength,
            scale: 1.06,
            duration: 0.3,
            rotateZ: (x / rect.width) * 10,
            ease: "power3.out",
          });
        };

        const cardLeave = () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            scale: 1,
            rotateZ: 0,
            duration: 0.4,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", cardMove);
        card.addEventListener("mouseleave", cardLeave);
      });
    },
    { scope: sectionRef }
  );

  const features = [
    { icon: <FaBolt />, text: "Fast Delivery" },
    { icon: <FaRedoAlt />, text: "Unlimited Revisions" },
    { icon: <FaPaintBrush />, text: "Professional Design" },
    { icon: <FaVideo />, text: "4K / HD Quality" },
  ];

  return (
    <div
      ref={sectionRef}
      className=" text-white py-5 px-5 sm:px-10 lg:px-20 font-montserrat " 
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div
          ref={imageWrapRef}
          className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px] h-[360px] sm:h-[420px] overflow-hidden"
        >
          <div className="absolute inset-0 border border-white/20" />

          <div
            ref={glowRef}
            className="pointer-events-none absolute w-40 h-40 rounded-full bg-yellow-400/40 blur-3xl opacity-0"
          />

          <div
            ref={imageRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img src="/images/profile.jpg" alt="pfofile-picture" />
            <div className="bg-yellow-400 w-[200px] sm:w-60 h-[130px] sm:h-[150px] rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <p className="text-yellow-400 text-sm tracking-widest mb-2">
          Who I am
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">I am Abdul Kalam</h2>

          <p className="text-white/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-bodoni">
            I design high-converting, visually striking thumbnails and UI
            sections that are optimized for engagement and clarity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="flex items-center gap-4 bg-yellow-400 text-black px-5 py-4 rounded-xl cursor-pointer sm:justify-start justify-evenly"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-full text-lg">
                  {item.icon}
                </div>
                <span className="font-semibold">{item.text}</span>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;