import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0A0A08] text-[#F2EDE6] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="w-10 h-px bg-[#C9A96E]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E]">Contact</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-light mb-8">
            Parlons de votre <br />
            <span className="italic text-[#C9A96E]">projet d'exception</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg font-light leading-relaxed">
            Que ce soit pour une construction neuve ou une rénovation de prestige en Haute-Savoie, 
            notre équipe est à votre écoute pour transformer vos rêves en architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* --- LEFT SIDE: INFO --- */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-8">Coordonnées</h3>
              <div className="space-y-8 font-serif text-3xl font-light">
                <div className="group cursor-pointer">
                  <p className="text-gray-500 text-xs tracking-widest uppercase mb-2 font-sans">Téléphone</p>
                  <a href="tel:+33450000000" className="hover:text-[#C9A96E] transition-colors">+33 (0)4 50 00 00 00</a>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-gray-500 text-xs tracking-widest uppercase mb-2 font-sans">Email</p>
                  <a href="mailto:contact@.com" className="hover:text-[#C9A96E] transition-colors">contact@.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-8">Notre Bureau</h3>
              <p className="font-serif text-3xl font-light leading-snug">
                124 Avenue du Léman<br />
                74200 Thonon-les-Bains<br />
                Haute-Savoie, France
              </p>
            </div>

            <div className="flex gap-8 items-center pt-8 border-t border-white/10">
               {["Instagram", "Facebook", "LinkedIn"].map(social => (
                 <a key={social} href="#" className="text-[10px] tracking-[0.2em] uppercase font-bold hover:text-[#C9A96E] transition-colors">
                   {social}
                 </a>
               ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="bg-[#1A1A18] p-8 md:p-12 border border-white/5 shadow-2xl relative">
             <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase text-gray-500">Nom complet</label>
                    <input type="text" className="bg-transparent border-b border-white/10 py-3 focus:border-[#C9A96E] outline-none transition-all font-light" placeholder="Jean Dupont" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-widest uppercase text-gray-500">Email</label>
                    <input type="email" className="bg-transparent border-b border-white/10 py-3 focus:border-[#C9A96E] outline-none transition-all font-light" placeholder="jean@exemple.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-widest uppercase text-gray-500">Type de projet</label>
                  <select className="bg-transparent border-b border-white/10 py-3 focus:border-[#C9A96E] outline-none transition-all font-light appearance-none">
                    <option className="bg-[#1A1A18]">Construction Neuve</option>
                    <option className="bg-[#1A1A18]">Rénovation Haute-Savoie</option>
                    <option className="bg-[#1A1A18]">Aménagement Intérieur</option>
                    <option className="bg-[#1A1A18]">Autre</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-widest uppercase text-gray-500">Votre message</label>
                  <textarea rows="4" className="bg-transparent border-b border-white/10 py-3 focus:border-[#C9A96E] outline-none transition-all font-light resize-none" placeholder="Décrivez votre projet..."></textarea>
                </div>

                <button className="w-full bg-[#C9A96E] text-black py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all mt-4">
                  Envoyer ma demande
                </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;