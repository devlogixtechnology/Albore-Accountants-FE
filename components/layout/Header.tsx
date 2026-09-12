'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 border-b border-surface-muted backdrop-blur-md">
      <div className="flex h-24 md:h-28 w-full items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Brand Logo (Substantially enlarged for both mobile & desktop) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/branding/albore_logo_white_transparent.png"
            alt={siteConfig.name}
            width={260}
            height={80}
            priority
            className="h-14 sm:h-16 md:h-20 lg:h-22 w-auto object-contain brightness-0"
          />
        </Link>

        {/* Desktop Navigation (Bolder links with smooth underline slide animation) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {siteConfig.navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative py-1 text-base font-bold text-text-heading transition-colors duration-200 hover:text-brand-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3.5">
          <Link
            href={siteConfig.portal.loginHref}
            className="inline-flex h-10 items-center justify-center rounded border border-accent px-5 text-sm font-medium font-button text-accent transition-all duration-200 hover:bg-accent hover:text-surface active:scale-[0.98]"
          >
            Client Portal
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded bg-brand-primary px-5 text-sm font-medium font-button text-text-inverse transition-all duration-200 hover:bg-brand-primary-dark active:scale-[0.98]"
          >
            Talk to Partner
          </Link>
        </div>

        {/* Mobile Menu Button with morphing icon transition */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative h-10 w-10 p-2 text-text-body transition-transform duration-200 hover:text-brand-primary active:scale-95 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <Menu
            className={`absolute inset-2 h-6 w-6 transition-all duration-300 ${
              isOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
            }`}
          />
          <X
            className={`absolute inset-2 h-6 w-6 transition-all duration-300 ${
              isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer (Smooth grid-row height expand & fade animation) */}
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden border-t border-surface-muted bg-surface">
          <div className="px-6 py-5 space-y-4">
            <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
              {siteConfig.navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-text-heading transition-all duration-200 hover:text-brand-primary hover:translate-x-1"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2.5">
              <Link
                href={siteConfig.portal.loginHref}
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 items-center justify-center w-full rounded border border-accent text-sm font-medium font-button text-accent transition-colors hover:bg-accent hover:text-surface"
              >
                Client Portal
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 items-center justify-center w-full rounded bg-brand-primary text-sm font-medium font-button text-text-inverse transition-colors hover:bg-brand-primary-dark"
              >
                Talk to Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}