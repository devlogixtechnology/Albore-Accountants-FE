import {
  PortableText,
  type PortableTextReactComponents,
  type PortableTextBlock,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";

interface PortableTextImageValue {
  _type: "image";
  asset?: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 font-heading text-2xl sm:text-3xl font-bold text-text-heading">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 font-heading text-xl sm:text-2xl font-bold text-brand-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 mb-2 font-heading text-lg font-semibold text-text-heading">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-4 font-body text-base leading-relaxed text-text-body">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-accent bg-surface-muted/60 py-3 px-5 italic text-text-heading font-body">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 font-body text-text-body">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 font-body text-text-body">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-medium text-brand-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-brand-primary-dark"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-text-heading">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  types: {
    image: ({ value }: { value: PortableTextImageValue }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8 overflow-hidden rounded-lg">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={urlFor(value).width(1200).height(675).url()}
              alt={value.alt || "Article illustration"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center font-body text-xs text-text-body/70">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export interface CustomPortableTextProps {
  value: PortableTextBlock[];
  className?: string;
}

export default function CustomPortableText({
  value,
  className = "",
}: CustomPortableTextProps) {
  if (!value || value.length === 0) return null;

  return (
    <div className={`prose-albore ${className}`}>
      <PortableText value={value} components={components} />
    </div>
  );
}

