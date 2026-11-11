import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { TourCard } from "@/components/site/Cards";
import { tours } from "@/lib/site-data";
import hero from "@/assets/hero-sigiriya.jpg";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Sri Lanka Tour Packages — Serendib Trails" },
      { name: "description", content: "Private Sri Lanka tour packages from 4 to 12 days, with chauffeur guides, hotels and experiences included." },
      { property: "og:title", content: "Sri Lanka Tour Packages — Serendib Trails" },
      { property: "og:description", content: "Private tour packages across Sri Lanka, from 4 to 12 days." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ToursPage,
});

function ToursPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Tour packages"
        title="Find your perfect Sri Lanka journey"
        text="Every tour is private and fully customisable — change the route, hotels or length anytime."
      />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {tours.map((t) => (
            <TourCard key={t.slug} t={t} />
          ))}
        </div>
      </section>
    </>
  );
}
