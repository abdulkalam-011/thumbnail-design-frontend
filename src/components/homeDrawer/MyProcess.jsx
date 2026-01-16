import { FiSearch, FiEdit3, FiLayers } from "react-icons/fi";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Research",
      icon: <FiSearch />,
      desc:
        "I analyze your title, niche, and competitors to find a gap in the market. We identify the hook that will grab attention.",
      highlight: true,
    },
    {
      step: "02",
      title: "Concept",
      icon: <FiEdit3 />,
      desc:
        "Sketching layouts and choosing color palettes. We decide on facial expression and main subject placement.",
    },
    {
      step: "03",
      title: "Design",
      icon: <FiLayers />,
      desc:
        "The magic happens here. Compositing, lighting effects, color grading, and texture blending in Photoshop / Blender.",
    },
    {
      step: "04",
      title: "Launch",
      icon: <FiSearch />,
      desc:
        "Delivery of high-res files. Final checks on multiple screen sizes to ensure mobile readability.",
    },
  ];

  return (
    <section className=" text-white py-10">
      {/* Heading */}
      <div className="text-center px-4 font-bodoni">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My Creative Process
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400">
          From concept to click-worthy in 4 steps.
        </p>
      </div>

      {/* Cards */}
      <div className="sm:mt-20 mt-10 max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 bg-white/5 border ${
                item.highlight
                  ? "border-yellow-400"
                  : "border-white/10"
              }`}
            >
              {/* Step Number */}
              <span className="absolute top-6 right-6 text-4xl font-bold text-white/10">
                {item.step}
              </span>

              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-6 ${
                  item.highlight
                    ? "bg-yellow-400 text-black"
                    : "bg-white/10"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
