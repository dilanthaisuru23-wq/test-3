import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company, tours } from "@/lib/site-data";
import hero from "@/assets/hero-mirissa.jpg";

const searchSchema = z.object({ tour: z.string().optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact & Plan Your Trip — Serendib Trails" },
      { name: "description", content: "Get a free, tailor-made Sri Lanka itinerary. Call, WhatsApp or send us your travel plans." },
      { property: "og:title", content: "Contact & Plan Your Trip — Serendib Trails" },
      { property: "og:description", content: "Get a free, tailor-made Sri Lanka itinerary within 24 hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

function ContactPage() {
  const { tour } = Route.useSearch();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Thank you! We'll reply with your itinerary within 24 hours.");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero image={hero} eyebrow="Contact" title="Let's plan your Sri Lanka trip" text="Free custom itinerary within 24 hours. No obligation." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <h2 className="text-3xl font-medium md:text-4xl">Talk to a local expert</h2>
          <p className="text-muted-foreground">Our planners reply 7 days a week, 8am – 10pm Sri Lanka time.</p>
          {[
            { icon: Phone, label: "Call us", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
            { icon: MessageCircle, label: "WhatsApp", value: company.phone, href: `https://wa.me/${company.whatsapp}` },
            { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
            { icon: MapPin, label: "Office", value: company.address },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <c.icon className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.label}</span>
                <span className="font-semibold">{c.value}</span>
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-card p-8 shadow-soft md:p-10 lg:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required className="h-11 bg-card" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required className="h-11 bg-card" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Arrival date</Label>
              <Input id="date" name="date" type="date" className="h-11 bg-card" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Travellers</Label>
              <Input id="guests" name="guests" type="number" min={1} defaultValue={2} className="h-11 bg-card" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tour">Interested tour</Label>
            <select id="tour" name="tour" defaultValue={tour ?? "custom"} className={selectClass}>
              <option value="custom">Custom trip — help me plan</option>
              {tours.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.name} ({t.days} days)
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your dream trip</Label>
            <Textarea id="message" name="message" rows={5} className="bg-card" placeholder="Beaches, wildlife, culture, budget…" />
          </div>
          <Button type="submit" variant="gold" size="xl" className="w-full">
            Send my request
          </Button>
          {sent && <p className="text-center text-sm font-semibold text-primary">Request received — talk soon!</p>}
        </form>
      </section>
    </>
  );
}
