"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine active link
  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 border-b border-surface-muted backdrop-blur-md transition-shadow duration-200">
      {/* Container aligned to the industry standalone content line and gutters */}
      <div className="w-full max-w-9xl mx-auto flex h-20 md:h-22 items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Brand Logo - Native transparent PNG without composite blend mode for maximum sharpness */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90 py-1"
          aria-label={siteConfig.name}
        >
          <Image
            src="/images/branding/alboreLogo.png"
            alt={siteConfig.name}
            width={150}
            height={50}
            priority
            quality={100}
            className="h-10 sm:h-10 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation (>= 1024px prevents any tablet collision) */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9 2xl:gap-10"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map(({ label, href }) => {
            const active = isLinkActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm lg:text-base font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-primary after:transition-all after:duration-300 ${
                  active
                    ? "text-brand-primary after:w-full"
                    : "text-text-heading hover:text-brand-primary after:w-0 hover:after:w-full"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs (>= 1024px) with sharp edges */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            size="md"
            href={siteConfig.portal.loginHref}
            className="rounded-none px-4.5 text-xs sm:text-sm font-semibold tracking-wide"
          >
            Client Portal
          </Button>
          <Button
            variant="primary"
            size="md"
            href="/contact"
            className="rounded-none px-4.5 text-xs sm:text-sm font-semibold tracking-wide"
          >
            Talk to Partner
          </Button>
        </div>

        {/* Tablet & Mobile Right Bar (< 1024px) */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          {/* Quick-access CTA on tablet screens */}
          <Button
            variant="primary"
            size="sm"
            href="/contact"
            className="hidden sm:inline-flex rounded-none px-3.5 text-xs font-semibold"
          >
            Talk to Partner
          </Button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative h-10 w-10 p-2 text-text-body transition-transform duration-200 hover:text-brand-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <Menu
              className={`absolute inset-2 h-6 w-6 transition-all duration-300 ${
                isOpen
                  ? "rotate-90 opacity-0 scale-75"
                  : "rotate-0 opacity-100 scale-100"
              }`}
            />
            <X
              className={`absolute inset-2 h-6 w-6 transition-all duration-300 ${
                isOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-75"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full-Bleed Drawer with Smooth Animation */}
      <div
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden border-t border-surface-muted bg-surface shadow-xl">
          <div className="px-6 py-6 space-y-6 max-w-7xl mx-auto">
            <nav
              className="flex flex-col space-y-3.5"
              aria-label="Mobile navigation"
            >
              {siteConfig.navLinks.map(({ label, href }) => {
                const active = isLinkActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`text-base font-semibold transition-all duration-200 hover:translate-x-1 ${
                      active
                        ? "text-brand-primary font-bold"
                        : "text-text-heading hover:text-brand-primary"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 flex flex-col gap-3 border-t border-surface-muted">
              <Button
                variant="outline"
                size="md"
                href={siteConfig.portal.loginHref}
                onClick={() => setIsOpen(false)}
                className="w-full rounded-none font-semibold justify-center"
              >
                Client Portal
              </Button>
              <Button
                variant="primary"
                size="md"
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-none font-semibold justify-center"
              >
                Talk to Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}