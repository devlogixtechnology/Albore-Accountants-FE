import Link from "next/link";

const links = [
  ["Dashboard", "/portal/client"],
  ["Documents", "/portal/client/documents"],
  ["Billing", "/portal/client/billing"],
  ["Messages", "/portal/client/messages"],
  ["Appointments", "/portal/client/appointments"],
] as const;

export default function PortalSidebar() {
  return (
    <aside className="portal-sidebar">
      <Link
        href="/portal/client"
        className="portal-sidebar__brand"
      >
        Alboré Portal
      </Link>

      <nav className="portal-nav" aria-label="Portal navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}