import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="stack" style={{ gap: "3rem" }}>
      {/* Introduction */}
      <section className="stack">
        <p className="muted">About Alboré</p>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "var(--weight-heading)",
            lineHeight: 1.05,
          }}
        >
          Professional financial services with clarity at the center.
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: "760px",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Alboré is a professional accounting and advisory firm focused on
          providing clear, structured, and dependable financial services to
          its clients.
        </p>
      </section>

      {/* Firm History */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          alignItems: "stretch",
        }}
      >
        <div
          className="card"
          style={{
            minHeight: "280px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <span className="muted">Firm history / visual</span>
        </div>

        <div className="card stack">
          <p className="muted">Our Story</p>

          <h2 className="title">Built around professional service.</h2>

          <p className="muted" style={{ lineHeight: 1.7 }}>
            Alboré&apos;s firm history and founding story will be presented here
            once the finalized company information is provided.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        <article className="card stack">
          <p className="muted">Mission</p>
          <h2 className="title">Our Mission</h2>
          <p className="muted">
            Final mission statement to be provided and confirmed by the client.
          </p>
        </article>

        <article className="card stack">
          <p className="muted">Vision</p>
          <h2 className="title">Our Vision</h2>
          <p className="muted">
            Final vision statement to be provided and confirmed by the client.
          </p>
        </article>
      </section>

      {/* Values */}
      <section className="stack">
        <div>
          <p className="muted">Our approach</p>
          <h2 className="title">What We Value</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          <article className="card">
            <h3>Clarity</h3>
            <p className="muted">
              Making financial information easier to understand.
            </p>
          </article>

          <article className="card">
            <h3>Professionalism</h3>
            <p className="muted">
              Maintaining a structured and professional approach.
            </p>
          </article>

          <article className="card">
            <h3>Trust</h3>
            <p className="muted">
              Building dependable professional relationships.
            </p>
          </article>
        </div>
      </section>

      {/* Team Preview */}
      <section className="card stack">
        <p className="muted">Meet the team</p>

        <h2 className="title">Experienced professionals, focused on clients.</h2>

        <p className="muted" style={{ lineHeight: 1.7 }}>
          Team member profiles, credentials, and biographies will be added once
          the required team information and headshots are provided.
        </p>
      </section>

      {/* CTA */}
      <section
        className="card"
        style={{
          textAlign: "center",
          padding: "3rem 1.5rem",
        }}
      >
        <div className="stack" style={{ alignItems: "center" }}>
          <h2 className="title">Let&apos;s work together.</h2>

          <p className="muted">
            Contact Alboré to discuss your accounting and financial needs.
          </p>

          <Link href="/contact" className="button">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}