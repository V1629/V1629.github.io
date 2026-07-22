
export default function Education() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 border-t-[4px] border-black bg-neo-bg" id="education">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
        <span className="text-neo-blue font-bold tracking-widest uppercase block mb-2 text-sm md:text-base">
          Academic Background
        </span>
        <h2 className="text-5xl md:text-7xl font-heading uppercase">
          Formation
        </h2>
        <div className="w-32 h-[4px] bg-black mt-6"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Education Card 1 */}
        <div className="bg-white neo-border px-8 py-6 flex flex-col md:flex-row md:items-center gap-6 neo-shadow-hover">
          <div className="font-heading text-xl md:text-2xl whitespace-nowrap">
            2023 &mdash;<br className="hidden md:block" />27
          </div>
          
          <div className="w-1 h-12 bg-black hidden md:block shrink-0"></div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-heading uppercase mb-2">KIET Group of Institutions</h3>
            <div className="flex items-center gap-3">
              <div className="w-1 h-5 bg-neo-red shrink-0"></div>
              <p className="font-bold text-lg">B.Tech in Information Technology</p>
            </div>
            <div className="mt-4 inline-block bg-[#EAE8DD] neo-border px-3 py-1 font-bold text-sm">
              Current CGPA: 7.75
            </div>
          </div>
        </div>

        {/* Education Card 2 */}
        <div className="bg-white neo-border px-8 py-6 flex flex-col md:flex-row md:items-center gap-6 neo-shadow-hover">
          <div className="font-heading text-xl md:text-2xl whitespace-nowrap">
            2021 &mdash;<br className="hidden md:block" />22
          </div>
          
          <div className="w-1 h-12 bg-black hidden md:block shrink-0"></div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-heading uppercase mb-2">St. Joseph's School</h3>
            <div className="flex items-center gap-3">
              <div className="w-1 h-5 bg-neo-blue shrink-0"></div>
              <p className="font-bold text-lg">Secondary & Higher Secondary Education</p>
            </div>
            <div className="mt-4 inline-block bg-[#EAE8DD] neo-border px-3 py-1 font-bold text-sm">
              Percentage: 82%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
