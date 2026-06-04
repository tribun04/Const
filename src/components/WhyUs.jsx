import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react"; // npm install lucide-react

const reasons = [
  {
    num: "01",
    title: "Héritage & Expérience",
    desc: "Plus de 14 ans à façonner le paysage de la Haute-Savoie pour une clientèle internationale.",
  },
  {
    num: "02",
    title: "Artisanat de Précision",
    desc: "Nous ne construisons pas, nous sculptons. Chaque joint, chaque texture est une signature.",
  },
  {
    num: "03",
    title: "Interlocuteur Unique",
    desc: "Un accompagnement haute couture. Votre vision est portée par un seul maître d'œuvre.",
  },
  {
    num: "04",
    title: "Engagement Durable",
    desc: "L'élégance qui respecte l'environnement. Matériaux nobles et performances énergétiques.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative bg-[#0A0A08] py-32 px-6 overflow-hidden">
      
      {/* Background Decorative Element - Vertical Line */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER: ASYMMETRIC --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
              <span className="text-[10px] tracking-[0.6em] uppercase text-[#C9A96E] font-bold">
                Philosophie
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-8xl text-white leading-none">
              L'Exigence <br />
              <span className="italic text-[#C9A96E] ml-12 md:ml-24">sans compromis.</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-gray-500 text-sm md:text-base max-w-xs font-light leading-relaxed border-l border-[#C9A96E]/30 pl-6">
              Nous croyons que le luxe réside dans ce qui ne se voit pas au premier coup d'œil : la perfection invisible.
            </p>
          </div>
        </div>

        {/* --- REASONS: STAGGERED LIST --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20 lg:gap-y-40">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className={`group relative ${i % 2 !== 0 ? 'lg:mt-32' : ''}`} // Stagger effect
            >
              <div className="relative z-10">
                <span className="font-serif text-7xl md:text-9xl text-white/5 absolute -top-12 -left-6 group-hover:text-[#C9A96E]/10 transition-colors duration-700">
                  {reason.num}
                </span>
                <div className="pl-6 border-l border-white/5 group-hover:border-[#C9A96E]/50 transition-all duration-700">
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-[#B8B8B0] text-sm md:text-lg font-light leading-loose max-w-md">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- THE "POWER" CTA SECTION --- */}
        <div className="mt-40 relative group">
          <div className="absolute inset-0 bg-[#C9A96E] transform skew-y-[-1deg] group-hover:skew-y-0 transition-transform duration-700" />
          
          <div className="relative py-20 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
            {/* Watermark text inside CTA */}
            <div className="absolute top-0 right-0 font-serif font-black text-black/5 text-[150px] select-none pointer-events-none translate-x-20 -translate-y-10 uppercase">
              
            </div>

            <div className="text-center lg:text-left z-10">
              <h3 className="font-serif text-4xl md:text-6xl text-[#0A0A08] leading-tight mb-4">
                Prêt à dessiner <br />
                votre <span className="italic font-bold">futur ?</span>
              </h3>
              <p className="text-black/60 text-sm tracking-widest uppercase font-bold">
                Consultation privée & Étude de faisabilité
              </p>
            </div>

            <Link 
              to="/contact"
              className="z-10 group/btn relative bg-[#0A0A08] text-white px-12 py-6 text-[11px] font-bold tracking-[0.4em] uppercase overflow-hidden transition-all flex items-center gap-4"
            >
              <span className="relative z-10 flex items-center gap-3">
                Commencer le voyage <MoveRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 z-0 bg-white opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
              {/* Text color swap on hover via absolute layer */}
              <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 font-bold tracking-[0.4em]">
                Contactez-nous
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Aesthetic Floating Line at the bottom */}
      <div className="absolute bottom-0 right-20 w-px h-32 bg-gradient-to-t from-[#C9A96E] to-transparent hidden lg:block" />
    </section>
  );
};

export default WhyUs;