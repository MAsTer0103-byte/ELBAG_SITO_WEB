"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero-grid">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-8 top-16 h-56 w-56 rounded-full bg-slate-900/10 blur-3xl" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item}>
            <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/15">
              Dal 1985. Filiera interna completa
            </Badge>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl"
          >
            Contenitori tecnici in plastica per elettronica, domotica e
            automazione.
          </motion.h1>
          <motion.p variants={item} className="max-w-2xl text-lg text-slate-600">
            Progettiamo e produciamo soluzioni custom e modulari con stampaggio
            ad alta precisione, finiture speciali e collaudo interno.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contatti">Richiedi un preventivo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#prodotti">Catalogo prodotti</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px" }}
          className="grid gap-4 md:grid-cols-3"
        >
          {[
            {
              title: "40+ anni di esperienza",
              body: "Consulenza tecnica e design for manufacturing.",
            },
            {
              title: "Produzione interna",
              body: "Stampi, CNC, finiture e controlli qualità integrati.",
            },
            {
              title: "Compliance",
              body: "Processi conformi a standard RoHS e REACH.",
            },
          ].map((itemData) => (
            <motion.div
              key={itemData.title}
              variants={item}
              className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {itemData.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{itemData.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
