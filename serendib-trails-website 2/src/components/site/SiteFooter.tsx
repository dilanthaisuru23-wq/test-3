import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Palmtree, Phone } from "lucide-react";
import { company } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-full bg-gradient-gold text-accent-foreground">
              <Palmtree className="size-5" />
            </span>
            <span className="font-display text-2xl font-semibold">{company.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-forest-foreground/70">
            Locally owned tour specialists crafting private journeys across the pearl of the Indian
            Ocean since 2012.
          </p>
        </div>
        <div>
          <h4 className="eyebrow text-accent">Explore</h4>
          <ul className="mt-4 space-y-2 text-forest-foreground/80">
            <li><Link to="/destinations" className="hover:text-accent">Destinations</Link></li>
            <li><Link to="/tours" className="hover:text-accent">Tour packages</Link></li>
            <li><Link to="/about" className="hover:text-accent">About us</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/80">
            <li className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0" />{company.phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 size-4 shrink-0" />{company.email}</li>
            <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0" />{company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10 py-6 text-center text-xs text-forest-foreground/50">
        © {new Date().getFullYear()} {company.name}. Made with love in Sri Lanka.
      </div>
    </footer>
  );
}
