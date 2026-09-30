import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, ShieldCheck } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import CtaBanner from "@/components/ui/CtaBanner";
import { MotionReveal } from "@/components/ui/motion";
import { homeInsightsData } from "@/data/home/insightsSectionData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const INSIGHTS_MAP: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    description: string;
    image: string;
    paragraphs: string[];
    keyTakeaways: string[];
  }
> = {
  "retail-governance": {
    title: "Retail Governance & Lease Accounting Optimization",
    category: "RETAIL & COMMERCE",
    date: "March 18, 2026",
    readTime: "6 min read",
    author: "Zainab Riaz, FCA",
    authorRole: "Partner, Audit & Assurance",
    description:
      "How commercial retail operations can streamline multi-tenant lease accounting under IFRS 16 and eliminate operational revenue leakage across branch networks.",
    image: "/images/InsightSection/ImagePlaceholder (3).png",
    paragraphs: [
      "Operating multi-store retail footprints presents unique statutory accounting challenges. Under IFRS 16, every long-term commercial lease must be evaluated as a right-of-use (ROU) asset and corresponding lease liability, subjecting balance sheets to significant variance if indexation and concession clauses are improperly modeled.",
      "Our practice review of commercial retail groups in Pakistan revealed widespread leakage in percentage rent reconciliations, deferred tax asset recognition on lease liabilities, and uncaptured common area maintenance (CAM) overcharges by commercial landlords.",
      "Instituting standardized quarterly audit reconciliation cycles and centralized lease ledger automation enables retail CFOs to protect cash flow margins, ensure SECP statutory compliance, and present audit-cleared financial statements to banking syndicates.",
    ],
    keyTakeaways: [
      "Mandatory re-assessment of IFRS 16 variable lease components and landlord CAM charges.",
      "Establishing centralized lease liability schedules to avoid year-end statutory audit adjustments.",
      "Optimizing tax deductions on right-of-use asset depreciation versus direct rental expenses.",
    ],
  },
  "corporate-tax": {
    title: "Corporate Tax Strategy & Statutory Compliance Frameworks",
    category: "TAXATION & FISCAL POLICY",
    date: "March 12, 2026",
    readTime: "7 min read",
    author: "Hamza Tariq, ACA",
    authorRole: "Partner, Tax Advisory & Cross-Border",
    description:
      "Strategic tax frameworks to navigate statutory amendments, optimize corporate holdings, and maintain audit-proof FBR and SECP compliance for Pakistani enterprises.",
    image: "/images/InsightSection/ImagePlaceholder (2).png",
    paragraphs: [
      "With ongoing fiscal reforms and aggressive documentation drives by the Federal Board of Revenue (FBR), corporate entities face heightened withholding audit scrutiny, super tax recalculations, and stringent minimum tax provisions.",
      "Maintaining an audit-proof corporate tax posture requires moving beyond reactive annual filing to proactive transaction-level tax governance. Corporate groups must rigorously evaluate group relief mechanisms, transfer pricing documentation for related-party transactions, and input tax admissibility on corporate expenditures.",
      "By establishing disciplined fiscal controls and automated withholding verification workflows, companies safeguard operating margins against punitive penalty orders and ensure complete regulatory alignment under the Income Tax Ordinance, 2001.",
    ],
    keyTakeaways: [
      "Full reconciliation between sales tax returns, income tax filings, and audited ledger revenues.",
      "Active management of advance tax installments to preserve corporate liquidity.",
      "Proactive documentation of cross-border technical services and related-party management fees.",
    ],
  },
  "audit-pulse": {
    title: "Audit Pulse: Navigating Regulatory Scrutiny & Internal Controls",
    category: "STATUTORY ASSURANCE",
    date: "March 8, 2026",
    readTime: "5 min read",
    author: "Zainab Riaz, FCA",
    authorRole: "Partner, Audit & Assurance",
    description:
      "Quarterly intelligence on financial reporting standards, internal risk controls, and statutory audit readiness for enterprise boards and executive leadership.",
    image: "/images/InsightSection/ImagePlaceholder (1).png",
    paragraphs: [
      "The Institute of Chartered Accountants of Pakistan (ICAP) and SECP regulatory frameworks demand unprecedented transparency from corporate boards and management teams regarding internal financial controls and risk management disclosures.",
      "A successful statutory assurance process is built on year-round discipline rather than last-minute audit scrambles. Deficiencies in inventory valuation, revenue recognition cutoff timing, and undocumented related-party loans remain the leading causes of qualified audit opinions and delayed regulatory clearances.",
      "Our fiduciary advisory teams assist executive management in identifying control weaknesses well ahead of external audit mandates, institutionalizing best-in-class financial close procedures that satisfy board audit committees and institutional lenders.",
    ],
    keyTakeaways: [
      "Early engagement and preliminary audit field testing to prevent reporting bottlenecks.",
      "Formalized delegation of financial authority and dual-authorization banking controls.",
      "Continuous verification of inventory valuation assumptions and ECL (expected credit loss) provisioning.",
    ],
  },
  "growth-advisory": {
    title: "Growth Advisory: Valuation & Due Diligence for Enterprise Scaling",
    category: "STRATEGIC ADVISORY",
    date: "February 28, 2026",
    readTime: "8 min read",
    author: "Devon Sterling",
    authorRole: "Senior Advisory Specialist",
    description:
      "Key financial due diligence metrics, normalized EBITDA calculations, and valuation frameworks shaping successful corporate mergers and expansion capital raises.",
    image: "/images/InsightSection/ImagePlaceholder.png",
    paragraphs: [
      "As regional enterprises pursue mergers, acquisitions, and private equity investments, enterprise valuation hinges entirely on the quality of underlying financial records and defensible earnings quality.",
      "Prospective investors and acquisition partners scrutinize recurring EBITDA, working capital cycles, and unrecorded contingent liabilities with extreme rigor. Unaudited adjustments, owner-related discretionary costs, and off-balance-sheet commitments can quickly depress negotiated transaction valuations.",
      "Albore's transaction advisory council assists founders and corporate shareholders in preparing sell-side due diligence packages, normalizing operating earnings, and structuring tax-efficient transaction terms that maximize shareholder value.",
    ],
    keyTakeaways: [
      "Rigorous quality of earnings (QoE) analysis to establish defensible normalized EBITDA.",
      "Identification and mitigation of unquantified tax, labor, and contractual contingencies.",
      "Tax-efficient corporate restructuring prior to equity injection or shareholder buyout.",
    ],
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  const primarySlugs = homeInsightsData.map((item) => ({
    slug: item.href.replace(/^\/insights\//, "").replace(/^\/+|\/+$/g, ""),
  }));
  return primarySlugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS_MAP[slug];

  if (!insight) return {};

  const title = `${insight.title} | Albore Chartered Accountants`;
  const description = insight.description;
  const canonicalUrl = `/insights/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: insight.image,
          width: 1200,
          height: 630,
          alt: insight.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [insight.image],
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = INSIGHTS_MAP[slug];

  if (!insight) {
    notFound();
  }

  return (
    <article className="w-full font-body bg-white text-neutral-900">
      {/* 1. Executive Editorial Hero */}
      <MotionReveal as="section" className="relative w-full bg-[#3d141d] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={insight.image}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a080e] via-[#3d141d]/90 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-left">
          {/* Breadcrumb back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B08D57] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Publications &amp; Briefings</span>
          </Link>

          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#B08D57] mb-3">
            {insight.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {insight.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90 max-w-3xl">
            {insight.description}
          </p>

          {/* Meta line */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-white/75">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#B08D57]" />
              <span>
                <strong className="text-white">{insight.author}</strong> — {insight.authorRole}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#B08D57]" />
              <span>{insight.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B08D57]" />
              <span>{insight.readTime}</span>
            </div>
          </div>
        </div>
      </MotionReveal>

      {/* 2. Main Article Body */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16">
        {/* Featured Image Frame */}
        <MotionReveal className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] shadow-lg border border-neutral-200 mb-12">
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            quality={95}
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </MotionReveal>

        {/* Narrative Paragraphs */}
        <MotionReveal className="space-y-6 text-neutral-800 text-base sm:text-[17px] leading-[1.75]">
          {insight.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </MotionReveal>

        {/* Fiduciary Key Takeaways Card */}
        <MotionReveal delay={0.1} className="my-10 p-6 sm:p-8 bg-[#fdfbf7] rounded-[12px] border border-[#B08D57]/30 shadow-xs">
          <div className="flex items-center gap-2.5 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#51121d]" />
            <h3 className="font-heading text-lg font-bold text-[#51121d] tracking-tight">
              Fiduciary Audit Takeaways for Leadership
            </h3>
          </div>
          <ul className="space-y-3">
            {insight.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700">
                <span className="font-bold text-[#B08D57] shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </MotionReveal>

        <SectionDivider variant="services" className="my-10" />

        {/* Author Footer Card */}
        <MotionReveal className="p-6 bg-white rounded-lg border border-neutral-200 flex items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Published by Practice Council
            </p>
            <h4 className="font-heading text-base font-bold text-neutral-900 mt-1">
              {insight.author}
            </h4>
            <p className="text-xs text-neutral-600 mt-0.5">{insight.authorRole}</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 bg-[#51121d] text-white text-xs font-semibold rounded hover:bg-[#6b1e2b] transition-colors"
          >
            Consult Author
          </Link>
        </MotionReveal>
      </div>

      {/* 3. Pre-Footer Consultation Banner */}
      <MotionReveal>
        <CtaBanner />
      </MotionReveal>
    </article>
  );
}
