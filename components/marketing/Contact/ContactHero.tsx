import { contactHeroData } from "@/data/contactData";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-title"
      className="relative w-full h-[45vh] min-h-[340px] max-h-[460px] bg-brand-primary-dark flex items-center justify-center overflow-hidden font-body"
    >
      {/* 1. BACKGROUND AMBIENCE (Subtle Gold Geometric Grid) */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#b08d57 1px, transparent 1px), linear-gradient(90deg, #b08d57 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Central Warm Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-accent opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

      {/* 2. TEXT CONTENT */}
      <div className="relative z-10 text-center px-6 mt-4">
        <h1
          id="contact-hero-title"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
        >
          {contactHeroData.titlePrefix} <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-accent to-white">
            {contactHeroData.titleAccent}
          </span>
          {/* Hidden keywords for SEO */}
          <span className="sr-only">
            {contactHeroData.seoSubtitle}
          </span>
        </h1>

        <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          {contactHeroData.description}
        </p>
      </div>
    </section>
  );
}
