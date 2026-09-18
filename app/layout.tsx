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
  metadataBase: new URL('https://www.alboreaccountants.com'),
  title: {
    default: 'Albore Chartered Accountants | Advisory & Tax Compliance',
    template: '%s | Albore Chartered Accountants',
  },
  description: 'Specialized corporate accounting, FBR tax compliance, auditing, and financial advisory services.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Albore Chartered Accountants | Advisory & Tax Compliance',
    description:
      'Specialized corporate accounting, FBR tax compliance, auditing, and financial advisory services.',
    url: 'https://www.alboreaccountants.com',
    siteName: 'Albore Chartered Accountants',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albore Chartered Accountants | Advisory & Tax Compliance',
    description:
      'Specialized corporate accounting, FBR tax compliance, auditing, and financial advisory services.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Albore Chartered Accountants',
  alternateName: 'Albore Accountants',
  url: 'https://www.alboreaccountants.com',
  logo: 'https://www.alboreaccountants.com/images/branding/alboreLogo.png',
  image: 'https://www.alboreaccountants.com/images/branding/alboreLogo.png',
  description:
    'Specialized corporate accounting, FBR tax compliance, auditing, and financial advisory services.',
  telephone: '+923354274079',
  email: 'hello@alboreaccountants.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Boulevard, Bahria Town',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '31.3685',
    longitude: '74.1802',
  },
  priceRange: '$$',
  sameAs: [
    'https://linkedin.com',
    'https://twitter.com',
    'https://facebook.com',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontButton.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
