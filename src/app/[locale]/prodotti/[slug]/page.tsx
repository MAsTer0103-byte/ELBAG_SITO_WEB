import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { productCategories } from "@/data/productCategories";
export const dynamic = "force-dynamic";

type ProductCategoryPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { locale, slug } = await params;
  const category = productCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <section className="section-pad bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-4">
          <Link
            href={`/${locale}#prodotti`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Torna ai prodotti
          </Link>
          <Badge className="w-fit rounded-full bg-primary/10 text-primary hover:bg-primary/15">
            {category.tag}
          </Badge>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {category.title}
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            {category.description}
          </p>
        </div>

        <Card className="mb-12 overflow-hidden border-border/60 bg-white/80 shadow-soft">
          <div className="relative h-64 w-full bg-white p-3 md:h-80">
            <div className="relative h-full w-full">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>

        {category.subcategories && category.subcategories.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Sottocategorie
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {category.subcategories.map((sub) => (
                <Card
                  key={sub.title}
                  className="group h-full overflow-hidden border-border/60 bg-white/80 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-white p-2">
                    <div className="relative h-full w-full">
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {sub.title}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
