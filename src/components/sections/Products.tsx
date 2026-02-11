"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { productCategories } from "@/data/productCategories";

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
  const locale = useLocale();

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
          {productCategories.map((product) => (
            <motion.div key={product.title} variants={item}>
              <Link
                href={`/${locale}/prodotti/${product.slug}`}
                className="block h-full"
              >
                <Card className="group h-full overflow-hidden border-border/60 bg-white/80 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow">
                  {product.image && (
                    <div className="relative h-60 w-full overflow-hidden bg-white p-2">
                      <div className="relative h-full w-full">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
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
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
