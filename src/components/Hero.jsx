import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import your video from the assets folder
// import backgroundVideo from "../assets/img/hero-video.mp4"; 

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#0A0A08] overflow-hidden flex items-center">
      
      {/* 1. Background Video Layer */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out scale-110"
        style={{ 
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60" // Adjusted opacity for better text contrast
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A08] via-[#0A0A08]/40 to-transparent" />
      </div>

      {/* 2. Floating Aesthetic Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 z-10 hidden md:block" />
      <div className="absolute bottom-20 left-12 z-20 hidden md:block">
        <div className="flex flex-col gap-6 text-[#C9A96E]/50 text-[10px] tracking-[0.4em] uppercase [writing-mode:vertical-lr]">
          <span className="hover:text-[#C9A96E] cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-[#C9A96E] cursor-pointer transition-colors">Facebook</span>
          <span className="hover:text-[#C9A96E] cursor-pointer transition-colors">LinkedIn</span>
        </div>
      </div>

      {/* 3. Main Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6 overflow-hidden">
            <div className="w-12 h-[1px] bg-[#C9A96E] animate-slide-right" />
            <span className="text-[#C9A96E] text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold">
              Bâtir l'exceptionnel — Haute-Savoie
            </span>
          </div>

          <h1 className="text-white font-serif text-6xl md:text-[120px] leading-[0.9] flex flex-col">
            <span className="block overflow-hidden">
              <span className="block animate-reveal">Imaginer.</span>
            </span>
            <span className="block overflow-hidden ml-12 md:ml-24">
              <span className="block italic text-[#C9A96E] animate-reveal [animation-delay:0.2s]">Concevoir.</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-reveal [animation-delay:0.4s]">Réaliser.</span>
            </span>
          </h1>

          <div className="mt-12 md:ml-24 flex flex-col md:flex-row md:items-end gap-10">
            <p className="text-gray-300 max-w-xs text-sm leading-relaxed tracking-wide font-light">
              L'art de la construction haute couture. Nous transformons vos visions en résidences de prestige durables.
            </p>
            
            <div className="flex gap-6">
              <Link 
                to="/services" 
                className="group relative overflow-hidden bg-[#C9A96E] px-10 py-5 text-black text-[11px] font-bold tracking-[0.3em] uppercase transition-all"
              >
                <span className="relative z-10">Projets</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/contact" 
                className="group border border-white/20 px-10 py-5 text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:border-[#C9A96E] transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="text-white/30 text-[9px] tracking-[0.5em] uppercase animate-pulse">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A96E] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;