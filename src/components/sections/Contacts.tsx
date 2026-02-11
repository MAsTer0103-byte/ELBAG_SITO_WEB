import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Contacts() {
  return (
    <section id="contatti" className="section-pad">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="mb-12 space-y-4">
          <Badge className="w-fit rounded-full bg-primary/10 text-primary hover:bg-primary/15">
            Contatti
          </Badge>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Parliamo del tuo progetto
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Scrivici o chiamaci per informazioni tecniche, personalizzazioni e
            preventivi.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/60 bg-white/80 p-6 shadow-soft">
            <h3 className="text-base font-semibold text-slate-900">Indirizzo</h3>
            <p className="mt-3 text-sm text-slate-600">Via Watt, n. 15/7</p>
            <p className="text-sm text-slate-600">Spedizioni: Via Watt n. 37</p>
            <p className="text-sm text-slate-600">20143 Milano (MI)</p>
          </Card>
          <Card className="border-border/60 bg-white/80 p-6 shadow-soft">
            <h3 className="text-base font-semibold text-slate-900">Telefono</h3>
            <p className="mt-3 text-sm text-slate-600">
              <a href="tel:+390258106288" className="hover:text-slate-900">
                +39 02 5810 6288
              </a>
            </p>
            <p className="text-sm text-slate-600">
              <a href="tel:+390289401339" className="hover:text-slate-900">
                +39 02 8940 1339
              </a>
            </p>
          </Card>
          <Card className="border-border/60 bg-white/80 p-6 shadow-soft">
            <h3 className="text-base font-semibold text-slate-900">Email</h3>
            <p className="mt-3 text-sm text-slate-600">
              <a
                href="mailto:commerciale@elbag.net"
                className="hover:text-slate-900"
              >
                commerciale@elbag.net
              </a>
            </p>
            <p className="text-sm text-slate-600">
              <a
                href="mailto:elbagsimp@lamiapec.it"
                className="hover:text-slate-900"
              >
                elbagsimp@lamiapec.it
              </a>
            </p>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/70 bg-slate-900 px-6 py-8 text-white">
          <div>
            <p className="text-sm text-white/70">Consulenza tecnica rapida</p>
            <p className="text-xl font-semibold">
              Inviaci la tua richiesta, rispondiamo in 24-48h.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <a href="mailto:commerciale@elbag.net">Scrivi una mail</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
