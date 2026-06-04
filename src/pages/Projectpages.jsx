import React, { useEffect } from "react";
import { MoveRight } from "lucide-react";

const projects = [
  {
    title: "Villa Leman",
    location: "Évian-les-Bains",
    category: "Construction Neuve",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    size: "wide"
  },
  {
    title: "Chalet Horizon",
    location: "Morzine",
    category: "Rénovation",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000",
    size: "tall"
  },
  {
    title: "Résidence Quartz",
    location: "Thonon",
    category: "Aménagement",
    image: "https://images.unsplash.com/photo-1600607687940-4e2a09615d3b?q=80&w=2070",
    size: "normal"
  },
  {
    title: "Le Belvédère",
    location: "Messery",
    category: "Construction Neuve",
    image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070",
    size: "normal"
  }
];

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0A0A08] min-h-screen text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
          <span className="text-[#C9A96E] text-[10px] tracking-[0.6em] uppercase font-bold block mb-4">Portfolio</span>
          <h1 className="font-serif text-6xl md:text-8xl leading-none">
            Nos <br /> <span className="italic text-[#C9A96E]">Réalisations</span>
          </h1>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className={`group relative overflow-hidden bg-[#161614] transition-all duration-700 
                ${project.size === 'wide' ? 'lg:col-span-8' : 
                  project.size === 'tall' ? 'lg:col-span-4 lg:row-span-2' : 
                  'lg:col-span-4'}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Content on Hover */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[#C9A96E] text-[10px] tracking-widest uppercase mb-2 block">{project.category}</span>
                      <h3 className="text-3xl font-serif mb-1">{project.title}</h3>
                      <p className="text-white/60 text-sm italic">{project.location}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      <MoveRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-32 text-center">
          <p className="text-gray-500 mb-8 font-light">Chaque projet est une pièce unique conçue avec passion.</p>
          <div className="h-px w-24 bg-[#C9A96E] mx-auto opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;