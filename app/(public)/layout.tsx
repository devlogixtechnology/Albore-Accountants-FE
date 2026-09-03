import type { ReactNode } from "react";
import PublicHeader from "@/components/marketing/PublicHeader";
import PublicFooter from "@/components/marketing/PublicFooter";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PublicHeader />

      <main
        className="site-main"
        style={{
          flex: 1,
        }}
      >
        {children}
      </main>

      <PublicFooter />
    </div>
  );
}