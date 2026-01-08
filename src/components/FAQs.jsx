import { useState, useRef } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import gsap from "gsap";

const FAQ = () => {
  const faqs = [
    {
      question: "Can you promise more clicks or views?",
      answer:
        "I don’t make fixed promises on numbers. What I do promise is a thumbnail designed using real viewer psychology — clarity, contrast, emotion, and curiosity — to give your video the best chance to perform.",
    },
    {
      question: "Do you help only with design or also with strategy?",
      answer:
        "Design is just one part. I also help you decide what visual angle works best, how the thumbnail should support the title, and what will attract your target audience.",
    },
    {
      question: "Will I receive the editable source (PSD) file?",
      answer:
        "The final image is included by default. Editable source files can be shared separately if you need them for future edits.",
    },
    {
      question: "How fast can I expect delivery?",
      answer:
        "Most thumbnails are delivered within 24–48 hours. For multiple thumbnails or ongoing work, timelines are planned in advance.",
    },
    {
      question: "How does payment work?",
      answer:
        "For single thumbnails, payment is taken upfront. If we’re working long-term or on bulk designs, flexible payment structures can be discussed.",
    },
    {
      question: "What if I don’t like the first version?",
      answer:
        "That’s completely fine. I refine the thumbnail based on your feedback until it matches your vision and expectations.",
    },
    {
      question: "How many changes can I request?",
      answer:
        "Each thumbnail includes Unlimited revisions.  I revise based on clear feedback to reach the best possible result, because your satisfaction matters.",
    },
    {
      question: "Why should I choose you over other designers?",
      answer:
        "I don’t just design thumbnails — I design for clicks. Every thumbnail is built around storytelling, attention psychology, and viewer behavior.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const iconRefs = useRef([]);

  const toggleFAQ = (index) => {
    const content = contentRefs.current[index];
    const icon = iconRefs.current[index];

    // Close same
    if (openIndex === index) {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => (content.style.display = "none"),
      });

      gsap.to(icon, {
        rotate: 0,
        scale: 1,
        duration: 0.25,
      });

      setOpenIndex(null);
      return;
    }

    // Close previous
    if (openIndex !== null) {
      const prevContent = contentRefs.current[openIndex];
      const prevIcon = iconRefs.current[openIndex];

      gsap.to(prevContent, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => (prevContent.style.display = "none"),
      });

      gsap.to(prevIcon, {
        rotate: 0,
        scale: 1,
        duration: 0.25,
      });
    }

    // Open new
    content.style.display = "block";
    const fullHeight = content.scrollHeight;

    gsap.fromTo(
      content,
      { height: 0, opacity: 0 },
      {
        height: fullHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => (content.style.height = "auto"),
      }
    );

    gsap.fromTo(
      icon,
      { rotate: 0, scale: 0.8 },
      {
        rotate: 180,
        scale: 1.1,
        duration: 0.35,
        ease: "power2.out",
      }
    );

    setOpenIndex(index);
  };

  return (
    <section className="py-20 sm:px-8 lg:px-20 text-white">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 font-montserrat text-yellow-500">
        Frequently Asked Questions (FAQ's).
      </h2>

      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className=" bg-black/30 pb-4 p-5 rounded-2xl">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-sm sm:text-base font-montserrat font-semibold">
                {faq.question}
              </span>

              <span
                ref={(el) => (iconRefs.current[index] = el)}
                className="text-xl"
              >
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{ display: "none", height: 0 }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed font-bodoni">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
