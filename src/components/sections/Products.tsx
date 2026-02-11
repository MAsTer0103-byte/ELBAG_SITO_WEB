"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const products = [
  {
    title: "Contenitori Modulari Guida DIN",
    description:
      "Soluzioni standard modulari per montaggio su guida DIN, disponibili in diverse configurazioni.",
    tag: "DIN",
  },
  {
    title: "Contenitori Verticali",
    description:
      "Contenitori a sviluppo verticale per applicazioni spazialmente ottimizzate.",
    tag: "DIN",
  },
  {
    title: "Supporti Specializzati",
    description:
      "Supporti e accessori per il fissaggio e il montaggio di apparecchiature.",
    tag: "Accessori",
  },
  {
    title: "Soluzioni per Domotica",
    description:
      "Contenitori dedicati per sistemi domotici e automazione domestica.",
    tag: "Domotica",
  },
  {
    title: "Domotica da Incasso",
    description:
      "Soluzioni incassabili a parete per integrazione architettonica perfetta.",
    tag: "Incasso",
  },
  {
    title: "Domotica a Parete",
    description:
      "Contenitori a parete per sistemi di controllo e automazione.",
    tag: "Parete",
  },
  {
    title: "Scatole con Fissaggio Murale",
    description:
      "Contenitori robusti con sistemi di fissaggio a parete certificati.",
    tag: "Murale",
  },
  {
    title: "Soluzioni Custom",
    description:
      "Progettazione e realizzazione di contenitori personalizzati secondo le vostre specifiche.",
    tag: "Custom",
  },
  {
    title: "Contenitori Embedded",
    description:
      "Soluzioni compatte per schede singole e sistemi embedded.",
    tag: "Embedded",
  },
  {
    title: "Trattamenti Speciali",
    description:
      "Impregnazione e trattamenti superficiali per protezione e durabilità.",
    tag: "Finiture",
  },
  {
    title: "Scatole per Alimentatori",
    description:
      "Contenitori specializzati per unità di alimentazione e power supply.",
    tag: "Power",
  },
  {
    title: "Produzione Agile (MTL)",
    description:
      "Realizzazione senza stampo per prototipi e piccole tirature.",
    tag: "MTL",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Products() {
  return (
    <section id="prodotti" className="section-pad bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4">
          <Badge className="w-fit rounded-full bg-primary/10 text-primary hover:bg-primary/15">
            Soluzioni complete
          </Badge>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            I nostri prodotti
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Un ampio catalogo di contenitori modulari e personalizzati per ogni
            settore dell'elettronica e della domotica.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={item}>
              <Card className="group h-full border-border/60 bg-white/80 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="secondary" className="rounded-full">
                    {product.tag}
                  </Badge>
                  <span className="text-xs text-muted-foreground">ELBAG</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
