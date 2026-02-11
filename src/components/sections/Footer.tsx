import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">ELBAG SIMP</p>
            <p className="text-sm text-slate-600">
              Contenitori tecnici in plastica per elettronica e automazione.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href="#chi-siamo" className="hover:text-slate-900">
              Chi siamo
            </Link>
            <Link href="#prodotti" className="hover:text-slate-900">
              Prodotti
            </Link>
            <Link href="#contatti" className="hover:text-slate-900">
              Contatti
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-6 text-xs text-slate-500 md:grid-cols-2">
          <div>
            <p>
              <strong>ELBAG SIMP S.r.l.</strong> – Via Watt, n. 15/7 20143 Milano
            </p>
            <p>P.IVA 13286120152 – REA MI-1634542 – C.S. € 10.200,00 i.v.</p>
          </div>
          <div className="md:text-right">
            <p>commerciale@elbag.net – elbagsimp@lamiapec.it</p>
            <p>Tel: +39 02 5810 6288</p>
            <p>&copy; 1985-2026 ELBAG SIMP. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
