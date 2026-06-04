import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Imaginer", path: "/services#imaginer" },
    { name: "Concevoir", path: "/services#concevoir" },
    { name: "Réaliser", path: "/projectsPages" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-6 
      ${scrolled ? "bg-[#0A0A08]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-[0.2em] text-white">
          Toska<span className="text-[#C9A96E]"></span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#a8a29e] hover:text-[#C9A96E] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Link 
            to="/contact"
            className="ml-4 border border-[#C9A96E]/40 px-6 py-2 text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black transition-all duration-300"
          >
            Devis
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;