type Props = { image: string; eyebrow: string; title: string; text?: string };

export function PageHero({ image, eyebrow, title, text }: Props) {
  return (
    <section className="relative flex h-[62vh] min-h-[420px] items-end overflow-hidden bg-overlay">
      <img src={image} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full animate-kenburns object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 text-on-image">
        <p className="eyebrow animate-rise text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl animate-rise text-5xl font-medium leading-tight md:text-7xl" style={{ animationDelay: "120ms" }}>
          {title}
        </h1>
        {text && (
          <p className="mt-4 max-w-xl animate-rise text-lg text-on-image/85" style={{ animationDelay: "240ms" }}>
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
