import ScrollReveal from "./ScrollReveal";

const honeyTypes = [
  {
    name: "Lillemesi",
    desc: "Kõige levinum meeliik Eestis. Segamesi erinevatelt lilletaimedelt — ristik, viirpuu, mets-õunapuu, lutsern jt. Maitse on ühtlane, kesk-magus, helepruuni kuni kuldse värvusega. Kristalliseerub ühtlaselt.",
    color: "bg-honey-light",
    season: "Juuni – august"
  },
  {
    name: "Pärnamesi",
    desc: "Eestis väga hinnatud monofloorset tüüpi mesi. Pärnapuude (Tilia) õitsemise periood on lühike (2–3 nädalat juulis). Iseloomulik mentooljas-ravimitaoline lõhn ja maitse, heledaskollane värvus. Traditsiooniline rahvameditsiinis kasutamine külmetushaiguste vastu.",
    color: "bg-secondary",
    season: "Juuli"
  },
  {
    name: "Rapsi- ja ristikumesi",
    desc: "Rapsimesi kristalliseerub väga kiiresti (1–2 nädalat) ja muutub valgeks-kreemjaks. Maitse on pehme ja magus. Ristikumesi on samuti hele ja kristalliseerub kiirest. Mõlemad on populaarsed kreemitatud mee valmistamiseks.",
    color: "bg-honey-light",
    season: "Mai – juuli"
  },
  {
    name: "Tatramesi",
    desc: "Tumepruun, intensiivse lõhna ja maitsega mesi. Tatramesi sisaldab rohkem antioksüdante ja mineraale kui heledamad meeliigid. Eestis kasvatatakse tatra peamiselt Põhja- ja Kirde-Eestis. Haruldasem ja kõrgemalt hinnatud.",
    color: "bg-secondary",
    season: "August – september"
  },
  {
    name: "Metsamesi (kastemesi)",
    desc: "Ei pärine lillenektarist, vaid lehetäide ja kilptäide eritistest (mesikastest). Tumepruun, tugeva ja keeruka maitsega, sisaldab palju mineraale. Kristalliseerub aeglaselt. Eestis esineb aeg-ajalt okaspuumetsade piirkonnas.",
    color: "bg-honey-light",
    season: "Juuli – september"
  },
  {
    name: "Kanarbikumesi",
    desc: "Väga eriline želeetaoline konsistents (tiksotroopne — segunedes muutub vedelaks). Tumekollane kuni pruun, tugeva aromaatse maitsega. Eestis haruldane, peamiselt Lääne-Eesti nõmmedelt ja rabadest. Kõrgelt hinnatud kogu Euroopas.",
    color: "bg-secondary",
    season: "August – september"
  }
];

const HoneyTypesSection = () => {
  return (
    <section id="meeliigid" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Meeliigid</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Eesti meeliigid ja nende eripärad
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-16">
            Mee maitse, värv ja koostis sõltuvad korjetaimedest. Eesti kliima ja taimestik võimaldavad toota mitmekesiseid ja kõrgekvaliteedilisi meeliike.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honeyTypes.map((honey, i) => (
            <ScrollReveal key={honey.name} animation="fade-up" delay={i * 80}>
              <div className={`${honey.color} rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-200`}>
                <span className="text-honey font-sans text-xs font-semibold tracking-widest uppercase">{honey.season}</span>
                <h3 className="text-xl font-serif font-semibold text-foreground mt-2 mb-3">{honey.name}</h3>
                <p className="text-muted-foreground font-sans text-[15px] leading-relaxed">{honey.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoneyTypesSection;
