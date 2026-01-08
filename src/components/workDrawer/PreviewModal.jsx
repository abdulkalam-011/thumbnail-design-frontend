import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AiOutlineClose } from "react-icons/ai";

const PreviewModal = ({ item, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.from(modalRef.current, {
      scale: 0.9,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-3 sm:px-6"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="
          bg-neutral-900 rounded-xl
          w-full sm:w-auto
          max-w-[95vw] sm:max-w-5xl
          max-h-[90vh]
          p-4 sm:p-6
          overflow-y-auto
          relative
        "
      >
        {/* Image container */}
        <div className="bg-orange-400 rounded-lg mb-4 overflow-hidden">
          <img
            src={item.img}
            alt={item.titles}
            className="
              w-full
              h-auto
              max-h-[70vh]
              object-contain
              rounded-lg
            "
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-3 right-3
            sm:top-4 sm:right-4
            w-10 h-10 sm:w-12 sm:h-12
            bg-yellow-400
            text-white
            text-xl sm:text-2xl
            font-bold
            rounded-full
            flex items-center justify-center
            hover:scale-105 transition
          "
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default PreviewModal;

