import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { Button } from "@/components/ui/button";
import { HeroClouds } from "@/components/site/HeroClouds";
import { heroSlides } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const SLIDE_MS = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    const t = setTimeout(() => go(index + 1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, go]);

  // Mouse parallax: write CSS vars directly, no re-render.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };

  const slide = heroSlides[index] ?? heroSlides[0]!;

  return (
    <section
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-overlay"
      aria-roledescription="carousel"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.place}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt={`${s.place}, Sri Lanka`}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn("h-full w-full object-cover", i === index && "animate-kenburns")}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-hero" />

      <HeroClouds />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-24 md:px-8">
        <div key={index} className="max-w-3xl text-on-image text-shadow-lg">
          <p className="eyebrow animate-rise text-on-image/90">Travel, with feeling · {slide.place}</p>
          <h1
            className="mt-6 animate-rise text-5xl font-normal leading-[1.02] md:text-7xl lg:text-[6.5rem]"
            style={{ animationDelay: "120ms" }}
          >
            {slide.title} <em className="font-normal text-accent">{slide.accent}</em>
          </h1>
          <p
            className="mt-6 max-w-xl animate-rise text-lg text-on-image/85 md:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            {slide.text}
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
            <Button asChild variant="gold" size="xl">
              <Link to="/tours">
                Find your journey <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/about">Our approach</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide controls — right side, above the clouds */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-4 md:right-8 lg:flex">
        {heroSlides.map((s, i) => (
          <button
            key={s.place}
            onClick={() => go(i)}
            aria-label={`Show ${s.place}`}
            className="group flex items-center gap-3"
          >
            <span
              className={cn(
                "text-xs font-semibold tracking-wide transition-colors",
                i === index ? "text-on-image" : "text-on-image/50 group-hover:text-on-image/80",
              )}
            >
              0{i + 1} · {s.place}
            </span>
            <span className="block h-0.5 w-12 overflow-hidden rounded-full bg-on-image/25">
              {i === index && (
                <span
                  key={index}
                  className="block h-full animate-progress bg-accent"
                  style={{ ["--slide-duration" as string]: `${SLIDE_MS}ms` }}
                />
              )}
            </span>
          </button>
        ))}
        <div className="mt-2 flex gap-2">
          <Button variant="glass" size="icon" className="size-11" onClick={() => go(index - 1)} aria-label="Previous slide">
            <ChevronLeft />
          </Button>
          <Button variant="glass" size="icon" className="size-11" onClick={() => go(index + 1)} aria-label="Next slide">
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Mobile dots */}
      <div className="absolute inset-x-0 bottom-28 z-10 flex justify-center gap-2 lg:hidden">
        {heroSlides.map((s, i) => (
          <button
            key={s.place}
            onClick={() => go(i)}
            aria-label={`Show ${s.place}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-8 bg-accent" : "w-3 bg-on-image/50",
            )}
          />
        ))}
      </div>
    </section>
  );
}
