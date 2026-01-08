import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReactCompareImage from "react-compare-image";
import CompareImage from "./CompareImage";

gsap.registerPlugin(ScrollTrigger);

export default function ThumbnailCaseStudy() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const analysisRef = useRef(null);
  const takeawayRef = useRef(null);

  useGSAP(() => {
    // Intro animation (on enter)
    const introTl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    introTl
      .fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
      )
      .from(imageRef.current, { y: 60, opacity: 0, duration: 0.9 }, "-=0.3")
      .from(
        analysisRef.current.children,
        {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
        },
        "-=0.4"
      );

    // Parallax effect on image while scrolling
    gsap.to(imageRef.current, {
      y: -40,
      x:20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

  
    gsap.from(takeawayRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: takeawayRef.current,
        start: "top 85%",
        scrub:true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 py-20 text-gray-200"
    >
      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Thumbnail Optimization — Case Study
        </h2>
        <p className="mt-4 text-gray-400">
          Discovery-first redesign focused on improving mobile CTR while
          respecting the creator’s original brand tone.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* Left: Analysis */}
        <div ref={analysisRef} className="space-y-10">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-medium mb-3 text-white">
              What Was Limiting Growth
            </h3>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>Low contrast reducing mobile visibility</li>
              <li>Neutral expression blending into similar content</li>
              <li>Unclear visual hierarchy</li>
              <li>Weak scroll-stopping presence for new viewers</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-medium mb-3 text-white">What I Optimized</h3>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>Clear hierarchy (face → hook → context)</li>
              <li>High-contrast, mobile-first color system</li>
              <li>Controlled urgency without clickbait</li>
              <li>Stronger emotional signal aligned with topic</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="font-medium mb-3 text-white">Resulting Direction</h3>
            <p className="text-sm text-gray-400">
              A discovery-optimized thumbnail prepared for A/B testing —
              improving first-impression clarity and click potential while
              remaining brand-safe for existing subscribers.
            </p>
          </div>
        </div>

        {/* Right: Image + Takeaways */}
        <div className="space-y-8">
          <div
            ref={imageRef}
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <CompareImage leftImage="/images/gtmsharma_raw.webp" rightImage="/images/fayefilms_1.webp" />
          </div>

          {/* Key Takeaways */}
          <div ref={takeawayRef}>
            <h3 className="font-medium mb-4 text-white">Key Takeaways</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-400">
                Mobile clarity drives discovery CTR.
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-400">
                Strong hierarchy outperforms aesthetic complexity.
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-400">
                Urgency works best when subtle and honest.
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-400">
                Brand tone can be preserved while optimizing for growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
