import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImaginerPage = () => {
  return (
    <div className="bg-[#0A0A08] min-h-screen text-white overflow-hidden selection:bg-[#C9A96E]">
      
      {/* 1. LAYERED HERO: THE VOID TO VISION */}
      <section className="relative h-screen flex items-center justify-center px-6">
        {/* Massive Background Text */}
        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.03, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute font-serif text-[20vw] whitespace-nowrap pointer-events-none select-none"
        >
          GENÈSE GENÈSE
        </motion.h2>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-12 h-px bg-[#C9A96E]" />
            <span className="text-[10px] tracking-[0.8em] uppercase text-[#C9A96E]">Phase Alpha</span>
            <span className="w-12 h-px bg-[#C9A96E]" />
          </motion.div>

          <h1 className="font-serif text-7xl md:text-[140px] leading-none mb-12">
            L'esprit <br />
            <span className="italic text-[#C9A96E]">créatif.</span>
          </h1>

          <div className="flex justify-center">
             <div className="w-px h-24 bg-gradient-to-b from-[#C9A96E] to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. THE "BLUEPRINT REVEAL" SECTION (Very Creative) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: The Interactive Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-crosshair"
          >
            {/* The "Sketch" Image (Base) */}
            <img 
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070" 
              className="w-full h-[600px] object-cover grayscale opacity-50 border border-white/10"
              alt="Blueprint"
            />
            {/* The "Reality" Image (Revealed on Hover) */}
            <div className="absolute inset-0 overflow-hidden transition-all duration-700 w-0 group-hover:w-full border-r-2 border-[#C9A96E]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" 
                className="w-full h-[600px] object-cover grayscale-0 max-w-none"
                style={{ width: '100%' }}
                alt="Finished Project"
              />
            </div>
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 text-[10px] tracking-widest uppercase border border-white/10">
              Survolez pour bâtir
            </div>
          </motion.div>

          {/* Right: The Text */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              De l'esquisse <br />
              <span className="italic text-[#C9A96E]">au réel.</span>
            </h2>
            <p className="text-gray-400 font-light leading-loose text-lg">
              Imaginer n'est pas seulement dessiner des murs. C'est anticiper la course du soleil dans votre salon, le craquement du bois noble, et la fluidité de vos matins. 
            </p>
            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-white/5">
                <div>
                    <h4 className="text-[#C9A96E] font-serif text-xl mb-2">01. Immersion</h4>
                    <p className="text-xs text-gray-500 tracking-wider leading-relaxed">Lecture sensorielle du terrain et de son environnement.</p>
                </div>
                <div>
                    <h4 className="text-[#C9A96E] font-serif text-xl mb-2">02. Symbiose</h4>
                    <p className="text-xs text-gray-500 tracking-wider leading-relaxed">Fusion entre vos besoins privés et l'audace architecturale.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE "MOODBOARD" MASONRY (Asymmetric Gallery) */}
      <section className="py-32 bg-[#0c0c0a]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex justify-between items-end mb-20">
              <h2 className="font-serif text-5xl italic">Matières à <span className="not-italic text-[#C9A96E]">Rêver</span></h2>
              <span className="text-gray-600 text-[10px] tracking-[0.4em] uppercase hidden md:block">Inspirations — 2024</span>
           </div>

           <div className="grid grid-cols-12 gap-6 h-[800px]">
              <div className="col-span-8 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="col-span-4 flex flex-col gap-6">
                <div className="h-1/2 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="h-1/2 bg-[#C9A96E] p-10 flex flex-col justify-end">
                    <p className="text-black font-serif text-2xl leading-snug">"L'architecture est le jeu savant, correct et magnifique des volumes sous la lumière."</p>
                    <span className="text-black/50 text-[10px] mt-6 font-bold uppercase">— Le Corbusier</span>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION: TRANSITION */}
      <section className="h-screen flex items-center justify-center relative">
         <div className="text-center z-10">
            <h2 className="font-serif text-6xl md:text-9xl mb-12 opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default">
                Concevoir <span className="text-[#C9A96E]">→</span>
            </h2>
            <Link 
              to="/services#concevoir"
              className="text-[10px] tracking-[0.5em] uppercase border-b border-[#C9A96E] pb-2 text-[#C9A96E] hover:text-white hover:border-white transition-all"
            >
              Suivre le processus
            </Link>
         </div>
         {/* Decorative Geometric Shape */}
         <div className="absolute w-[500px] h-[500px] border border-white/5 rotate-45 -z-0 pointer-events-none" />
      </section>
    </div>
  );
};

export default ImaginerPage;