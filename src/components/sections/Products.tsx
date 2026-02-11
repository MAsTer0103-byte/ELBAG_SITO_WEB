"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const products = [
  {
    title: "Modulari guida DIN",
    description:
      "Soluzioni standard modulari per montaggio su guida DIN, disponibili in diverse configurazioni.",
    tag: "DIN",
    image: "/images/products/01-modulari-din.webp",
  },
  {
    title: "Verticali guida DIN",
    description:
      "Contenitori a sviluppo verticale per applicazioni spazialmente ottimizzate.",
    tag: "DIN",
    image: "/images/products/02-verticali-din.webp",
  },
  {
    title: "Supporti guida DIN",
    description:
      "Supporti e accessori per il fissaggio e il montaggio di apparecchiature.",
    tag: "Accessori",
    image: "/images/products/03-supporti-din.webp",
  },
  {
    title: "Domotica",
    description:
      "Contenitori dedicati per sistemi domotici e automazione domestica.",
    tag: "Domotica",
    image: "/images/products/04-domotica.webp",
  },
  {
    title: "Domotica da incasso",
    description:
      "Soluzioni incassabili a parete per integrazione architettonica perfetta.",
    tag: "Incasso",
    image: "/images/products/05-domotica-incasso.webp",
  },
  {
    title: "Domotica a parete",
    description:
      "Contenitori a parete per sistemi di controllo e automazione.",
    tag: "Parete",
    image: "/images/products/06-domotica-parete.webp",
  },
  {
    title: "Scatole con fissaggio",
    description:
      "Contenitori robusti con sistemi di fissaggio a parete certificati.",
    tag: "Murale",
    image: "/images/products/07-scatole-fissaggio.webp",
  },
  {
    title: "Contenitori custom",
    description:
      "Progettazione e realizzazione di contenitori personalizzati secondo le vostre specifiche.",
    tag: "Custom",
    image: "/images/products/08-custom.webp",
  },
  {
    title: "Contenitori Embedded",
    description:
      "Soluzioni compatte per schede singole e sistemi embedded.",
    tag: "Embedded",
    image: "/images/products/09-embedded.webp",
  },
  {
    title: "Impregnazione",
    description:
      "Impregnazione e trattamenti superficiali per protezione e durabilità.",
    tag: "Finiture",
    image: "/images/products/10-impregnazione.webp",
  },
  {
    title: "Scatole per alimentatori",
    description:
      "Contenitori specializzati per unità di alimentazione e power supply.",
    tag: "Power",
    image: "/images/products/11-alimentatori.webp",
  },
  {
    title: "M T L senza stampo",
    description:
      "Realizzazione senza stampo per prototipi e piccole tirature.",
    tag: "MTL",
    image: "/images/products/12-mtl.webp",
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
              <Card className="group h-full overflow-hidden border-border/60 bg-white/80 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow">
                {product.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
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
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
