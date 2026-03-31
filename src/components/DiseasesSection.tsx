import ScrollReveal from "./ScrollReveal";
import varroaMite from "@/assets/varroa-mite.jpg";
import diseaseInspection from "@/assets/bee-disease-inspection.jpg";

const diseases = [
  {
    name: "Varroatoos (Varroa destructor)",
    severity: "Kriitiline",
    symptoms: "Deformeerunud tiivad, lühenenud eluiga, nõrgenenud pere, kirju haudeala, mesilaste roomamine lennulaua ees. Raskel juhul pere hukkumine talvel.",
    treatment: "Sügisene töötlus oksaalhappe- või sipelghappelahusega (3,2% oksaalhape suhkrusiirupis). Suvisel ajal Apivar- (amitraas) või Apistan-ribad (fluvalinaas) vastavalt juhendile. Biotehnilised meetodid: lesehauderaamide eemaldamine, kunstsülemi kasutamine. Töötleda tuleb KÕIKI mesilas olevaid peresid korraga.",
    prevention: "Regulaarne lesta arvu jälgimine (loodusliku variste loendamine — kriitiline piir on >10 lesta päevas sügisel). Tugevate ja hügieenilise käitumisega tõugude eelistamine. Lesehauderaamide eemaldamine juunis-juulis.",
    wiki: "https://en.wikipedia.org/wiki/Varroa_destructor"
  },
  {
    name: "Ameerika haudmemädanik (AFB)",
    severity: "Väga ohtlik",
    symptoms: "Sissevajunud, tumedaks muutunud haudekaaned, mis on niisked ja augulised. Vastsed muutuvad pruuniks, venivaks massiks (tikuproov — 2–3 cm niit). Iseloomulik haisev lõhn. Kuivanud vastsete kõrned kleepuvad raku seintele.",
    treatment: "Eestis on AFB teatamiskohustuslik loomataudi haigus. Nakatunud pere ja taru hävitatakse põletamise teel. Toiduvarud ja vahakärg hävitatakse. Mesilat desinfitseeritakse. Antibiootikumide kasutamine on EL-is keelatud! Haigust põhjustav Paenibacillus larvae eosed püsivad eluvõimelisena aastakümneid.",
    prevention: "Kasutage puhast vaha ja vahavundamenti usaldusväärselt tarnijalt. Ärge toitke mesilasi tundmatu päritoluga meega. Tarusid ja raame regulaarselt desinfitseerida leegiga. Mitte vahetada raame perede vahel kontrollimata.",
    wiki: "https://en.wikipedia.org/wiki/American_foulbrood"
  },
  {
    name: "Euroopa haudmemädanik (EFB)",
    severity: "Ohtlik",
    symptoms: "Vastsed surevad enne raku sulgemist — muutuvad kollakaks, siis pruuniks. Haudeala on ebaühtlane (mosaiikmuster). Lõhn on hapukas. Erinevalt AFB-st ei teki venivat massi.",
    treatment: "Perede tugevdamine, ema vahetamine, taru šoki-meetod (mesilaste raputamine uutele puhtale raamidele). Tugevad pered suudavad haigusega sageli ise toime tulla. Rasketel juhtudel taotakse veterinaararstilt abi.",
    prevention: "Tugevate perede hoidmine, piisav toiduvarude tagamine. Stressi vältimine (liigne kontrollimine, jaheda ilmaga avamine). Hügieeniliste tõugude kasvatamine.",
    wiki: "https://en.wikipedia.org/wiki/European_foulbrood"
  },
  {
    name: "Nosemoos (Nosema spp.)",
    severity: "Levinud",
    symptoms: "Mesilaste kõhulahtisus (pruunid jäljed taru esiküljel ja raamidel). Mesilased on loidud, ei lenda välja. Pere kevadisel arenemisel on aeglane kasv. Nosema ceranae puhul sümptomid sageli varjatud.",
    treatment: "Fumagilliini kasutamine on EL-is keelatud. Peamine tõrjeviis on äädikalahusega (60% äädikhape, 250 ml 25l siirupile) sügisene toitmine. Nakatunud kärjed sulatada. Tarude desinfeerimine äädikhappe aurudega.",
    prevention: "Hea ventilatsioon tarus. Kevadine perepuhastus — üleviimine puhtale kärjele. Regulaarne vahavahetus (3-aastane tsükkel). Talvituskoha kuivus.",
    wiki: "https://en.wikipedia.org/wiki/Nosema_(disease)"
  },
  {
    name: "Nõelhaigus (Acarapis woodi)",
    severity: "Mõõdukas",
    symptoms: "Mesilased ei suuda lennata, roomavad maas, tiivad on ebaloomulikult laiali (nn K-tiiva sümptom). Pere nõrgeneb järk-järgult. Esineb rohkem kevadel ja sügisel.",
    treatment: "Mentoolikristallid tarus (25–50 g mentool spetsiaalses anumas taru peal, temperatuur >15°C). Sipelghape aurustumine (MiteGone või MiteAway). Tümool (Apiguard).",
    prevention: "Tugevate perede hoidmine. Resistentsete tõugude kasvatamine. Korrapärane taru ventilatsioon.",
    wiki: "https://en.wikipedia.org/wiki/Acarapis_woodi"
  },
  {
    name: "Lubihaigus (Ascosphaera apis)",
    severity: "Mõõdukas",
    symptoms: "Haude rakudes leidub valgeid-halle mumifitseerunud vastseid, mis näevad välja nagu lubjakivitükikesed. Mesilased kannavad neid lennulaua ette välja. Esineb sagedamini niisketel ja jahedatel perioodidel.",
    treatment: "Otsest ravimit pole. Pere tugevdamine, ema vahetamine hügieenilise käitumisega emaga. Nakatunud kärjed eemaldada ja sulatada. Taru ventilatsiooni parandamine — lennuava avardamine.",
    prevention: "Hea taru ventilatsioon, niiskuse vältimine. Tugevate ja hügieeniliste liinide eelistamine. Mesilate paigutamine kuiva, tuulevaikse koha peale.",
    wiki: "https://en.wikipedia.org/wiki/Chalkbrood"
  }
];

