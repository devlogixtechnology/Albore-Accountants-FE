import type { ReactNode } from "react";
import PortalSidebar from "@/components/layout/Sidebar";

export default function PortalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="portal-shell">
      <PortalSidebar />

      <main className="portal-content">
        {children}
      </main>
    </div>
  );
}