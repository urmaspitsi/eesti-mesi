import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import seasonsApiary from "@/assets/seasons-apiary.jpg";

type Season = "kevad" | "suvi" | "sygis" | "talv";

const seasons: { id: Season; label: string; icon: string; color: string }[] = [
  { id: "kevad", label: "Kevad", icon: "🌸", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  { id: "suvi", label: "Suvi", icon: "☀️", color: "bg-amber-50 border-amber-200 text-amber-800" },
  { id: "sygis", label: "Sügis", icon: "🍂", color: "bg-orange-50 border-orange-200 text-orange-800" },
  { id: "talv", label: "Talv", icon: "❄️", color: "bg-sky-50 border-sky-200 text-sky-800" },
];

const months: Record<Season, { month: string; tasks: string[]; priority: string }[]> = {
  kevad: [
    {
      month: "Märts",
      priority: "Pere talvitumise hindamine",
      tasks: [
        "Jälgi lennuava aktiivsust soojematel päevadel (+8°C) — kas mesilased lendavad ja toovad õietolmu?",
        "Kontrolli toiduvarusid kaalumise teel (minimaalne taru kaal kevadel ~25 kg lamavtarule).",
        "Ära ava taru veel täielikult — õhutemperatuur peab olema vähemalt +14°C pealtvaatuseks.",
        "Eemalda surnud mesilased lennulaualt ja kontrolli lennuava läbipääsetavust.",
        "Puhasta aluslaud (varriste diagnostikaks) — loe loomulik variste 48h jooksul.",
      ],
    },
    {
      month: "Aprill",
      priority: "Esimene pealtvaatus ja kevadine hooldus",
      tasks: [
        "Esimene põhjalik pealtvaatus temperatuuril +16°C: kontrolli ema olemasolu (munarakud!), haudeala suurust ja toiduvarusid.",
        "Eemalda talvine soojustus ja piiramislaud — anna perele ruumi areneda.",
        "Hinda pere tugevust: tugev pere katab 6–8 raami mesilastega, nõrk pere 3–4 raami.",
        "Nõrgad pered ühenda tugevaga (ajalehe meetod) või anna neile hauderaame tugevast perest.",
        "Vajadusel toida suhkrusiirupiga (1:1 suhkur-vesi) pere arengu kiirendamiseks.",
        "Paigalda lesehauderaam varroalesta diagnostikaks.",
        "Valmista ette puhas kärg ja vahavundament uutele raamidele.",
      ],
    },
    {
      month: "Mai",
      priority: "Sülemiennetamine ja pere laiendamine",
      tasks: [
        "Pere areneb kiiresti — lisa uusi raame vahavundamendiga, et anda ehitusruumi.",
        "Jälgi sülemirakke iga 7–9 päeva tagant (emakupud raami alaservas).",
        "Sülemi ennetamine: anna ehitusraame, eemalda emakuppe, vajadusel tee kunstsülem.",
        "Rapsiõitseng algab mai keskpaigas — valmista ette meeruumi raamid.",
        "Esimesed õietolmu ja nektari korjed: võilill, sarapuu, paju, viljapuud.",
        "Tugev pere peaks katma 12–16 raami — vajadusel lisa meeruumi raamid.",
      ],
    },
  ],
  suvi: [
    {
      month: "Juuni",
      priority: "Peamine korjeperiood ja sülemikontroll",
      tasks: [
        "Rapsi-, ristiku- ja pärnakorje — mesilased vajavad piisavalt meeruumi.",
        "Kontrolli iga nädal: kas meeruumi raamid saavad täis? Lisa varakult juurde.",
        "Sülemikontroll jätkub — emakupude eemaldamine või pere jagamine.",
        "Lesehauderaamide eemaldamine (biotehnilise varroatõrje meetod) iga 24 päeva tagant.",
        "Märgi uued emad värviga (2026. aastal valge värv).",
        "Rapsikorje puhul: võta mesi välja kohe pärast rapsiõitsengu lõppu, muidu kristalliseerub raamides!",
      ],
    },
    {
      month: "Juuli",
      priority: "Mee kogumine ja ema kontroll",
      tasks: [
        "Esimene mee kogumine — rapsi- ja segamesi. Kontrolli refraktomeetriga (niiskus <18,5%).",
        "Pärnaõitseng (juuli esimene pool) — Eesti väärtuslikuim mesi.",
        "Jätka lesehauderaamide eemaldamist varroatõrjeks.",
        "Hinda emade kvaliteeti — vana või kehvasti munev ema tuleb vahetada.",
        "Tugevad pered võivad anda 30–50 kg mett — jälgi kaalumisega.",
        "Tee kindlaks, et peredes on piisavalt ruumi — ülekuumenemine põhjustab sülemit ka suvel.",
      ],
    },
    {
      month: "August",
      priority: "Viimane korje ja talvitumise ettevalmistus algus",
      tasks: [
        "Viimane mee kogumine (kanarbiku- ja metsamesi lõuna-Eestis).",
        "KOHE pärast viimast mee võtmist alusta talvetoitmist — suhkrusiirup 3:2 (suhkur:vesi).",
        "Alusta varroatõrjega: Apivar-ribad paigaldada augustis (6–8 nädala kuur).",
        "Alternatiivina sipelghappe töötlus (MAQS — 2 ribasid 7 päevaks, temp 15–29°C).",
        "Kontrolli ema olemasolu — emata pere ei talvitu! Vajadusel ühenda.",
        "Hinda pere tugevust — talvituma peaks jääma vähemalt 8 raami katva mesilastega pere.",
      ],
    },
  ],
  sygis: [
    {
      month: "September",
      priority: "Talvetoitmine ja varroatõrje lõpetamine",
      tasks: [
        "Lõpeta talvetoitmine septembri keskpaigaks — perele peab jääma 18–22 kg toiduvaru.",
        "Lamavtarus kaal koos mesilastega: minimaalselt 35–40 kg.",
        "Kontrolli, et talvemesilaste areng toimub häireteta (haude peaks vähenema).",
        "Eemalda Apivar-ribad pärast 6–8 nädalat. Tee variste kontroll.",
        "Ahenda pesaruumi piiramislauaga — kompaktne pesaala hoiab sooja paremini.",
        "Paigalda hiirekaitse lennuavale (10 mm toru või restkaitse).",
      ],
    },
    {
      month: "Oktoober",
      priority: "Talvitumise ettevalmistus",
      tasks: [
        "Viimane taru kontroll (kiire vaatus ilma raamide väljavõtmiseta).",
        "Paigalda soojustus — lamavtaru puhul isoleeriv kate kaane alla ja tühja osa täitmine soojustusega.",
        "Kontrolli ventilatsiooni — niiskus on talvel suurem oht kui külm! Ülemine õhuava peab olema avatud.",
        "Eemalda rohukamar taru ümbert — niiskus ja närilised.",
        "Kinnita tarud tuule eest, vajadusel raskusega kaane peale (kivi, plekk).",
        "Pese ja desinfitseeri mee võtmisel kasutatud varustus, kuivata ja ladustada.",
      ],
    },
    {
      month: "November",
      priority: "Oksaalhappe töötlus haudevabale perele",
      tasks: [
        "Oota, kuni haue on lõppenud (tavaliselt novembri teine pool, pärast esimesi öökülmi).",
        "Oksaalhappe sublimeerimine (aurustumine): 2 g oksaalhapet pere kohta, üks kord.",
        "Alternatiivina oksaalhappe tilgutuslahus: 3,2% oksaalhape suhkrusiirupis, 5 ml raamivahele.",
        "See on aasta kõige tõhusam varroatõrje hetk — kogu lest on mesilastel, mitte hauderakudes.",
        "Ära ava taru muul põhjusel — iga avamine kaotab soojust.",
        "Kontrolli taru kaalu — kas toiduvarud on piisavad (~35 kg lamavtarule).",
      ],
    },
  ],
  talv: [
    {
      month: "Detsember",
      priority: "Rahu ja jälgimine",
      tasks: [
        "Mesilased on talvekerasid (pall taru sees, temperatuur kera keskmes ~35°C haudevabalt ~20°C).",
        "Ära ava taru! Jälgi lennuava — kas see on puhas lumest ja surnud mesilastest.",
        "Kuula taru — rahulik sumin tähendab normaalset olekut; vali sumin võib viidata probleemile.",
        "Kontrolli hiirekaitseid — närilised otsivad talvel sooja pesa.",
        "Planeeri järgmine hooaeg: telli vahavundament, raame, vajadusel uued tarude osad.",
        "Osale koolitustel — Eesti Mesinike Liidu talveseminarid ja veebikursused.",
      ],
    },
    {
      month: "Jaanuar",
      priority: "Planeerimine ja varustuse hooldus",
      tasks: [
        "Kontrolli perioodiliselt lennuavat — tugevast tuulest ja lumest ummistu oht.",
        "Paranda ja värvi talvel tarude osi töökojas.",
        "Valmista ette uued raamid ja vahavundament (traadista raamid, joodetakse vahalehed).",
        "Telli emad — kvaliteetsed paaritatud emad tuleb tellida varakult (tarnijatel pikk järjekord).",
        "Analüüsi eelmise aasta tulemusi: mee saagikus, perede areng, tõrje tõhusus.",
        "Uuenda mesinduspäevikut ja planeeri kevadised tööd.",
      ],
    },
    {
      month: "Veebruar",
      priority: "Ettevalmistused kevadeks",
      tasks: [
        "Mesilased hakkavad aeglaselt aktiivsemaks muutuma — ema alustab munemist.",
        "Toiduvarude kriitiline periood! Kontrolli kaalu — vajadusel lisa fondanti (suhkrutainas) kaane alla.",
        "Ära anna vedelsiirupit — liiga vara, mesilased ei suuda seda töödelda.",
        "Soojematel päevadel (+10°C) teevad mesilased puhastuslende — jälgi aktiivsust.",
        "Valmista kandiline toitmine ette (fondant = suhkur 70% + vesi 30%, kuumuta ja lase tarduda).",
        "Kontrolli varustuse valmidust: suitsik, peitel, harilik, kindad, kaitseriietus.",
      ],
    },
  ],
};

const SeasonCalendarSection = () => {
  const [activeSeason, setActiveSeason] = useState<Season>("kevad");

  return (
    <section id="kalender" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Hooajakalender</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Mesinikule kuude kaupa tegevuskava
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-8">
            Mesindus on hooajaline tegevus, kus iga kuu toob kaasa oma ülesanded. 
            Allpool on toodud Eesti kliimale kohandatud tegevuskava, mis sobib nii algajale kui kogenud mesinikule.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <img
            src={seasonsApiary}
            alt="Mesilad neljas aastaaja — kevadised õied, suvine korje, sügisene ettevalmistus ja talvine puhkus"
            className="w-full rounded-xl shadow-lg shadow-foreground/5 mb-12 max-h-80 object-cover"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={120}>
          <div className="flex flex-wrap gap-3 mb-10">
            {seasons.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSeason(s.id)}
                className={`
                  px-5 py-2.5 rounded-lg font-sans text-sm font-semibold border transition-all duration-200
                  ${activeSeason === s.id
                    ? `${s.color} shadow-md scale-[1.02]`
                    : "bg-card border-border/50 text-muted-foreground hover:border-honey/40 hover:text-foreground"
                  }
                `}
                style={{ transform: activeSeason === s.id ? "scale(1.02)" : undefined }}
              >
                <span className="mr-1.5">{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {months[activeSeason].map((m, i) => (
            <ScrollReveal key={m.month} animation="fade-up" delay={i * 80}>
              <div className="bg-card rounded-xl border border-border/50 p-6 lg:p-8">
                <div className="flex flex-wrap items-baseline gap-3 mb-4">
                  <h3 className="text-2xl font-serif font-bold text-foreground">{m.month}</h3>
                  <span className="text-honey font-sans text-sm font-semibold">— {m.priority}</span>
                </div>
                <ul className="space-y-3">
                  {m.tasks.map((task, j) => (
                    <li key={j} className="flex gap-3 text-[15px] font-sans leading-relaxed">
                      <span className="text-honey mt-0.5 shrink-0">●</span>
                      <span className="text-muted-foreground">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonCalendarSection;
