import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, Quote, ShieldCheck, Star } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { IslandMap } from "@/components/site/IslandMap";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { TourCard } from "@/components/site/Cards";
import { Button } from "@/components/ui/button";
import { testimonials, tours } from "@/lib/site-data";
import stilt from "@/assets/dest-stilt.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Serendib Trails — Private Sri Lanka Tours" },
      {
        name: "description",
        content:
          "Discover Sigiriya, Ella, Kandy, Yala and golden southern beaches with Sri Lanka's friendly local tour experts.",
      },
      { property: "og:title", content: "Serendib Trails — Private Sri Lanka Tours" },
      {
        property: "og:description",
        content: "Tailor-made journeys to Sri Lanka's most beautiful places.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "12+", label: "Years guiding" },
  { value: "8,400", label: "Happy travellers" },
  { value: "4.9", label: "Average rating" },
  { value: "60+", label: "Places covered" },
];

const reasons = [
  { icon: Compass, title: "Tailor-made routes", text: "Every itinerary is built around your pace, budget and interests." },
  { icon: HeartHandshake, title: "Local chauffeur guides", text: "Licensed, English-speaking drivers who know every hidden corner." },
  { icon: ShieldCheck, title: "24/7 on-trip support", text: "A real person on WhatsApp whenever you need us, day or night." },
];

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-primary md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <IslandMap />

      {/* Why us */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
          <div className="relative">
            <img
              src={stilt}
              alt="Stilt fishermen at sunset in Koggala"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gradient-gold p-6 text-accent-foreground shadow-gold md:-right-8">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 font-display text-2xl font-semibold">Rated 4.9 / 5</p>
              <p className="text-sm opacity-80">by 2,100+ travellers</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-accent">Why travel with us</p>
            <h2 className="mt-3 text-4xl font-medium md:text-6xl">
              Sri Lanka, through the eyes of locals
            </h2>
            <p className="mt-6 max-w-lg text-forest-foreground/75">
              We're a Colombo-based family business. We don't sell packages off a shelf — we design
              journeys with you, then take care of every detail along the way.
            </p>
            <div className="mt-10 space-y-6">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest-foreground/10 text-accent">
                    <r.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-medium">{r.title}</h3>
                    <p className="mt-1 text-forest-foreground/70">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow text-primary">Popular tour packages</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-medium md:text-6xl">
            Journeys our guests love
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.slice(0, 3).map((t) => (
            <TourCard key={t.slug} t={t} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="forest" size="xl">
            <Link to="/tours">See all tours</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow text-center text-primary">Traveller stories</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl bg-card p-8 shadow-soft">
                <Quote className="size-8 text-accent" />
                <blockquote className="mt-4 font-display text-xl leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-bold">{t.name}</span>
                  <span className="text-muted-foreground"> · {t.from}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <PhotoGallery />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
          <h2 className="mx-auto max-w-2xl text-4xl font-medium md:text-5xl">
            Ready to discover the pearl of the Indian Ocean?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/75">
            Tell us your dates and dreams — we'll send a free custom itinerary within 24 hours.
          </p>
          <Button asChild variant="gold" size="xl" className="mt-8">
            <Link to="/contact">Get a free quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
