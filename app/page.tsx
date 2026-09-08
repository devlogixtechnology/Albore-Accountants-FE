import Link from "next/link";

const services = [
  {
    title: "Accounting",
    description:
      "Reliable accounting support designed to keep your financial information organized and clear.",
  },
  {
    title: "Tax",
    description:
      "Practical tax support to help individuals and businesses manage their tax responsibilities.",
  },
  {
    title: "Audit",
    description:
      "Structured audit services focused on accuracy, transparency, and confidence in your financial information.",
  },
  {
    title: "Advisory",
    description:
      "Professional financial guidance to support informed business and financial decisions.",
  },
];

export default function HomePage() {
  return (
    <div className="stack" style={{ gap: "4rem" }}>
      {/* Hero */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          alignItems: "center",
          padding: "3rem 0",
        }}
      >
        <div className="stack">
          <p className="muted">Professional Accounting & Advisory</p>

          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "var(--weight-heading)",
              lineHeight: 1.05,
            }}
          >
            Clear financial guidance for confident decisions.
          </h1>

          <p
            className="muted"
            style={{ maxWidth: "600px", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Alboré provides professional accounting, tax, audit, and advisory
            services designed to help clients manage their financial needs with
            clarity and confidence.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="button">
              Get in Touch
            </Link>

            <Link
              href="/services"
              className="button"
              style={{
                background: "var(--color-surface-elevated)",
                color: "var(--color-text-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div
          className="card"
          style={{
            minHeight: "320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="stack">
            <strong
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
              }}
            >
              Alboré
            </strong>
            <p className="muted">
              Professional financial services with a focus on clarity and
              trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="stack">
        <div>
          <p className="muted">What we offer</p>
          <h2 className="title">Our Services</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {services.map((service) => (
            <article key={service.title} className="card stack">
              <h3 style={{ margin: 0 }}>{service.title}</h3>
              <p className="muted" style={{ lineHeight: 1.6 }}>
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div>
          <Link href="/services" className="button">
            View All Services
          </Link>
        </div>
      </section>

      {/* Trust */}
      <section className="card stack">
        <p className="muted">Why Alboré</p>
        <h2 className="title">A professional approach built around clarity.</h2>

        <p className="muted" style={{ lineHeight: 1.7, maxWidth: "800px" }}>
          We aim to make financial services easier to understand and easier to
          manage through a professional, structured approach.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          <div>
            <strong>Professional</strong>
            <p className="muted">Structured financial support.</p>
          </div>

          <div>
            <strong>Clear</strong>
            <p className="muted">Straightforward communication.</p>
          </div>

          <div>
            <strong>Client-focused</strong>
            <p className="muted">Services built around client needs.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="card"
        style={{
          textAlign: "center",
          padding: "3rem 1.5rem",
        }}
      >
        <div className="stack" style={{ alignItems: "center" }}>
          <h2 className="title">Ready to discuss your financial needs?</h2>

          <p className="muted">
            Get in touch with the Alboré team to learn more about our services.
          </p>

          <Link href="/contact" className="button">
            Contact Alboré
          </Link>
        </div>
      </section>
    </div>
  );
}