import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

export const fontHeading = Open_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const fontBody = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

export const fontButton = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alboré",
    template: "%s | Alboré",
  },
  description: "Alboré client portal and public website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontButton.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
