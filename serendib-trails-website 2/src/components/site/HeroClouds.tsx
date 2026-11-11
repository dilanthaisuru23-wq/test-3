import cloudBank from "@/assets/cloud-bank.png";
import cloudPuff from "@/assets/cloud-puff.png";

/**
 * Layered transparent cloud images drifting at
 * different speeds and depths; the parent sets --mx/--my for mouse parallax.
 */
const puffs = [
  { top: "68%", width: "34vw", speed: "95s", delay: "-10s", depth: "40px", opacity: 0.55 },
  { top: "58%", width: "26vw", speed: "70s", delay: "-45s", depth: "60px", opacity: 0.6 },
  { top: "8%", width: "18vw", speed: "120s", delay: "-80s", depth: "25px", opacity: 0.25 },
];

export function HeroClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {puffs.map((p, i) => (
        <div
          key={i}
          className="parallax absolute left-0"
          style={{ top: p.top, ["--depth" as string]: p.depth }}
        >
          <img
            src={cloudPuff}
            alt=""
            width={960}
            height={576}
            className="animate-cloud-cross"
            style={{
              width: p.width,
              opacity: p.opacity,
              animationDelay: p.delay,
              ["--cloud-speed" as string]: p.speed,
            }}
          />
        </div>
      ))}

      {/* back bank */}
      <div className="parallax absolute -inset-x-[10%] -bottom-[4%]" style={{ ["--depth" as string]: "18px" }}>
        <img
          src={cloudBank}
          alt=""
          width={1440}
          height={576}
          className="animate-cloud-sway w-full opacity-60"
          style={{ ["--cloud-speed" as string]: "40s" }}
        />
      </div>
      {/* front bank */}
      <div className="parallax absolute -inset-x-[15%] -bottom-[20%]" style={{ ["--depth" as string]: "45px" }}>
        <img
          src={cloudBank}
          alt=""
          width={1440}
          height={576}
          className="animate-cloud-sway w-full -scale-x-100 opacity-95"
          style={{ ["--cloud-speed" as string]: "26s", animationDirection: "alternate-reverse" }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
