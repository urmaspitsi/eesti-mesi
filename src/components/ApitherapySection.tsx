import ScrollReveal from "./ScrollReveal";
import apitherapyImg from "@/assets/apitherapy.jpg";

const products = [
  {
    emoji: "🍯",
    title: "Mesi",
    desc: "Antibakteriaalse, põletikuvastase ja antioksüdantse toimega. Kasutatakse haavade ravis (eriti manuka mesi), kurguvalu leevendamiseks ja seedetrakti terviseks. Sisaldab ensüüme, vitamiine (B-grupp, C) ja mineraalaineid."
  },
  {
    emoji: "🟤",
    title: "Propolis (taruvaik)",
    desc: "Tugev looduslik antibiootikum. Mesilased koguvad puude pungadest vaigulise aine, millega desinfitseerivad taru. Propolis sisaldab üle 300 bioaktiivse ühendi — flavonoide, fenoolhappeid ja terpeene. Kasutatakse tinktuuri, salvi või kapslitena."
  },
  {
    emoji: "👑",
    title: "Mesilasema toitepiim (royal jelly)",
    desc: "Eritoitaine, mida nooremsilased toodavad ja millega toitavad mesilasema kogu elu. Sisaldab 10-HDA rasvhapet (unikaalne ühend), B-vitamiine ja aminohappeid. Traditsiooniline taastumisvahend väsimuse ja immuunsüsteemi nõrkuse korral."
  },
  {
    emoji: "🌼",
    title: "Õietolm (suir)",
    desc: "Mesilased koguvad õietolmu ja pakendavad selle korvidesse. Sisaldab 40% valku, kõiki olulisi aminohappeid, vitamiine ja mineraalaineid. Kasutatakse toidulisandina energia tõstmiseks ja allergiasümptomite leevendamiseks (kohalik tolm)."
  },
  {
    emoji: "🐝",
    title: "Mesilasemürk (apitoksiin)",
    desc: "Mesilase nõelamistreavi — kõige tuntum apiteraapia vorm. Melitiin (mürgi põhikomponent) on tugev põletikuvastane aine. Kasutatakse reumatoidartriidi, sclerosis multiplex'i ja kroonilise valu ravis. Rakendatakse otse nõelamisega või süstena."
  },
  {
    emoji: "🕯️",
    title: "Meevaha",
    desc: "Mesilaste vahasnäärmete produkt. Kasutatakse salvide, kreemide ja küünalde valmistamiseks. Loob nahale kaitsva kihi, niisutab ja pehmendab. Meevahast salve kasutatakse põletuste, ekseemi ja kuiva naha ravis."
  },
];

const useCases = [
  { condition: "Haavade ja põletuste ravi", method: "Meesidemed (eriti manuka mesi, UMF 10+)", evidence: "Kõrge" },
  { condition: "Kurguvalu ja köha", method: "Mesi sooja joogiga (1–2 spl)", evidence: "Kõrge" },
  { condition: "Reumatoidartriit", method: "Mesilasemürgi teraapia (BVT)", evidence: "Keskmine" },
  { condition: "Allergia leevendamine", method: "Kohalik õietolm (5–10 g päevas)", evidence: "Madal–keskmine" },
  { condition: "Immuunsüsteemi tugevdamine", method: "Propolise tinktuur (20–30 tilka)", evidence: "Keskmine" },
  { condition: "Naha taastumine", method: "Meevaha salvid ja propolise kreemid", evidence: "Keskmine" },
  { condition: "Sportlaste taastumine", method: "Õietolm + mesilasema toitepiim", evidence: "Madal–keskmine" },
  { condition: "Suu- ja igemeravi", method: "Propolise suuloputus", evidence: "Keskmine" },
];

