import ScrollReveal from "./ScrollReveal";
import apiary from "@/assets/apiary.jpg";

const beeRaces = [
  {
    name: "Euroopa tumedat mesilane (Apis mellifera mellifera)",
    aka: "Musta mesilane, Põhja mesilane",
    desc: "Eestis ajalooliselt kõige levinum mesilase alamliik. Tumedat värvi, suur ja vastupidav kehaehitusega. Hästi kohastunud Põhja-Euroopa kliimaga — talub pikki ja külmi talvi, on säästlik toiduvarude kasutamisel. Sülitab vähem kui teised tõud, kuid võib olla kaitsvam. Eestis on see tõug olnud kasutusel sajandeid ja on kohalikesse oludesse ideaalselt kohanenud.",
    wiki: "https://en.wikipedia.org/wiki/Apis_mellifera_mellifera",
    traits: ["Hea talvekindlus", "Säästlik", "Pikk keeleke", "Aeglane kevadine areng"]
  },
  {
    name: "Kraini mesilane (Apis mellifera carnica)",
    aka: "Krainka",
    desc: "Pärit Alpi piirkonnast (Sloveenia, Austria). Eestis üks populaarsemaid imporditud tõuge. Tuntud leebuse ja hea käitumise poolest — mesiniku jaoks mugav. Areneb kiiresti kevadel, mis on kasulik varajase korje korral. Sülitab vähe. Võib olla kalduvus sülemlemisele, mida tuleb jälgida. Hästi kohanduv erinevate korjetingimustega.",
    wiki: "https://en.wikipedia.org/wiki/Carniolan_honey_bee",
    traits: ["Leebe iseloom", "Kiire kevadine areng", "Sülemlemiskalduvus", "Hea orienteerumisvõime"]
  },
  {
    name: "Itaalia mesilane (Apis mellifera ligustica)",
    aka: "Ligustika",
    desc: "Maailma levinuim mesilaseliik, pärit Itaaliast. Eestis kasutatakse vähem kui krainkat, kuna talvekindlus on nõrgem. Tuntud kuldkollase värvuse ja produktiivsuse poolest. Väga leebe iseloomuga, mis muudab taru hooldamise lihtsaks. Suur haude pindala ja kõrge meeproduktiivsus soodsates tingimustes, kuid tarbib talvel rohkem varusid.",
    wiki: "https://en.wikipedia.org/wiki/Italian_bee",
    traits: ["Väga leebe", "Kõrge produktiivsus", "Nõrgem talvekindlus", "Kalduvus röövima"]
  },
  {
    name: "Buckfasti mesilane",
    aka: "Buckfast",
    desc: "Hübriidtõug, mille arendas välja vend Adam (Karl Kehrle) Buckfasti kloostris Inglismaal 20. sajandil. Tuntud hea tervise, leebe iseloomu ja vastupidavuse poolest varroalestale. Eestis kasvavalt populaarne. Siiski on hübriidtõug, mistõttu järglaste omadused võivad olla ettearvamatumad. Nõuab kontrollitud aretusprogrammi.",
    wiki: "https://en.wikipedia.org/wiki/Buckfast_bee",
    traits: ["Vastupidav haigustele", "Leebe", "Hea meeproduktiivsus", "Hübriidi varieeruvus"]
  }
];

const EstonianBeesSection = () => {
  return (
    <section id="eesti-mesilased" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Eesti mesilased</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Eestis levinud mesilaste tõud
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-8">
            Eestis kasutatakse mitmeid mesilase alamliike ja hübriide. Tõu valik sõltub mesila asukohast, korjetingimustest 
            ja mesiniku eelistustest. Eesti Mesinike Liit soovitab kohalikesse oludesse kohanenud tõugude kasutamist.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={100}>
          <img src={apiary} alt="Mesilatarud Eesti looduses" className="w-full rounded-xl shadow-lg shadow-foreground/5 mb-16 max-h-[420px] object-cover" />
        </ScrollReveal>

        <div className="space-y-8">
          {beeRaces.map((bee, i) => (
            <ScrollReveal key={bee.name} animation="fade-up" delay={i * 80}>
              <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border/50">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">{bee.name}</h3>
                    <p className="text-muted-foreground font-sans text-sm mt-0.5">Tuntud ka: {bee.aka}</p>
                  </div>
                  <a
                    href={bee.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-honey font-sans text-sm font-medium underline underline-offset-2 hover:text-amber-brand shrink-0"
                  >
                    Wikipedia ↗
                  </a>
                </div>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">{bee.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {bee.traits.map(trait => (
                    <span key={trait} className="bg-honey-light text-warm-brown font-sans text-xs font-medium px-3 py-1 rounded-full">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstonianBeesSection;
