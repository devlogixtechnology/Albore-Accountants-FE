import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Team", "/team"],
  ["Contact", "/contact"],
] as const;

export default function PublicHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-header__brand">
        Alboré
      </Link>

      <nav className="site-header__nav" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="site-header__link"
          >
            {label}
          </Link>
        ))}

        <Link href="/portal/login" className="site-header__login">
          Portal Login
        </Link>
      </nav>
    </header>
  );
}