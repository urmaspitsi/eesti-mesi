import ScrollReveal from "./ScrollReveal";
import lamavtaru from "@/assets/lamavtaru.jpg";
import lamavtaruInside from "@/assets/lamavtaru-inside.jpg";

const features = [
  {
    title: "Horisontaalne ehitus",
    desc: "Lamavtaru on piklik, horisontaalne taru, kus kõik raamid asuvad ühes tasapinnas kõrvuti. Tüüpiliselt mahutab 20–24 raami (mõnikord kuni 32). Raamide suurus on enamasti 435 × 300 mm (nn Dadant-raam) või 435 × 230 mm. Taru pikkus on tavaliselt 80–120 cm, laius ~45 cm ja kõrgus ~55 cm."
  },
  {
    title: "Hingedega kaas pealt",
    desc: "Erinevalt korpustarudest (Langstroth, Dadant) avatakse lamavtaru pealt — kaas on hingedega kinnitatud ja tõstetakse üles. See tähendab, et mesinik ei pea raskeid korpuseid tõstma — suur eelis eakamatele ja füüsiliselt väiksematele mesinikele. Kaane all on soojustuskate (jute- või villariie)."
  },
  {
    title: "Tööpõhimõte",
    desc: "Pere areneb horisontaalselt: pesaosa (haudeala) paikneb ühes otsas, meeruumi raamid lisatakse kõrvale. Piiramislauaga (diafragma) saab pesaruumi suurust reguleerida vastavalt pere tugevusele. Kevadel antakse perele 8–12 raami, suvel laiendatakse 20+ raamile."
  },
  {
    title: "Talvitumine",
    desc: "Lamavtaru sobib Eesti kliimasse hästi — paksud puidust seinad (vähemalt 35–40 mm) annavad hea soojapidavuse. Talveks koondatakse pere ühe taru otsa, ülejäänud ruum täidetakse soojustusega. Lennuava asub taru esiküljel põhja lähedal ja seda saab reguleerida."
  },
  {
    title: "Eelised algajale",
    desc: "Lamavtaru on ideaalne algajale mesinikule: lihtne konstruktsioon, ei nõua raskuste tõstmist, raame on mugav üle vaadata ja pere arengut jälgida. Taru ehitamine on jõukohane ka käsitöölisele — materjaliks sobib 40 mm paksune lauapuit (mänd, kuusk). Kokku läheb vaja umbes 0,15 m³ saematerjali."
  },
  {
    title: "Puudused",
    desc: "Peamised puudused võrreldes korpustarudega: taru on raske (tühi kaalub 30–50 kg) ja kohapeal hoitav — rändmesinduseks ei sobi. Meeruumi maht on piiratum — tugeva korjeperioodi ajal võib raamidest puudu jääda. Samuti on lamavtarus keerulisem perede jagamist ja ühendamist teha."
  }
];

const LamavtaruSection = () => {
  return (
    <section id="lamavtaru" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Eesti mesinduse alustala</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Lamavtaru — traditsiooniline Eesti taru
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-16">
            Lamavtaru (ka pikktaru) on Eesti ja Põhja-Euroopa mesinduse traditsiooniline tarutüüp, 
            mida on kasutatud sajandeid. Tänapäevalgi on see Eesti hobimesinikele kõige populaarsem 
            taru — hinnanguliselt üle 60% Eesti mesilasperesid elab lamavtarudes.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <ScrollReveal animation="slide-left" delay={80}>
            <img
              src={lamavtaru}
              alt="Traditsiooniline eesti lamavtaru mesilas — puitne pikktaru avatud kaanea roherohelisel aial"
              className="w-full rounded-xl shadow-lg shadow-foreground/5 mb-6"
            />
            <p className="text-muted-foreground font-sans text-sm italic text-center">
              Klassikaline lamavtaru mesilas — kaas on hingedega avatav pealt
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={160}>
            <img
              src={lamavtaruInside}
              alt="Lamavtaru sisevaade — kärjeraamid mesilastega horisontaalses paigutuses"
              className="w-full rounded-xl shadow-lg shadow-foreground/5 mb-6"
            />
            <p className="text-muted-foreground font-sans text-sm italic text-center">
              Lamavtaru sisevaade — raamid paiknevad kõrvuti ühes tasapinnas
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} animation="fade-up" delay={i * 70}>
              <div className="bg-card rounded-lg p-6 border border-border/50 h-full">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{feat.title}</h3>
                <p className="text-muted-foreground font-sans text-[15px] leading-relaxed">{feat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 bg-card rounded-xl p-8 border border-honey/20">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              Lamavtaru ehitamise põhimõõdud
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm font-sans">
              <div>
                <p className="text-honey font-semibold mb-1">Välismõõdud</p>
                <p className="text-muted-foreground">Pikkus: 1050–1200 mm<br/>Laius: 450–500 mm<br/>Kõrgus: 550–600 mm</p>
              </div>
              <div>
                <p className="text-honey font-semibold mb-1">Seina paksus</p>
                <p className="text-muted-foreground">35–40 mm (mänd/kuusk)<br/>Põhi: 35 mm<br/>Kaas: 25 mm + soojustus</p>
              </div>
              <div>
                <p className="text-honey font-semibold mb-1">Raamimõõdud</p>
                <p className="text-muted-foreground">435 × 300 mm (kõrge)<br/>või 435 × 230 mm<br/>Raamide arv: 20–24 tk</p>
              </div>
              <div>
                <p className="text-honey font-semibold mb-1">Lennuava</p>
                <p className="text-muted-foreground">Alumine: 200 × 10 mm<br/>Reguleeritav<br/>Maandumislaud: 50 mm</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LamavtaruSection;
