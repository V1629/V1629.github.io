
export default function TechStack() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 border-t-[4px] border-black bg-neo-bg" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="neo-card bg-neo-bg p-8 md:p-12">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6">Technical Stack</h2>
          <div className="border-l-[4px] border-black pl-4 mb-10">
            <p className="text-lg font-medium leading-relaxed">
              A comprehensive list of the tools and technologies I utilize to build scalable AI systems.
            </p>
          </div>

          {/* Achievement Banner */}
          <div className="bg-neo-yellow neo-border neo-shadow px-6 py-4 mb-10 -rotate-1 hover:rotate-0 transition-transform">
            <span className="text-xs font-bold uppercase tracking-wider block mb-1">Recent Achievement</span>
            <span className="text-xl md:text-2xl font-bold">Winner &mdash; Brainwave 2.0 (DTU)</span>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Languages */}
            <div className="bg-white neo-border p-6 neo-shadow-hover">
              <h3 className="font-bold text-lg uppercase border-b-[3px] border-black pb-2 mb-4">Languages</h3>
              <ul className="space-y-3 font-bold uppercase text-sm">
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* AI/ML */}
            <div className="bg-white neo-border p-6 neo-shadow-hover">
              <h3 className="font-bold text-lg uppercase border-b-[3px] border-black pb-2 mb-4">AI / ML</h3>
              <ul className="space-y-3 font-bold uppercase text-sm">
                <li>Machine Learning</li>
                <li>Generative AI</li>
                <li>RAG / VectorDB</li>
              </ul>
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="bg-white neo-border p-6 neo-shadow-hover">
            <h3 className="font-bold text-lg uppercase border-b-[3px] border-black pb-2 mb-6">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              <span className="neo-tag bg-[#EAE8DD]">LangChain</span>
              <span className="neo-tag bg-[#EAE8DD]">LangGraph</span>
              <span className="neo-tag bg-[#EAE8DD]">PyTorch</span>
              <span className="neo-tag bg-[#EAE8DD]">Scikit-Learn</span>
              <span className="neo-tag bg-[#EAE8DD]">FastAPI</span>
              <span className="neo-tag bg-[#EAE8DD]">ChromaDB</span>
              <span className="neo-tag bg-[#EAE8DD]">Git</span>
              <span className="neo-tag bg-[#EAE8DD]">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
