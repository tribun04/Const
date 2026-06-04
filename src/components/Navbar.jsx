import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const menuItems = [
    { name: "Accueil", path: "/", id: "01" },
    { name: "Imaginer", path: "/imaginer", id: "02" },
    { name: "Concevoir", path: "/services#concevoir", id: "03" },
    { name: "Réaliser", path: "/projects", id: "04" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[120] transition-all duration-700 
        ${scrolled ? "py-4 bg-[#0A0A08]/90 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"}`}>
        
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* LOGO: Clean & Spaced */}
          <Link to="/" className="group flex items-center gap-2 z-[130]">
            <span className="text-2xl font-serif font-bold tracking-[0.4em] text-white">
              TOSKA
            </span>
            <span className="w-2 h-2 bg-[#C9A96E] rounded-full group-hover:scale-150 transition-transform duration-500" />
          </Link>

          {/* DESKTOP NAV: Minimalist */}
          <div className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="relative text-[10px] tracking-[0.5em] uppercase font-bold text-[#a8a29e] hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#C9A96E] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
            
            <Link 
              to="/contact"
              className="group relative overflow-hidden ml-6 border border-white/10 px-8 py-3 text-[10px] tracking-[0.4em] uppercase text-white hover:border-[#C9A96E] transition-colors"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Devis</span>
              <div className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>

          {/* CUSTOM HAMBURGER: Two staggered lines */}
          <button 
            className="lg:hidden flex flex-col gap-2 z-[130] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`h-px bg-white transition-all duration-500 ${isOpen ? "w-8 rotate-45 translate-y-[5px]" : "w-8"}`} />
            <div className={`h-px bg-white transition-all duration-500 ${isOpen ? "w-8 -rotate-45 -translate-y-[5px]" : "w-5 ml-auto"}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY: Cinematic Reveal */}
      <div className={`fixed inset-0 z-[110] bg-[#0A0A08] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)]
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        
        {/* Background Ghost Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[30vw] font-serif font-bold text-white/[0.02] select-none">
            CREATIO
          </span>
        </div>

        <div className="h-full flex flex-col lg:flex-row">
          {/* Left Side: Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-24 gap-6">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-6 transition-all duration-700 
                  ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <span className="text-[#C9A96E] font-serif text-lg md:text-2xl italic opacity-40 group-hover:opacity-100 transition-opacity">
                  {item.id}
                </span>
                <span className="text-4xl md:text-7xl font-serif text-white group-hover:italic group-hover:text-[#C9A96E] transition-all">
                  {item.name}
                </span>
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-[#C9A96E] opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Right Side: Contact Details (Desktop view only or bottom on mobile) */}
          <div className={`lg:w-1/3 border-t lg:border-t-0 lg:border-l border-white/5 p-8 md:p-24 flex flex-col justify-end transition-all duration-1000 delay-500
            ${isOpen ? "opacity-100" : "opacity-0"}`}>
            <div className="space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] block mb-4">Bureau</span>
                <p className="text-gray-400 font-light leading-relaxed">
                  124 Avenue du Lac<br />74200 Thonon-les-Bains
                </p>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] block mb-4">Contact</span>
                <p className="text-gray-400 font-light">hello@toska-archi.com</p>
                <p className="text-gray-400 font-light">+33 (0)4 50 12 34 56</p>
              </div>
              <div className="flex gap-6 pt-4">
                {["Instagram", "LinkedIn"].map(social => (
                  <span key={social} className="text-[10px] tracking-[0.3em] uppercase text-white hover:text-[#C9A96E] cursor-pointer transition-colors">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
