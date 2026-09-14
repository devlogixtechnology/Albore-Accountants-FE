import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  bio: string;
  imageUrl?: string;
  href?: string;
};

export default function TeamMemberCard({
  name,
  title,
  initials,
  bio,
  imageUrl,
  href = "/about",
}: TeamMember) {
  return (
    <div className="group flex h-full w-full flex-col items-center rounded-[24px] border border-border/60 bg-surface px-6 pt-9 pb-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* 
        Widened Arch Avatar Frame:
        Matches the curved Figma silhouette with ample width and top arch
      */}
      <div className="relative h-44 w-full max-w-[210px] overflow-hidden rounded-t-[72px] rounded-b-[20px] bg-brand-primary-dark">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-primary text-text-inverse">
            <span className="font-heading text-2xl font-bold tracking-wider">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Team Member Name & Role */}
      <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-text-heading">
        {name}
      </h3>
      <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wider text-brand-primary">
        {title}
      </p>

      {/* Bio Copy */}
      <p className="mt-3 line-clamp-3 font-body text-xs leading-relaxed text-text-body">
        {bio}
      </p>

      {/* Pill CTA Button using shared Button component */}
      <div className="mt-auto w-full pt-6">
        <Button
          href={href}
          size="sm"
          className="rounded-full px-6 py-2 text-xs font-semibold shadow-sm transition-all duration-200 hover:gap-3 active:scale-95"
        >
          <span>Learn More</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}