import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import honeyRecipesImg from "@/assets/honey-recipes.jpg";

interface Recipe {
  emoji: string;
  title: string;
  difficulty: "Lihtne" | "Keskmine" | "Keerulisem";
  time: string;
  servings: string;
  intro: string;
  ingredients: string[];
  steps: string[];
  tip?: string;
  sourceUrl?: string;
  sourceLabel?: string;
}

const recipes: Recipe[] = [
  {
    emoji: "🍰",
    title: "Meekook (medovik)",
    difficulty: "Keskmine",
    time: "1,5 tundi",
    servings: "10–12 portsjonit",
    intro: "Klassikaline Ida-Euroopa meekook — õhukesed meekaramelliga kihid vahelduvad kreemja täidisega. Eestis tuntud ka kui medovik.",
    ingredients: [
      "200 g mett",
      "100 g võid",
      "150 g suhkrut",
      "3 muna",
      "1 tl soodat",
      "500–550 g jahu",
      "Kreem: 500 ml hapukoort (30%), 200 g suhkrut",
    ],
    steps: [
      "Sulata vesivannil mesi, või ja suhkur. Lisa sooda — mass vahutab üles. Jahuta veidi.",
      "Klopi munad sisse, lisa järk-järgult jahu. Sõtku pehme, kergelt kleepuv tainas.",
      "Jaga tainas 8 osaks. Rulli iga osa õhukeseks ringiks (ø ~22 cm).",
      "Küpseta iga kihti 180 °C juures 5–6 minutit, kuni kuldne.",
      "Vahusta hapukoor suhkruga tugevaks kreemiks.",
      "Määri iga kiht kreemiga, pane virna. Kata ülejäänud kreemiga.",
      "Purusta üks kiht puruks ja kata kook sellega. Hoia külmkapis vähemalt 6 tundi.",
    ],
    tip: "Kook on parim järgmisel päeval, kui kihid on kreemiga hästi läbi jõudnud.",
    sourceUrl: "https://nami-nami.ee/retsept/630/medovik-meekook",
    sourceLabel: "Nami-Nami",
  },
  {
    emoji: "🍪",
    title: "Meeküpsised kaneeliga",
    difficulty: "Lihtne",
    time: "40 minutit",
    servings: "~30 küpsist",
    intro: "Krõbedad ja maitsestatud meeküpsised — ideaalsed jõulude ajal, aga head aastaringselt.",
    ingredients: [
      "150 g mett",
      "100 g võid",
      "100 g suhkrut",
      "1 muna",
      "1 tl kaneeli",
      "½ tl ingverit",
      "½ tl soodat",
      "350–400 g jahu",
    ],
    steps: [
      "Soojenda mesi ja või veidi (et segunevad). Lisa suhkur, muna ja maitseained.",
      "Lisa sooda ja jahu — sõtku sile tainas. Kata kinni, jahuta 30 min külmkapis.",
      "Rulli tainas 4–5 mm paksuseks. Lõika küpsiseid vormidega välja.",
      "Küpseta 180 °C juures 8–10 minutit.",
      "Soovi korral kaunista suhkruglasuuriga.",
    ],
    tip: "Kasuta tumedamat mett (nt tatramett) — annab küpsistele tugevama maitse.",
    sourceUrl: "https://nami-nami.ee/retsept/106/piparkoogid",
    sourceLabel: "Nami-Nami",
  },
  {
    emoji: "🥗",
    title: "Mee-sinepikaste salatile",
    difficulty: "Lihtne",
    time: "5 minutit",
    servings: "4 portsjonit",
    intro: "Lihtne ja universaalne kaste, mis sobib nii rohelise salati, grillitud köögiviljade kui ka kanalihaga.",
    ingredients: [
      "3 spl mett",
      "2 spl Dijoni sinepit",
      "3 spl õunasiidriäädikat",
      "5 spl oliiviõli",
      "Soola ja pipart maitse järgi",
    ],
    steps: [
      "Sega kokku mesi ja sinep, kuni ühtlane.",
      "Lisa äädikas ja klopi sisse oliiviõli.",
      "Maitsesta soola ja pipraga. Kasuta kohe.",
    ],
    sourceUrl: "https://en.wikipedia.org/wiki/Honey_mustard",
    sourceLabel: "Wikipedia",
  },
  {
    emoji: "🍗",
    title: "Meega glasuuritud kanakoivad",
    difficulty: "Lihtne",
    time: "50 minutit",
    servings: "4 portsjonit",
    intro: "Magus-soolane meeglasuur karamellistub ahjus ilusalt ja annab kanale kuldse kruusti.",
    ingredients: [
      "8 kanakoiba",
      "3 spl mett",
      "2 spl sojakastet",
      "1 spl oliiviõli",
      "2 küüslauguküünt (purustatud)",
      "1 tl paprikapulbrit",
      "Soola ja pipart",
    ],
    steps: [
      "Sega kokku mesi, sojakaste, õli, küüslauk ja maitseained.",
      "Kata kanakoivad glasuuriga, lase marineeruda vähemalt 20 min.",
      "Küpseta 200 °C ahjus 35–40 min, määrides vahepeal üle glasuuriga.",
      "Kana on valmis, kui sisetemperatuur on 75 °C.",
    ],
    tip: "Lisa glasuurile tšillihelbeid, kui soovid vürtsikamat tulemust.",
  },
  {
    emoji: "🫖",
    title: "Meejook ingveri ja sidruniga",
    difficulty: "Lihtne",
    time: "10 minutit",
    servings: "2 tassi",
    intro: "Soojendav ja tervislik jook, mis on eriti hea külmetuse ajal. Mesi lisatakse alles jahtunud joogi sisse, et säilitada kasulikud ensüümid.",
    ingredients: [
      "500 ml vett",
      "3 cm värsket ingverit (viilutatud)",
      "1 sidruni mahl",
      "2 spl mett",
      "Soovi korral kaneelipulk",
    ],
    steps: [
      "Keeda vesi koos ingveriga 5 minutit.",
      "Kurna ingver välja. Lase jahtuda ~60 °C-ni.",
      "Lisa sidrunimahl ja mesi. Sega hästi.",
      "Serveeri soojalt. Soovi korral lisa kaneelipulk.",
    ],
    tip: "Ära lisa mett keevasse vette — üle 60 °C hävivad mee kasulikud ensüümid.",
    sourceUrl: "https://et.wikipedia.org/wiki/Mesi",
    sourceLabel: "Wikipedia (Mesi)",
  },
  {
    emoji: "🥧",
    title: "Mee-pähklitort",
    difficulty: "Keerulisem",
    time: "1 tund 15 min",
    servings: "8–10 portsjonit",
    intro: "Rikkalik ja aromaatne tort, kus mesi ja röstitud pähklid moodustavad magusa, karamellistunud täidise küpsisetaigna sees.",
    ingredients: [
      "Põhi: 200 g jahu, 100 g võid, 50 g suhkrut, 1 muna",
      "Täidis: 200 g mett, 100 g suhkrut, 100 g võid",
      "300 g segatud pähkleid (kreeka-, sarapuu-, mandlid)",
      "100 ml koort (35%)",
      "1 tl vanilli",
    ],
    steps: [
      "Valmista põhitainas: hõõru või suhkruga, lisa muna ja jahu. Kata vormipõhi (ø 24 cm), tee kahvliga auke. Eelküpseta 180 °C 12 min.",
      "Röösti pähklid pannil kergelt.",
      "Keeda mesi, suhkur ja või kokku keevani. Lisa koor, keeda 2 min.",
      "Lisa pähklid ja vanill karamellsegusse.",
      "Vala täidis eelküpsetatud põhjale.",
      "Küpseta 170 °C juures 30–35 min, kuni täidis on kuldpruun.",
      "Jahuta täielikult enne serveerimist.",
    ],
    tip: "Serveeri koos kooreklopiga või vanillijäätisega.",
  },
];

