# Albore Accountants — Client Portal & Marketing Platform

A modern, responsive web application and client portal for **Albore Accountants**, designed to streamline Federal Board of Revenue (FBR) tax filings, client document exchange, Active Taxpayer List (ATL) tracking, and financial advisory workflows.

---

## Overview

The platform serves two primary functions:
1. **Public Marketing Site (`app/(marketing)`)**: Introducing Albore Accountants' services, compliance offerings, and guiding prospective and existing clients directly into the portal.
2. **Client & Admin Portal (`app/portal`)**: A secure workspace where clients upload required tax documents (withholding CPR slips, bank statements, asset deeds) and track FBR return preparation with certified accountants.

---

## Key Features

- **Universal Layout**: Shared header and footer featuring the Albore Accountants brand wordmark, essential navigation links, and direct portal access.
- **Hero & CTA**: Minimalist, high-impact hero banner with background imagery and direct action buttons into the client portal.
- **Centralized Site Configuration**: Brand names, routes, navigation items, and portal links are managed centrally in `config/site.ts`.
- **FBR Compliance Focus**: Built around real-world Pakistani tax workflows, Active Taxpayer List (ATL) compliance, and structured document requests.
- **Modular Architecture**: Clean separation between public marketing routes and authenticated portal workspaces.

---

## Project Structure

```
Albore-Accountants-FE/
├── app/
│   ├── (marketing)/          # Public marketing routes (layout with Header & Footer)
│   │   ├── page.tsx          # Homepage (Hero with Portal CTA)
│   │   ├── about/            # About firm page
│   │   ├── services/         # Tax & advisory services
│   │   └── contact/          # Contact & inquiry form
│   ├── portal/               # Authenticated client & staff portal
│   │   ├── client/           # Client dashboard & document uploads
│   │   ├── admin/            # Administrative management
│   │   ├── employee/         # Accountant / staff workspace
│   │   ├── login/            # Portal authentication
│   │   └── register/         # New client registration
│   ├── globals.css           # Global stylesheet & Tailwind CSS imports
│   └── layout.tsx            # Root HTML & body shell
├── components/
│   ├── layout/               # Universal Header, Footer, and Sidebar
│   ├── marketing/            # Marketing components (Hero)
│   └── ui/                   # Reusable UI primitives (Button)
├── config/
│   └── site.ts               # Centralized brand, navigation & portal configuration
├── features/                 # Redux Toolkit API slices & state features
├── styles/
│   └── tokens.css            # Core design tokens (colors, typography, spacing)
└── public/                   # Static assets
```

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, `output: 'standalone'`)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & CSS Design Tokens
- **State Management**: Redux Toolkit & RTK Query
- **Linting & Code Quality**: ESLint 9

---

## Getting Started

### Prerequisites

Ensure you have Node.js (v20+ or v22+) installed on your machine.

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Running Locally

```bash
# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with Turbopack |
| `npm run build` | Builds an optimized production bundle with standalone output |
| `npm run start` | Runs the compiled production build |
| `npm run lint` | Runs ESLint checks across the codebase |
| `npx tsc --noEmit` | Runs TypeScript static type checking |

---

## Configuration

To customize brand copy, navigation links, or client portal URLs, update [`config/site.ts`](config/site.ts):

```typescript
export const siteConfig = {
  name: "Albore Accountants",
  navLinks: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  portal: {
    loginHref: "/portal/login",
    registerHref: "/portal/register",
  },
};
```

---

## License

Private repository. All rights reserved © Albore Accountants.
