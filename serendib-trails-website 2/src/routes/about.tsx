import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Users, Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-tea.jpg";
import kandy from "@/assets/dest-kandy.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Serendib Trails Sri Lanka" },
      { name: "description", content: "Meet the local family team behind Serendib Trails, crafting private Sri Lanka journeys since 2012." },
      { property: "og:title", content: "About Us — Serendib Trails Sri Lanka" },
      { property: "og:description", content: "A local family team crafting private Sri Lanka journeys since 2012." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Users, title: "Locally owned", text: "Every rupee supports Sri Lankan guides, drivers and family-run stays." },
  { icon: Leaf, title: "Responsible travel", text: "Ethical wildlife safaris and plastic-free journeys wherever possible." },
  { icon: Award, title: "Licensed & trusted", text: "Registered with the Sri Lanka Tourism Development Authority." },
];

function AboutPage() {
  return (
    <>
      <PageHero image={hero} eyebrow="About us" title="Born on the island, sharing it with the world" />
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-primary">Our story</p>
          <h2 className="mt-3 text-4xl font-medium md:text-5xl">From one tuk-tuk to a family of guides</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>
              Serendib Trails began in 2012 when our founder started showing visiting friends around
              Kandy in his father's tuk-tuk. Word spread, and today we're a team of 40 guides,
              drivers and travel planners.
            </p>
            <p>
              "Serendib" is the ancient name for Sri Lanka — and the root of the word serendipity.
              That's what we hope every guest finds: happy, unexpected moments around every bend.
            </p>
          </div>
          <Button asChild variant="forest" size="xl" className="mt-8">
            <Link to="/contact">Talk to our team</Link>
          </Button>
        </div>
        <img
          src={kandy}
          alt="Temple of the Tooth in Kandy at dusk"
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
        />
      </section>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card p-8 shadow-soft">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-gold text-accent-foreground">
                <v.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-medium">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