const difficultyColor = (d: Recipe["difficulty"]) => {
  if (d === "Lihtne") return "bg-green-100 text-green-800";
  if (d === "Keskmine") return "bg-amber-100 text-amber-800";
  return "bg-orange-100 text-orange-700";
};

const RecipesSection = () => {
  const [openRecipe, setOpenRecipe] = useState<number | null>(null);

  return (
    <section id="retseptid" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto section-padding">
        <ScrollReveal>
          <p className="text-honey font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3">Köögis</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Retseptid meega
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-3xl mb-16">
            Mesi pole ainult magustaja — see on mitmekülgne koostisosa, mis annab toitudele sügavust, 
            niiskust ja unikaalse maitse. Siit leiad proovitud retseptid nii magusate kui soolaste roogade jaoks.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal animation="slide-left" delay={80}>
            <img
              src={honeyRecipesImg}
              alt="Meega valmistatud küpsetised ja toidud rustiiksel puulaual"
              className="w-full rounded-xl shadow-lg shadow-foreground/5"
              loading="lazy"
              width={1024}
              height={768}
            />
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={160}>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Mesi köögis</h3>
            <div className="space-y-4 text-muted-foreground font-sans text-[15px] leading-relaxed">
              <p>
                Mesi on olnud inimkonna <strong className="text-foreground">vanim magustaja</strong> — 
                juba tuhandeid aastaid enne suhkrut. Tänapäeval hinnatakse mett mitte ainult magususe, 
                vaid ka tema <strong className="text-foreground">niisutava, karamellistuva ja aromaatse</strong> toime pärast küpsetistes.
              </p>
              <p>
                Erinevad meesordid annavad retseptidele erinevaid maitsenoote: 
                <strong className="text-foreground"> heledamad meed</strong> (ristiku-, akaatsiamesi) on peenema maitsega, 
                samas <strong className="text-foreground">tumedamad</strong> (tatra-, metsamesi) annavad tugevama, karamellisema maitse.
              </p>
              <p>
                <strong className="text-foreground">Küpsetamisnipp:</strong> Mesi on ~25% vett sisaldav, seega asenda 
                retseptis 1 tass suhkrut ¾ tassi meega ja vähenda muid vedelikke 2 spl võrra. 
                Alanda ahju temperatuuri 15 °C, sest mesi karamellistub kiiremini.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Recipes grid */}
        <ScrollReveal>
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-8">
            Proovi neid retsepte 🍯
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r, i) => {
            const isOpen = openRecipe === i;
            return (
              <ScrollReveal key={r.title} animation="fade-up" delay={i * 70}>
                <div className="bg-card rounded-lg border border-border/50 h-full flex flex-col">
                  <div className="p-6 pb-3">
                    <span className="text-3xl mb-3 block">{r.emoji}</span>
                    <h4 className="text-lg font-serif font-semibold text-foreground mb-2">{r.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${difficultyColor(r.difficulty)}`}>
                        {r.difficulty}
                      </span>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                        ⏱ {r.time}
                      </span>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                        🍽 {r.servings}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-sans text-[15px] leading-relaxed">{r.intro}</p>
                  </div>

                  <div className="px-6 pb-6 mt-auto">
                    <button
                      onClick={() => setOpenRecipe(isOpen ? null : i)}
                      className="text-honey hover:text-accent font-sans text-sm font-semibold transition-colors duration-150"
                    >
                      {isOpen ? "Peida retsept ▲" : "Vaata retsepti ▼"}
                    </button>

                    {isOpen && (
                      <div className="mt-4 space-y-4 animate-fade-in">
                        <div>
                          <h5 className="text-sm font-semibold text-foreground mb-2">Koostisosad:</h5>
                          <ul className="space-y-1">
                            {r.ingredients.map((ing) => (
                              <li key={ing} className="text-muted-foreground font-sans text-sm flex items-start gap-2">
                                <span className="text-honey mt-0.5">•</span>
                                {ing}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-foreground mb-2">Valmistamine:</h5>
                          <ol className="space-y-2">
                            {r.steps.map((step, si) => (
                              <li key={si} className="text-muted-foreground font-sans text-sm flex items-start gap-2">
                                <span className="text-honey font-semibold shrink-0">{si + 1}.</span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        {r.tip && (
                          <div className="bg-secondary/50 rounded-lg p-3 border border-honey/10">
                            <p className="text-sm font-sans text-foreground">
                              <strong>💡 Nipp:</strong>{" "}
                              <span className="text-muted-foreground">{r.tip}</span>
                            </p>
                          </div>
                        )}

                        {r.sourceUrl && (
                          <a
                            href={r.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-honey hover:text-accent font-sans text-sm font-medium transition-colors"
                          >
                            📖 Allikas: {r.sourceLabel} <span>↗</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
