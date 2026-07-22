
export default function Experience() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 border-t-[4px] border-black bg-neo-bg" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-neo-red font-bold tracking-widest uppercase block mb-2 text-sm md:text-base">01 / Experience</span>
          <h2 className="text-5xl md:text-6xl font-heading uppercase leading-none">Professional Path</h2>
        </div>

        {/* Experience Card */}
        <div className="neo-card relative bg-white overflow-hidden mt-8">
          {/* Yellow Tag Ribbon */}
          <div className="absolute top-0 right-0 bg-neo-yellow neo-border px-6 py-2 border-r-0 border-t-0 font-bold uppercase z-10">
            HOOC AI Technologies
          </div>

          <div className="pt-12 md:pt-8 pr-4">
            <h3 className="text-3xl font-heading uppercase mb-4">AI Intern</h3>
            
            {/* Date and Project Button */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="bg-neo-bg neo-border px-4 py-1.5 font-bold text-sm uppercase">
                Feb 2026 &mdash; May 2026
              </div>
              <a href="https://github.com/V1629/State_Identification_Module" target="_blank" rel="noopener noreferrer" className="bg-white text-black neo-border px-4 py-1.5 font-bold text-sm uppercase neo-shadow-hover hover:bg-neo-blue hover:text-white transition-colors">
                State Identification Module &rarr;
              </a>
            </div>

            {/* Achievements List */}
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-neo-red mt-2 shrink-0 border-[2px] border-black"></div>
                <p className="text-lg font-medium leading-relaxed">
                  Developed and integrated an Emotional State Analysis Module to enhance human-computer interaction, enabling adaptive system responses based on user sentiment.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-neo-red mt-2 shrink-0 border-[2px] border-black"></div>
                <p className="text-lg font-medium leading-relaxed">
                  Built a multilingual temporal extraction engine capable of processing unstructured text data into structured chronological timelines.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
