const About = () => (
  <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-px bg-[#C9A96E]" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E]">Notre histoire</span>
      </div>
      <h2 className="font-serif text-5xl md:text-6xl font-light mb-8">
        Qui sommes-<br /><span className="italic text-[#C9A96E]">nous ?</span>
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
        Depuis 14 ans, BATICHABLAIS est un leader reconnu dans le domaine de la construction et la rénovation de maisons de haut standing en Haute-Savoie.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-12">
        {[["14", "ans"], ["200+", "projets"], ["100%", "satisfaction"]].map(([n, l], i) => (
          <div key={i} className="border-t border-white/10 pt-6">
            <div className="text-3xl font-serif text-[#C9A96E]">{n}</div>
            <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-2">{l}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="relative">
      <div className="aspect-[4/5] bg-zinc-900 border border-white/5 flex items-center justify-center italic text-gray-600">
        Image de Prestige
      </div>
      <div className="absolute -bottom-6 -left-6 bg-[#C9A96E] p-8 text-black shadow-2xl">
        <div className="text-4xl font-bold">14</div>
        <div className="text-[9px] tracking-tighter uppercase font-bold">Années d'Excellence</div>
      </div>
    </div>
  </section>
);

export default About;