import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          ELBAG SIMP
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="#chi-siamo" className="hover:text-foreground">
            Chi siamo
          </Link>
          <Link href="#prodotti" className="hover:text-foreground">
            Prodotti
          </Link>
          <Link href="#competenze" className="hover:text-foreground">
            Competenze
          </Link>
          <Link href="#contatti" className="hover:text-foreground">
            Contatti
          </Link>
        </nav>
        <Button asChild size="sm" className="md:hidden">
          <Link href="#contatti">Contatti</Link>
        </Button>
        <Button asChild className="hidden md:inline-flex">
          <Link href="#contatti">Contattaci</Link>
        </Button>
      </div>
    </header>
  );
}