const severityColor = (sev: string) => {
  switch (sev) {
    case "Kriitiline": return "bg-red-100 text-red-800 border-red-200";
    case "Väga ohtlik": return "bg-orange-100 text-orange-800 border-orange-200";
    case "Ohtlik": return "bg-amber-100 text-amber-800 border-amber-200";
    case "Levinud": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default: return "bg-muted text-muted-foreground border-border";
  }
};

const DiseasesSection = () => {
  return (
    <section id="haigused" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Tervishoid</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Mesilaste haigused ja tõrje
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-16">
            Mesilaste tervishoid on eduka mesinduse vundament. Varroalest on maailmas nr 1 mesilaste surmapõhjus, 
            kuid ka bakteriaalsed ja seenhaigused võivad peresid hävitada. Varajane diagnoos ja õigeaegne tegutsemine on kriitilise tähtsusega.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <ScrollReveal animation="slide-left" delay={80}>
            <img
              src={varroaMite}
              alt="Varroa destructor lest mesilase kehal — punakaspruun parasiit imeb hemolümfi"
              className="w-full rounded-xl shadow-lg shadow-foreground/5 mb-4"
            />
            <p className="text-muted-foreground font-sans text-sm italic text-center">
              Varroa destructor — mesilaste kõige ohtlikum parasiit kogu maailmas
            </p>
          </ScrollReveal>
          <ScrollReveal animation="slide-right" delay={160}>
            <img
              src={diseaseInspection}
              alt="Mesinik kontrollib haudeala haigusnähtude osas — kärjeraami visuaalne ülevaatus"
              className="w-full rounded-xl shadow-lg shadow-foreground/5 mb-4"
            />
            <p className="text-muted-foreground font-sans text-sm italic text-center">
              Regulaarne haudeala kontroll on haiguste varajase avastamise võti
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-6">
          {diseases.map((d, i) => (
            <ScrollReveal key={d.name} animation="fade-up" delay={i * 70}>
              <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-xl font-serif font-bold text-foreground">{d.name}</h3>
                    <span className={`text-xs font-sans font-semibold px-2.5 py-1 rounded-full border ${severityColor(d.severity)}`}>
                      {d.severity}
                    </span>
                    <a
                      href={d.wiki}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-honey text-sm font-sans hover:text-amber-brand transition-colors ml-auto"
                    >
                      Wikipedia ↗
                    </a>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 text-[15px] font-sans">
                    <div>
                      <p className="font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                        <span className="text-red-500">⚠</span> Sümptomid
                      </p>
                      <p className="text-muted-foreground leading-relaxed">{d.symptoms}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                        <span className="text-honey">💊</span> Ravi
                      </p>
                      <p className="text-muted-foreground leading-relaxed">{d.treatment}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                        <span className="text-forest">🛡</span> Ennetamine
                      </p>
                      <p className="text-muted-foreground leading-relaxed">{d.prevention}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 bg-amber-50 dark:bg-amber-950/20 rounded-xl p-8 border border-honey/20">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              ⚠ Oluline: Varroatõrje aastakalender Eesti tingimustes
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm font-sans">
              <div>
                <p className="text-honey font-semibold mb-1">Aprill–mai</p>
                <p className="text-muted-foreground">Loodusliku variste kontroll (aluslaud). Lesehauderaamide paigaldamine diagnostikaks. Pere üldseisundi hindamine.</p>
              </div>
              <div>
                <p className="text-honey font-semibold mb-1">Juuni–juuli</p>
                <p className="text-muted-foreground">Lesehauderaamide regulaarne eemaldamine (iga 3 nädala tagant). Biotehnilised meetodid — kunstsülem, lõigetud lesesõelraam.</p>
              </div>
              <div>
                <p className="text-honey font-semibold mb-1">August–september</p>
                <p className="text-muted-foreground">Peamine tõrjeperiood pärast viimast mee võtmist. Apivar-ribad (6–8 nädalat) VÕI oksaalhape/sipelghape töötlus. Talvemesilaste kaitsmine.</p>
              </div>
              <div>
                <p className="text-honey font-semibold mb-1">November–detsember</p>
                <p className="text-muted-foreground">Oksaalhappe sublimeerimine (aurustumine) haudevabale perele (~2g oksaalhapet pere kohta). Kõige tõhusam tõrjeaeg — kogu varroalest on mesilastel.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DiseasesSection;
