import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Progettazione e sviluppo prodotto assistita da CAD",
  "Stampaggio plastico ad alta precisione",
  "Lavorazioni meccaniche CNC personalizzate",
  "Finiture specializzate: serigrafia, tampografia, stampa digitale",
  "Realizzazione di aperture e finestre display",
  "Costruzione interna degli stampi con controllo QA",
  "Certificazioni RoHS e REACH",
  "Produzioni da prototipo a medie tirature",
];

export function About() {
  return (
    <section id="chi-siamo" className="section-pad">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6">
          <Badge className="w-fit rounded-full bg-primary/10 text-primary hover:bg-primary/15">
            Chi siamo
          </Badge>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            La soluzione affidabile per i vostri progetti.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            ELBAG SIMP è un'azienda specializzata nella progettazione e
            produzione di soluzioni in plastica per l'industria elettronica.
            Fondati nel 1985, abbiamo sviluppato un'expertise consolidata nel
            settore dello stampaggio di materiali plastici ad alta precisione.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Con oltre 40 anni di esperienza diretta, offriamo un team dedicato di
            progettisti e ingegneri per contenitori personalizzati su misura,
            garantendo qualità, affidabilità e tempi di consegna certi.
          </p>
        </Reveal>

        <Reveal className="rounded-3xl border border-border/70 bg-white/80 p-6 shadow-soft">
          <div id="competenze" className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              Le nostre competenze
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
