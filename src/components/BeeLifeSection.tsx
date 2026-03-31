import ScrollReveal from "./ScrollReveal";
import queenBee from "@/assets/queen-bee.jpg";
import honeycomb from "@/assets/honeycomb.jpg";

const BeeLifeSection = () => {
  return (
    <section id="mesilased" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Mesilaste elu</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Mesilaspere — hästi organiseeritud superorganism
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-16">
            Mesilaspere on üks looduse keerukamaid sotsiaalseid süsteeme, kus igal isendil on selge roll. 
            Üks pere võib koosneda kuni 60 000–80 000 mesilasest.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <ScrollReveal animation="slide-left">
            <img src={queenBee} alt="Mesilasema koos töölismesilastega kärjel" className="w-full rounded-xl shadow-lg shadow-foreground/5" />
          </ScrollReveal>
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Mesilasema (kuninganna)</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Peres on ainult üks ema, kelle peamine ülesanne on munade munemine — kuni 2000 muna päevas kõrgsesoonis. 
                  Mesilasema elab 3–5 aastat ja eritab feromoone, mis reguleerivad kogu pere käitumist. 
                  Paaritumislennul paaritub ta 10–20 lesega, kogudes spermat kogu eluks.
                  <a href="https://et.wikipedia.org/wiki/Mesilasema" target="_blank" rel="noopener noreferrer" className="text-honey ml-1 underline underline-offset-2 hover:text-amber-brand text-sm">↗ Wikipedia</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Töölismesilased</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Kõik töölised on viljatud emased. Nende eluiga on suvel 4–6 nädalat, talvel kuni 6 kuud. 
                  Elu jooksul täidavad nad eri rolle: esimesed päevad puhastustöö, siis toitmismesilane 
                  (tootes kuningannapiima ja mesilaspiima), vahamesilane (kärje ehitamine), valve ning lõpuks korjemesilane.
                  <a href="https://et.wikipedia.org/wiki/Mesilane" target="_blank" rel="noopener noreferrer" className="text-honey ml-1 underline underline-offset-2 hover:text-amber-brand text-sm">↗ Wikipedia</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Lesed (isased mesilased)</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Lesed kooruvad viljastamata munadest ja nende ainus ülesanne on emade viljastamine. 
                  Neil puudub astel ning nad ei osale toidukogumisel. Sügisel ajavad töölised lesed tarust välja (nn leste tapmine).
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal animation="slide-left" className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Kärg ja kärjeehitus</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Mesilased ehitavad kärge vahast, mida toodavad spetsiaalsed vahanäärmed. 
                  Kärjerakud on kuusnurksed — see on matemaatiliselt kõige ökonoomsem kuju, mis võimaldab 
                  kasutada minimaalse materjaliga maksimaalset ruumala. Raku kalle on täpselt 13°, 
                  et mesi ei voolaks välja. Ühe kilogrammi vaha tootmiseks kulutavad mesilased ~8 kg mett.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Suhtlemine ja tantsimine</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Mesilased suhtlevad omavahel nn liputantsu ja sabatantsu abil. 
                  Sabatants (<em>waggle dance</em>) edastab infot toidu asukoha ja kauguse kohta. 
                  Tantsu nurk päikese suhtes näitab suunda, kestvus aga kaugust. 
                  Seda fenomeni kirjeldas esimesena Nobeli preemia laureaat Karl von Frisch.
                  <a href="https://en.wikipedia.org/wiki/Waggle_dance" target="_blank" rel="noopener noreferrer" className="text-honey ml-1 underline underline-offset-2 hover:text-amber-brand text-sm">↗ Wikipedia</a>
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-right" delay={100} className="order-1 lg:order-2">
            <img src={honeycomb} alt="Kärjerakud meega täidetult" className="w-full rounded-xl shadow-lg shadow-foreground/5" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BeeLifeSection;