const ApitherapySection = () => {
  return (
    <section id="apiteraapia" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Mesilaste kingitused tervisele</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Apiteraapia — ravi mesilastoodetega
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-16">
            Apiteraapia (ladina <em>apis</em> — mesilane + kreeka <em>therapeia</em> — ravi) on 
            alternatiivmeditsiini haru, mis kasutab mesilaste tooteid tervise parandamiseks ja haiguste 
            ennetamiseks. See on üks vanimaid ravikunste — esimesed kirjalikud ülestähendused pärinevad 
            Vana-Egiptusest (u. 2400 eKr), kus mett kasutati haavade ravimiseks.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal animation="slide-left" delay={80}>
            <img
              src={apitherapyImg}
              alt="Apiteraapia tooted — mesi, propolis, õietolm ja mesilasema toitepiim puulaual"
              className="w-full rounded-xl shadow-lg shadow-foreground/5 mb-6"
            />
            <p className="text-muted-foreground font-sans text-sm italic text-center">
              Apiteraapia tooted: mesi, propolis, õietolm, mesilasema toitepiim ja meevaha
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={160}>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Ajalugu ja taust</h3>
            <div className="space-y-4 text-muted-foreground font-sans text-[15px] leading-relaxed">
              <p>
                Mesilastoodete raviotstarbeline kasutamine on dokumenteeritud pea kõigis vanades kultuurides. 
                <strong className="text-foreground"> Vana-Egiptuses</strong> kasutati mett ja propolist muumiate 
                konserveerimiseks ning haavade raviks. <strong className="text-foreground">Hippokrates</strong> (460–370 eKr) 
                soovitas mett palaviku ja haavade raviks.
              </p>
              <p>
                <strong className="text-foreground">Vana-Roomas</strong> kirjeldas Plinius Vanem oma teoses 
                „Naturalis Historia" mee, propolise ja meevaha raviomadusi. <strong className="text-foreground">Ayurveda</strong> ja 
                traditsiooniline <strong className="text-foreground">Hiina meditsiin</strong> kasutavad mesilastooteid juba üle 3000 aasta.
              </p>
              <p>
                Tänapäevane apiteraapia arenes 19.–20. sajandil. Austria arst <strong className="text-foreground">Philip Terc</strong> (1844–1918) 
                alustas süstemaatilist mesilasemürgi ravi uurimist reumahaiguste korral. Eestis on apiteraapia 
                traditsioonid samuti pikad — rahvameditsiin on mett ja propolist kasutanud sajandeid.
              </p>
              <p>
                Tänapäeval uuritakse apiteraapiat aktiivselt — aastas ilmub üle 500 teadusartikli mesilastoodete 
                bioaktiivsete omaduste kohta. Maailma Terviseorganisatsioon (WHO) tunnustab mett kurguvalu ja köha ravimina.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Products grid */}
        <ScrollReveal>
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-8">
            Apiteraapia tooted
          </h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((p, i) => (
            <ScrollReveal key={p.title} animation="fade-up" delay={i * 70}>
              <div className="bg-card rounded-lg p-6 border border-border/50 h-full">
                <span className="text-3xl mb-3 block">{p.emoji}</span>
                <h4 className="text-lg font-serif font-semibold text-foreground mb-2">{p.title}</h4>
                <p className="text-muted-foreground font-sans text-[15px] leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Use cases table */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="bg-card rounded-xl p-8 border border-honey/20 mb-16">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Kasutusjuhud ja tõenduspõhisus
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-semibold">Seisund</th>
                    <th className="text-left py-3 pr-4 text-foreground font-semibold">Meetod</th>
                    <th className="text-left py-3 text-foreground font-semibold">Tõendus</th>
                  </tr>
                </thead>
                <tbody>
                  {useCases.map((uc) => (
                    <tr key={uc.condition} className="border-b border-border/30">
                      <td className="py-3 pr-4 text-foreground">{uc.condition}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{uc.method}</td>
                      <td className="py-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          uc.evidence === "Kõrge" 
                            ? "bg-green-100 text-green-800" 
                            : uc.evidence === "Keskmine"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-orange-100 text-orange-700"
                        }`}>
                          {uc.evidence}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Warning */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <h4 className="text-lg font-serif font-semibold text-foreground mb-2">⚠️ Oluline hoiatus</h4>
            <p className="text-muted-foreground font-sans text-[15px] leading-relaxed">
              Apiteraapia ei asenda arstlikku ravi. Mesilasemürgi allergia (anafülaksia) võib olla eluohtlik — 
              enne mesilasemürgi ravi tuleb <strong className="text-foreground">alati</strong> teha allergiatest. 
              Mesilastooteid ei soovitata alla 1-aastastele lastele (botulismioht meest). 
              Rasedad ja imetavad emad peaksid enne apiteraapia kasutamist arstiga nõu pidama. 
              Propolise allergia esineb 1–6% inimestest.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ApitherapySection;
