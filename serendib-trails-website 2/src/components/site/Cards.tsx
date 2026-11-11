import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Destination, Tour } from "@/lib/site-data";

export function DestinationCard({ d, tall = false }: { d: Destination; tall?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-overlay shadow-soft ${tall ? "aspect-[3/4]" : "aspect-[4/5]"}`}
    >
      <img
        src={d.image}
        alt={`${d.name}, Sri Lanka`}
        loading="lazy"
        width={1024}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-on-image">
        <p className="eyebrow text-accent">{d.region}</p>
        <h3 className="mt-2 text-3xl font-medium">{d.name}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm text-on-image/85 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {d.blurb}
        </p>
      </div>
      <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-on-image/15 text-on-image backdrop-blur-md transition-all group-hover:bg-accent group-hover:text-accent-foreground">
        <ArrowUpRight className="size-5" />
      </span>
    </article>
  );
}

export function TourCard({ t }: { t: Tour }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={t.image}
          alt={t.name}
          loading="lazy"
          width={1920}
          height={1088}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur">
          <Calendar className="size-3.5" /> {t.days} days
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-medium">{t.name}</h3>
        <p className="mt-2 flex flex-wrap items-center gap-1 text-xs font-semibold text-muted-foreground">
          <MapPin className="size-3.5 text-primary" />
          {t.route.join(" → ")}
        </p>
        <p className="mt-4 text-muted-foreground">{t.summary}</p>
        <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
          {t.includes.map((inc) => (
            <li key={inc} className="flex items-start gap-1.5">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {inc}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between pt-7">
          <div>
            <p className="text-xs text-muted-foreground">From, per person</p>
            <p className="font-display text-3xl font-semibold text-primary">${t.priceUsd}</p>
          </div>
          <Button asChild variant="forest">
            <Link to="/contact" search={{ tour: t.slug }}>Book now</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
