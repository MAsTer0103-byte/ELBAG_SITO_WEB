export type ProductSubcategory = {
  title: string;
  image: string;
};

export type ProductCategory = {
  title: string;
  slug: string;
  description: string;
  tag: string;
  image: string;
  subcategories?: ProductSubcategory[];
};

export const productCategories: ProductCategory[] = [
  {
    title: "Modulari guida DIN",
    slug: "modulari-guida-din",
    description:
      "Soluzioni standard modulari per montaggio su guida DIN, disponibili in diverse configurazioni.",
    tag: "DIN",
    image: "/images/products/01-modulari-din.webp",
    subcategories: [
      {
        title: "MR/X",
        image: "/images/categories/modulari-guida-din/01-mr-x.webp",
      },
      {
        title: "MR/TK",
        image: "/images/categories/modulari-guida-din/02-mr-tk.webp",
      },
      {
        title: "MR/TKAR",
        image: "/images/categories/modulari-guida-din/03-mr-tkar.webp",
      },
      {
        title: "MR/HD",
        image: "/images/categories/modulari-guida-din/04-mr-hd.webp",
      },
      {
        title: "MR/BHD",
        image: "/images/categories/modulari-guida-din/05-mr-bhd.webp",
      },
      {
        title: "MR/K",
        image: "/images/categories/modulari-guida-din/06-mr-k.webp",
      },
      {
        title: "MR/A",
        image: "/images/categories/modulari-guida-din/07-mr-a.webp",
      },
      {
        title: "MR CB..AR..CK..C",
        image: "/images/categories/modulari-guida-din/08-mr-cb-ar-ck-c.webp",
      },
      {
        title: "Contenitori Embedded",
        image: "/images/categories/modulari-guida-din/09-contenitori-embedded.webp",
      },
    ],
  },
  {
    title: "Verticali guida DIN",
    slug: "verticali-guida-din",
    description:
      "Contenitori a sviluppo verticale per applicazioni spazialmente ottimizzate.",
    tag: "DIN",
    image: "/images/products/02-verticali-din.webp",
  },
  {
    title: "Supporti guida DIN",
    slug: "supporti-guida-din",
    description:
      "Supporti e accessori per il fissaggio e il montaggio di apparecchiature.",
    tag: "Accessori",
    image: "/images/products/03-supporti-din.webp",
  },
  {
    title: "Domotica",
    slug: "domotica",
    description:
      "Contenitori dedicati per sistemi domotici e automazione domestica.",
    tag: "Domotica",
    image: "/images/products/04-domotica.webp",
  },
  {
    title: "Domotica da incasso",
    slug: "domotica-da-incasso",
    description:
      "Soluzioni incassabili a parete per integrazione architettonica perfetta.",
    tag: "Incasso",
    image: "/images/products/05-domotica-incasso.webp",
  },
  {
    title: "Domotica a parete",
    slug: "domotica-a-parete",
    description:
      "Contenitori a parete per sistemi di controllo e automazione.",
    tag: "Parete",
    image: "/images/products/06-domotica-parete.webp",
  },
  {
    title: "Scatole con fissaggio",
    slug: "scatole-con-fissaggio",
    description:
      "Contenitori robusti con sistemi di fissaggio a parete certificati.",
    tag: "Murale",
    image: "/images/products/07-scatole-fissaggio.webp",
  },
  {
    title: "Contenitori custom",
    slug: "contenitori-custom",
    description:
      "Progettazione e realizzazione di contenitori personalizzati secondo le vostre specifiche.",
    tag: "Custom",
    image: "/images/products/08-custom.webp",
  },
  {
    title: "Contenitori Embedded",
    slug: "contenitori-embedded",
    description:
      "Soluzioni compatte per schede singole e sistemi embedded.",
    tag: "Embedded",
    image: "/images/products/09-embedded.webp",
  },
  {
    title: "Impregnazione",
    slug: "impregnazione",
    description:
      "Impregnazione e trattamenti superficiali per protezione e durabilita.",
    tag: "Finiture",
    image: "/images/products/10-impregnazione.webp",
  },
  {
    title: "Scatole per alimentatori",
    slug: "scatole-per-alimentatori",
    description:
      "Contenitori specializzati per unita di alimentazione e power supply.",
    tag: "Power",
    image: "/images/products/11-alimentatori.webp",
  },
  {
    title: "M T L senza stampo",
    slug: "m-t-l-senza-stampo",
    description:
      "Realizzazione senza stampo per prototipi e piccole tirature.",
    tag: "MTL",
    image: "/images/products/12-mtl.webp",
  },
];
