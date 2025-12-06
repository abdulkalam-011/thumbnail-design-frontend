import { useEffect, useRef } from "react";
import gsap from "gsap";

const PreviewModal = ({ item, onClose }) => {
  const modalRef = useRef(null);
 console.log(item)
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
      className="fixed inset-0 z-50 bg-black/70  flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-900 rounded-xl max-w-5xl w-full p-6 max-h-screen overflow-y-auto h-fit relative min-w-5xl min-h-1/2"
      >
        <div className="h-fit bg-orange-400 rounded-lg mb-4 relative" >
          <img src={item.img} alt={item.titles} />
        </div>

        

       

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-yellow-400 text-black rounded-md absolute top-4 right-10"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PreviewModal;
