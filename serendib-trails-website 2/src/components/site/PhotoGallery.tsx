import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import sigiriya from "@/assets/hero-sigiriya.jpg";
import ella from "@/assets/hero-ella.jpg";
import mirissa from "@/assets/hero-mirissa.jpg";
import tea from "@/assets/hero-tea.jpg";
import kandy from "@/assets/dest-kandy.jpg";
import galle from "@/assets/dest-galle.jpg";
import yala from "@/assets/dest-yala.jpg";
import stilt from "@/assets/dest-stilt.jpg";
import adamsPeak from "@/assets/gallery-adams-peak.jpg";
import elephants from "@/assets/gallery-elephants.jpg";
import dambulla from "@/assets/gallery-dambulla.jpg";
import arugam from "@/assets/gallery-arugam.jpg";

const photos = [
  { src: adamsPeak, place: "Adam's Peak", note: "Sunrise above the clouds", span: "md:row-span-2" },
  { src: elephants, place: "Minneriya", note: "The great elephant gathering", span: "md:col-span-2" },
  { src: dambulla, place: "Dambulla", note: "Golden cave temples", span: "md:row-span-2" },
  { src: mirissa, place: "Mirissa", note: "Palm-fringed sunsets", span: "" },
  { src: kandy, place: "Kandy", note: "Temple of the Tooth", span: "" },
  { src: arugam, place: "Arugam Bay", note: "Surf and fishing boats", span: "md:col-span-2" },
  { src: stilt, place: "Koggala", note: "Stilt fishermen", span: "md:row-span-2" },
  { src: tea, place: "Nuwara Eliya", note: "Tea pickers at dawn", span: "md:col-span-2" },
  { src: yala, place: "Yala", note: "The Sri Lankan leopard", span: "" },
  { src: galle, place: "Galle Fort", note: "Lighthouse on the ramparts", span: "" },
  { src: ella, place: "Ella", note: "Nine Arch Bridge", span: "md:col-span-2" },
  { src: sigiriya, place: "Sigiriya", note: "The Lion Rock", span: "" },
];

export function PhotoGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const current = open === null ? null : photos[open];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="text-center">
          <p className="eyebrow text-primary">Gallery</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-5xl font-normal leading-tight md:text-7xl">
            The island, <em className="text-accent">in pictures.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            A few of the places our travellers fall in love with.
          </p>
        </div>

        <div className="mt-14 grid grid-flow-dense auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((p, i) => (
            <button
              key={p.place}
              onClick={() => setOpen(i)}
              className={cn(
                "group relative overflow-hidden rounded-3xl text-left shadow-soft",
                p.span,
              )}
            >
              <img
                src={p.src}
                alt={`${p.place}, Sri Lanka`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-card opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-on-image transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-display text-2xl">{p.place}</p>
                <p className="text-sm text-on-image/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {p.note}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-5xl overflow-hidden border-0 bg-card p-0">
          {current && (
            <>
              <img src={current.src} alt={current.place} className="max-h-[78vh] w-full object-cover" />
              <div className="p-5">
                <DialogTitle className="font-display text-2xl font-normal">{current.place}</DialogTitle>
                <p className="text-muted-foreground">{current.note}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
