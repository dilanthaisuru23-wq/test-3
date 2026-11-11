import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { destinations } from "@/lib/site-data";
import hero from "@/assets/hero-ella.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations in Sri Lanka — Serendib Trails" },
      { name: "description", content: "Sigiriya, Kandy, Ella, Nuwara Eliya, Yala, Galle and Mirissa — explore Sri Lanka's most beautiful places." },
      { property: "og:title", content: "Destinations in Sri Lanka — Serendib Trails" },
      { property: "og:description", content: "Explore Sri Lanka's most beautiful places, from ancient fortresses to golden beaches." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Destinations"
        title="Beautiful places across the island"
        text="Ancient cities, misty mountains, wild jungles and endless golden coastline."
      />
      <section className="mx-auto max-w-7xl space-y-24 px-6 py-24">
        {destinations.map((d, i) => (
          <article key={d.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className={`overflow-hidden rounded-3xl shadow-soft ${i % 2 ? "md:order-2" : ""}`}>
              <img
                src={d.image}
                alt={`${d.name}, Sri Lanka`}
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
            <div>
              <p className="eyebrow text-primary">0{i + 1} · {d.region}</p>
              <h2 className="mt-3 text-4xl font-medium md:text-5xl">{d.name}</h2>
              <p className="mt-5 text-lg text-muted-foreground">{d.blurb}</p>
              <ul className="mt-6 space-y-2">
                {d.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 font-medium">
                    <span className="grid size-6 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3.5" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
