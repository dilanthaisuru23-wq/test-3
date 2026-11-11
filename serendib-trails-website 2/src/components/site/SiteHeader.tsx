import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Palmtree, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/destinations", label: "Destinations" },
  { to: "/tours", label: "Journeys" },
  { to: "/about", label: "Why us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-[2rem] border border-on-image/25 p-2.5 backdrop-blur-xl transition-all duration-500",
          scrolled || open ? "bg-forest/85 shadow-soft" : "bg-on-image/10",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 rounded-2xl bg-card px-4 py-2.5 text-forest shadow-soft md:px-6"
          >
            <Palmtree className="size-5 text-accent" />
            <span className="font-display text-base font-semibold leading-none tracking-tight md:text-lg">
              {company.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[15px] font-medium text-on-image/90 transition-colors hover:text-accent data-[status=active]:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="light" className="h-12 px-6 text-base">
              <Link to="/tours">Explore trips</Link>
            </Button>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="mr-2 grid size-11 place-items-center rounded-full bg-card text-forest md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 px-2 pb-2 pt-4 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-3 py-3 font-semibold text-on-image/90 data-[status=active]:bg-on-image/10 data-[status=active]:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="light" className="mt-2 h-12">
              <Link to="/tours">Explore trips</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
