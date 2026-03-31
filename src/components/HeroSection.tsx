import heroBee from "@/assets/hero-bee.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBee} alt="Mesilane lillel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto section-padding py-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Eesti mesinduse teejuht
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6">
            Mesilased, mesi ja mesinduse kunst
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 font-sans font-light leading-relaxed max-w-xl mb-8">
            Põhjalik ülevaade mesilaste elust, mee kogumisest ja Eestis levinud mesilaseliikidest — nii algajale kui kogenud mesinikule.
          </p>
          <a
            href="#mesilased"
            className="inline-flex items-center gap-2 bg-honey text-primary-foreground font-sans font-semibold px-6 py-3 rounded-lg hover:bg-amber-brand transition-colors duration-200 active:scale-[0.97]"
          >
            Avasta rohkem ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
