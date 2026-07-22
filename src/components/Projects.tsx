
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Buddy AI',
      desc: 'Built a domain specific AI chatbot for KIET capable of answering 50+ student queries using Retrieval-Augmented Generation. Implemented embedding based semantic retrieval over university policy.',
      tags: ['Python', 'RAG', 'LangChain'],
      link: 'https://kietbuddy-tech.streamlit.app/',
      twoCol: false,
    },
    {
      id: 2,
      title: 'FWI Predictor',
      desc: 'Developed a supervised Machine Learning system (Random Forest, Logistic Regression) achieving 87 percent accuracy in predicting fire risk. Processed 50,000+ environmental records.',
      tags: ['Scikit-Learn', 'NumPy'],
      link: 'https://fwi-prediction-6a3c.onrender.com/',
      twoCol: false,
    },
    {
      id: 3,
      title: 'QuintAI',
      desc: 'Developed a multi-model QA pipeline integrating RAG + external tools + LLM orchestration. Achieved 95 percent response accuracy as validated by human evaluators, reducing retrieval latency by 40 percent.',
      desc2: 'Implemented LangChain and LangGraph to design agentic AI workflows, enabling seamless tool coordination and adaptive reasoning.',
      tags: ['LangChain', 'ChromaDB', 'LLMs'],
      link: 'https://quintai-frontend.onrender.com/',
      twoCol: true,
    }
  ];

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 border-t-[4px] border-black bg-neo-bg" id="projects">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-neo-blue font-bold tracking-widest uppercase block mb-2 text-sm md:text-base">02 / Projects</span>
          <h2 className="text-5xl md:text-7xl font-heading uppercase leading-[0.9] max-w-lg">Engineered<br/>Solutions</h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="neo-card bg-white relative pt-8 pb-8 px-6 md:px-10">
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-white neo-border flex items-center justify-center font-heading text-xl">
                {project.id}
              </div>

              <h3 className="text-3xl font-heading uppercase mb-6 pr-16">{project.title}</h3>
              
              {project.twoCol ? (
                <div className="grid md:grid-cols-2 gap-8 mb-8 border-b-[3px] border-black pb-8">
                  <p className="text-lg font-medium leading-relaxed">{project.desc}</p>
                  <p className="text-lg font-medium leading-relaxed">{project.desc2}</p>
                </div>
              ) : (
                <div className="mb-8 border-b-[3px] border-black pb-8">
                  <p className="text-lg font-medium leading-relaxed max-w-2xl">{project.desc}</p>
                </div>
              )}

              {/* Tags and Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-6">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="neo-tag bg-[#EAE8DD]">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-4 py-2 uppercase border-[3px] border-black neo-shadow-hover hover:bg-neo-blue inline-block text-center whitespace-nowrap">
                    Visit Project &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
