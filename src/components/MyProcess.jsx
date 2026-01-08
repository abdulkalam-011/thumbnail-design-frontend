export default function MyProcess() {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 lg:px-20 py-16">
      {/* Section Title */}
      <h2 className="text-lg font-medium text-gray-300 mb-12">
        Section 6
      </h2>

      {/* Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left small card */}
        <div className="bg-[#FFC83D] text-black p-6 w-40 h-40 flex items-end text-xl font-medium">
          order
        </div>

        {/* Center top card */}
        <div className="bg-[#FFC83D] text-black p-6">
          <h3 className="text-lg font-semibold mb-4">Debrief</h3>
          <p className="text-sm leading-relaxed">
            We begin with a questionnaire, which includes inquiries
            involving the client’s channel analysis as well as any
            deadlines, specific technical feedback, current challenges,
            and future objectives.
          </p>
        </div>

        {/* Right top card */}
        <div className="bg-[#FFC83D] text-black p-6">
          <h3 className="text-lg font-semibold mb-4">Ideation</h3>
          <p className="text-sm leading-relaxed">
            After research, I start ideating concepts on digital paper.
            Using Photoshop, I sketch and refine ideas that best align
            with the objectives.
          </p>
        </div>

        {/* Center bottom card */}
        <div className="bg-[#FFC83D] text-black p-6 lg:col-start-2">
          <h3 className="text-lg font-semibold mb-4">Research</h3>
          <p className="text-sm leading-relaxed">
            Taking all the information gathered, I analyze competitors,
            trends, and audience behavior to ensure the design direction
            is effective and relevant.
          </p>
        </div>

        {/* Left bottom card */}
        <div className="bg-[#FFC83D] text-black p-6 lg:col-start-1">
          <h3 className="text-lg font-semibold mb-4">Design</h3>
          <p className="text-sm leading-relaxed">
            Once the client is satisfied with the concept, I finalize
            the design with proper typography, contrast, and visual
            hierarchy.
          </p>
        </div>

      </div>
    </section>
  );
}
