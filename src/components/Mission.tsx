
export default function Mission() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 border-t-[4px] border-black bg-white" id="mission">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-neo-yellow rounded-full border-2 border-black"></div>
          <span className="font-bold tracking-widest uppercase border-b-2 border-black pb-1">Mission</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-16 max-w-4xl leading-tight">
          BRIDGING THE GAP BETWEEN HUMAN EMOTION AND MACHINE INTELLIGENCE.
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Current Role Card */}
          <div className="neo-card flex flex-col items-start bg-neo-bg">
            <div className="bg-neo-red text-white font-bold px-3 py-1 neo-border uppercase text-sm mb-6">
              Current Role
            </div>
            <p className="text-lg font-medium leading-relaxed">
              Engineering intelligent systems and computer vision solutions at ConstemsAI, driving advanced machine learning workflows to solve complex real-world challenges.
            </p>
          </div>

          {/* Experience Card */}
          <div className="neo-card flex flex-col items-start bg-neo-bg">
            <div className="bg-neo-blue text-white font-bold px-3 py-1 neo-border uppercase text-sm mb-6">
              Experience
            </div>
            <p className="text-lg font-medium leading-relaxed">
              Hands-on expertise in orchestrating LLM APIs, designing scalable Vector Databases, and architecting robust RAG pipelines for domain-specific knowledge retrieval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
