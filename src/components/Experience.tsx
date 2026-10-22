
export default function Experience() {
  const experiences = [
    {
      company: 'ConstemsAI',
      role: 'AI Intern',
      period: 'October 2026 — Ongoing',
      location: 'Sector-59, Noida',
      tagBg: 'bg-neo-yellow text-black',
      isCurrent: true,
      bullets: [
        'Developing and optimizing enterprise AI solutions and automated intelligence workflows.',
        'Working with computer vision and machine learning pipelines for high-precision real-world applications.'
      ]
    },
    {
      company: 'HOOC AI Technologies',
      role: 'AI Intern',
      period: 'Feb 2026 — May 2026',
      location: 'Remote',
      tagBg: 'bg-white text-black',
      isCurrent: false,
      link: 'https://github.com/V1629/State_Identification_Module',
      linkLabel: 'State Identification Module →',
      bullets: [
        'Developed an Emotional State Analysis Module processing 27 emotions across 3 temporal dimensions (Short-Term, Mid-Term, Long-Term) using EMA (Exponential Moving Average) for real-time mental health tracking.',
        'Built a multilingual temporal extraction engine with 40+ regex patterns supporting English, Hindi, and Hinglish, achieving 95% accuracy in parsing temporal references like "3 saal pehle" and "last week".'
      ]
    }
  ];

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 border-t-[4px] border-black bg-neo-bg" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-neo-red font-bold tracking-widest uppercase block mb-2 text-sm md:text-base">01 / Experience</span>
          <h2 className="text-5xl md:text-6xl font-heading uppercase leading-none">Professional Path</h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="neo-card relative bg-white overflow-hidden">
              {/* Tag Ribbon */}
              <div className={`absolute top-0 right-0 ${exp.tagBg} neo-border px-6 py-2 border-r-0 border-t-0 font-bold uppercase z-10 flex items-center gap-2 text-xs md:text-sm`}>
                {exp.isCurrent && (
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black animate-pulse"></span>
                )}
                {exp.company}
              </div>

              <div className="pt-12 md:pt-8 pr-4">
                <h3 className="text-3xl font-heading uppercase mb-4">{exp.role}</h3>
                
                {/* Meta details & Project Button */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="bg-neo-bg neo-border px-4 py-1.5 font-bold text-sm uppercase">
                    {exp.period}
                  </div>
                  <div className="bg-[#EAE8DD] neo-border px-4 py-1.5 font-bold text-sm uppercase text-black">
                    📍 {exp.location}
                  </div>
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-black neo-border px-4 py-1.5 font-bold text-sm uppercase neo-shadow-hover hover:bg-neo-blue hover:text-white transition-colors"
                    >
                      {exp.linkLabel}
                    </a>
                  )}
                </div>

                {/* Achievements List */}
                <ul className="space-y-5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-neo-red mt-2 shrink-0 border-[2px] border-black"></div>
                      <p className="text-lg font-medium leading-relaxed">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
