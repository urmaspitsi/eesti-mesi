import ScrollReveal from "./ScrollReveal";

const references = [
  {
    title: "Mesilane — Wikipedia (eesti keeles)",
    url: "https://et.wikipedia.org/wiki/Mesilane",
    desc: "Ülevaade mesilase bioloogiast, käitumisest ja ökoloogilisest rollist."
  },
  {
    title: "Mesi — Wikipedia (eesti keeles)",
    url: "https://et.wikipedia.org/wiki/Mesi",
    desc: "Mee koostis, omadused, tootmine ja kasutamine."
  },
  {
    title: "Mesilasema — Wikipedia (eesti keeles)",
    url: "https://et.wikipedia.org/wiki/Mesilasema",
    desc: "Mesilasema roll peres, areng ja paaritumislend."
  },
  {
    title: "Western honey bee — Wikipedia (inglise keeles)",
    url: "https://en.wikipedia.org/wiki/Western_honey_bee",
    desc: "Põhjalik artikkel lääne meemesilase (Apis mellifera) bioloogia ja alamliikide kohta."
  },
  {
    title: "Apis mellifera mellifera — Wikipedia",
    url: "https://en.wikipedia.org/wiki/Apis_mellifera_mellifera",
    desc: "Euroopa tume mesilane — Eestis ajalooliselt levinud alamliik."
  },
  {
    title: "Carniolan honey bee — Wikipedia",
    url: "https://en.wikipedia.org/wiki/Carniolan_honey_bee",
    desc: "Kraini mesilase omadused, päritolu ja leviku informatsioon."
  },
  {
    title: "Waggle dance — Wikipedia",
    url: "https://en.wikipedia.org/wiki/Waggle_dance",
    desc: "Mesilaste sabatants kui kommunikatsioonivorm — Karl von Frisch'i avastus."
  },
  {
    title: "Buckfast bee — Wikipedia",
    url: "https://en.wikipedia.org/wiki/Buckfast_bee",
    desc: "Buckfasti hübriidtõu ajalugu ja omadused."
  },
  {
    title: "Eesti Mesinike Liit",
    url: "https://www.mesinikeliit.ee/",
    desc: "Eesti mesinduse katusorganisatsioon — koolitused, nõuanded ja seadusandlus."
  },
  {
    title: "Maheda — Eesti mesinduse ajakiri",
    url: "https://www.mesinikeliit.ee/maheda",
    desc: "Eesti ainus mesindusele pühendatud perioodiline väljaanne."
  }
];

const ReferencesSection = () => {
  return (
    <section id="viited" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Allikad</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-2xl">
            Viited ja lisalugemist
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-12">
            Allpool on toodud peamised allikad, millele see lehekülg tugineb, 
            ning kasulikud viited edasiseks süvenemiseks mesinduse teemadesse.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {references.map((ref, i) => (
            <ScrollReveal key={ref.url} animation="fade-up" delay={i * 60}>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card rounded-lg p-5 border border-border/50 hover:border-honey/40 hover:shadow-md transition-all duration-200 h-full group"
              >
                <h3 className="text-base font-serif font-semibold text-foreground group-hover:text-honey transition-colors duration-200 mb-1">
                  {ref.title} <span className="text-honey">↗</span>
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{ref.desc}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
