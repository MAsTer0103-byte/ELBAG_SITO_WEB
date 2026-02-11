import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";

export async function Nav() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center gap-2">
          <div className="flex flex-col gap-1">
            <Image
              src="/images/brand/logo.webp"
              alt="ELBAG Logo"
              width={100}
              height={40}
              className="h-auto w-24"
            />
            <Image
              src="/images/brand/tricolore.webp"
              alt="Italian flag"
              width={100}
              height={4}
              className="h-1 w-24"
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="#chi-siamo" className="hover:text-foreground">
            {t("about")}
          </Link>
          <Link href="#prodotti" className="hover:text-foreground">
            {t("products")}
          </Link>
          <Link href="#competenze" className="hover:text-foreground">
            {t("skills")}
          </Link>
          <Link href="#contatti" className="hover:text-foreground">
            {t("contacts")}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild size="sm" className="md:hidden">
            <Link href="#contatti">{t("contacts")}</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contatti">{t("cta")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
