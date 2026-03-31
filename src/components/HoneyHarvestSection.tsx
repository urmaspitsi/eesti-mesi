import ScrollReveal from "./ScrollReveal";
import beekeeper from "@/assets/beekeeper.jpg";
import honeyJar from "@/assets/honey-jar.jpg";

const steps = [
  {
    nr: "01",
    title: "Mee küpsuse hindamine",
    desc: "Mesi on korjevalmis, kui vähemalt 2/3 kärjeraamist on kinnivahatud (kaetud vahakorgikestega). Kinnivahatud rakud tähendavad, et mee niiskusesisaldus on alla 20% — see on kriitilise tähtsusega, et mesi ei hakkaks käärime. Refraktomeetriga mõõtes peaks väärtus olema 17–18%."
  },
  {
    nr: "02",
    title: "Mesilaste eemaldamine raamidelt",
    desc: "Kasutatakse mesilaste eemaldajat (bee escape), puhuri või harja abil pühitakse mesilased raamidelt maha. Suitsik rahustab mesilasi — suits imiteerib tulekahju, mesilased täidavad end meega ja muutuvad rahulikumaks. Oluline on mitte purustada mesilasi, sest häireferomoonid kutsuvad esile agressiivse käitumise."
  },
  {
    nr: "03",
    title: "Korgikeste eemaldamine",
    desc: "Vahakorgikesed eemaldatakse spetsiaalse kahvli (uncapping fork) või kuuma noaga. Mõned mesinikud kasutavad ka aurunoaga korgikeste eemaldamist. Eemaldatud vahast saab hiljem kvaliteetset mesilasvaha. Professionaalsed mesinikud kasutavad korgikeste eemaldamise masinaid."
  },
  {
    nr: "04",
    title: "Mee väljatsentrifuugimine",
    desc: "Raame tsentrifuugitakse mee-eraldajas (ekstraktor). Radiaalsed ekstraktorid mahutavad korraga rohkem raame. Tsentrifuugimisel ei tohi kiirus olla liiga suur, et kärgi mitte lõhkuda. Tangentsiaalsete ekstraktorite puhul tuleb raam pöörata, et mõlemalt poolt mett kätte saada."
  },
  {
    nr: "05",
    title: "Mee filtreerimine ja setitamine",
    desc: "Mesi filtreeritakse läbi filterkanga (tavaliselt 200–400 μm), et eemaldada vahatükid ja muud osakesed. Seejärel lastakse meel setitada 24–48 tundi mahutis, et õhumullid pinnale tõuseksid. Mesi pudelisse villimiseks peaks olema toatemperatuuril (~20°C), et tagada hea voolavus."
  },
  {
    nr: "06",
    title: "Villimins ja säilitamine",
    desc: "Mesi villitakse puhtasse klaas- või toidukõlblikku plastanumasse. Säilitamistemperatuur on ideaalis 10–15°C pimedas kohas. Mesi kristalliseerub aja jooksul loomulikult — see on kvaliteedimärk, mitte riknemine. Kreemitatud mett saab valmistada kontrollitud kristalliseerimisega."
  }
];

const HoneyHarvestSection = () => {
  return (
    <section id="mee-kogumine" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Mee kogumine</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Mee kogumine samm-sammult
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-16">
            Mee kogumine nõuab täpsust ja kogemust. Eestis kogutakse mett tavaliselt juulist septembrini, 
            olenevalt korjeperioodist ja ilmastikust. Hea aasta toodang on 20–40 kg pere kohta.
            <a href="https://et.wikipedia.org/wiki/Mesi" target="_blank" rel="noopener noreferrer" className="text-honey ml-1 underline underline-offset-2 hover:text-amber-brand text-sm">↗ Wikipedia</a>
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.nr} animation="slide-left" delay={i * 80}>
                <div className="flex gap-4">
                  <span className="text-honey font-serif text-2xl font-bold shrink-0 w-10">{step.nr}</span>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground font-sans text-[15px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="slide-right" delay={100} className="sticky top-8">
            <img src={beekeeper} alt="Mesinik kontrollib kärjeraami" className="w-full rounded-xl shadow-lg shadow-foreground/5 mb-8" />
            <img src={honeyJar} alt="Värskelt kogutud kuldne mesi purki" className="w-full rounded-xl shadow-lg shadow-foreground/5" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HoneyHarvestSection;
