import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";
import { destinations } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const CENTER: [number, number] = [7.75, 80.7];

export function IslandMap() {
  const mapEl = useRef<HTMLDivElement>(null);
  const listEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});
  const [active, setActive] = useState(destinations[0]!.slug);

  // Leaflet touches window, so load it only in the browser.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !mapEl.current || mapRef.current) return;
      const map = L.map(mapEl.current, {
        center: CENTER,
        zoom: 7,
        minZoom: 6,
        maxZoom: 13,
        scrollWheelZoom: false,
      });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      destinations.forEach((d) => {
        const icon = L.divIcon({
          className: "",
          html: `<div class="map-pin" data-pin="${d.slug}"></div>`,
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        });
        const m = L.marker([d.lat, d.lng], { icon, title: d.name })
          .addTo(map)
          .bindPopup(`<strong>${d.name}</strong><br/>${d.tagline}`);
        m.on("click", () => setActive(d.slug));
        markersRef.current[d.slug] = m;
      });
      mapRef.current = map;
      map.whenReady(() => mapEl.current?.setAttribute("data-map-ready", "true"));
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Highlight the active pin and keep its card in view inside the list.
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".map-pin").forEach((el) => {
      el.classList.toggle("is-active", el.dataset["pin"] === active);
    });
    const list = listEl.current;
    const card = list?.querySelector<HTMLElement>(`[data-card="${active}"]`);
    if (list && card) {
      list.scrollTo({ top: card.offsetTop - 8, behavior: "smooth" });
    }
  }, [active]);

  const focus = (slug: string) => {
    const d = destinations.find((x) => x.slug === slug);
    setActive(slug);
    if (d && mapRef.current) {
      mapRef.current.flyTo([d.lat, d.lng], 9, { duration: 1.2 });
      markersRef.current[slug]?.openPopup();
    }
  };

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="text-6xl font-normal leading-[0.95] md:text-8xl">
            Sri Lanka,
            <br />
            <em className="text-accent">in every direction.</em>
          </h2>
          <p className="max-w-sm text-lg text-muted-foreground">
            A real map of the island with our favourite places to start exploring. Tap a place to
            fly there.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative isolate h-[520px] overflow-hidden rounded-[2rem] rounded-tr-[5rem] shadow-soft lg:h-[680px]">
            <div ref={mapEl} className="h-full w-full" aria-label="Map of Sri Lanka" />
          </div>

          <div
            ref={listEl}
            className="relative max-h-[680px] space-y-5 overflow-y-auto pr-1 [scrollbar-width:thin]"
          >
            {destinations.map((d, i) => (
              <button
                key={d.slug}
                data-card={d.slug}
                onClick={() => focus(d.slug)}
                className={cn(
                  "group relative block h-56 w-full overflow-hidden rounded-[2rem] text-left shadow-soft transition-all duration-500",
                  active === d.slug ? "opacity-100" : "opacity-60 hover:opacity-90",
                  i % 2 === 1 && "lg:ml-[-1.25rem] lg:w-[calc(100%+1.25rem)]",
                )}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-overlay/85 via-overlay/45 to-transparent" />
                <div className="relative flex h-full flex-col justify-center p-8 text-on-image">
                  <p className="eyebrow text-accent">
                    0{i + 1} · {d.region}
                  </p>
                  <h3 className="mt-3 text-4xl font-normal md:text-5xl">{d.name}</h3>
                  <p className="mt-2 text-on-image/80">{d.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
