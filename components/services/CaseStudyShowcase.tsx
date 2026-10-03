"use client";

import { useState } from "react";
import Image from "next/image";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

const BUTTON =
  "inline-flex h-[71px] w-[274px] items-center justify-center rounded-[8px] bg-brand-primary-dark font-heading text-[22px] font-bold text-white transition-colors hover:bg-brand-primary";

// Timings shared by every element so the whole swap reads as one motion.
const MOVE = "duration-[650ms] ease-in-out motion-reduce:transition-none";
const FADE = "duration-[450ms] ease-in-out motion-reduce:transition-none";

/**
 * Case-study card with the "View Case Study" ⇄ "Return to page" animation.
 *
 * On lg+ everything is absolutely positioned inside a fixed-height stage so
 * the pieces can move independently:
 *  - intro text fades out, dummy text fades in
 *  - the button box grows from its bottom-left corner into the text area
 *    while fading out
 *  - the image shrinks toward its bottom-right corner
 * Below lg the stage becomes a normal flow layout and only cross-fades.
 */
export default function CaseStudyShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[1378px] border-t border-brand-primary-dark/60 bg-white px-6 py-8 shadow-[0_4px_18px_rgba(0,0,0,0.22)] md:px-[52px] md:py-[45px]">
      <div className="relative flex flex-col gap-8 lg:block lg:h-[507px]">
        {/* Intro copy — fades out when the case study opens */}
        <div
          aria-hidden={open}
          className={`transition-opacity ${FADE} lg:absolute lg:left-0 lg:top-0 lg:w-[560px] ${
            open ? "pointer-events-none opacity-0" : "opacity-100"
          } ${open ? "hidden lg:block" : ""}`}
        >
          <p className="font-heading text-[18px] font-bold uppercase tracking-[0.08em] text-brand-primary">
            Case Study
          </p>
          <h2 className="mt-2 max-w-[460px] font-heading text-[34px] font-bold leading-[1.1] text-black md:text-[40px]">
            Manufacturing Business Success
          </h2>
          <p className="mt-4 max-w-[400px] font-heading text-[17px] font-semibold leading-[1.45] text-black">
            Uncover strategic insights from our latest engagement, where we transformed complex
            corporate accounting processes into a high-growth roadmap
          </p>
        </div>

        {/* Dummy copy + Return button — fades in when open */}
        <div
          aria-hidden={!open}
          className={`flex flex-col transition-opacity ${FADE} lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[700px] ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          } ${open ? "" : "hidden lg:flex"}`}
        >
          <h2 className="font-heading text-[28px] font-bold leading-tight text-black md:text-[36px]">
            Albore present a Real World Case Study
          </h2>
          <p className="mt-4 font-heading text-[16px] font-semibold leading-[1.5] text-black md:text-[20px]">
            {LOREM}
          </p>
          <div className="mt-auto flex justify-center lg:justify-end lg:pr-[60px]">
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={BUTTON}
            >
              Return to page
            </button>
          </div>
        </div>

        {/* "View Case Study" — its box expands from the bottom-left corner into the
            dummy-text area while fading out, then shrinks back on return. */}
        <button
          type="button"
          tabIndex={open ? -1 : 0}
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className={`relative order-last self-start overflow-hidden rounded-[8px] bg-brand-primary-dark font-heading text-[22px] font-bold text-white transition-[width,height,opacity,background-color] hover:bg-brand-primary lg:absolute lg:bottom-0 lg:left-0 lg:order-none ${MOVE} ${
            open
              ? "pointer-events-none h-[71px] w-[274px] opacity-0 max-lg:hidden lg:h-[340px] lg:w-[700px]"
              : "h-[71px] w-[274px] opacity-100"
          }`}
        >
          <span
            className={`absolute bottom-0 left-0 flex h-[71px] w-[274px] items-center justify-center transition-opacity ${FADE} ${
              open ? "opacity-0" : "opacity-100"
            }`}
          >
            View Case Study
          </span>
        </button>

        {/* Image — shrinks toward its bottom-right corner */}
        <div
          className={`relative aspect-[657/507] w-full max-w-[657px] self-end transition-[width] lg:absolute lg:bottom-0 lg:right-[-16px] lg:max-w-none ${MOVE} ${
            open ? "lg:w-[576px]" : "lg:w-[657px]"
          }`}
        >
          <Image
            src="/images/ServicesPage/Service_CaseStudy.png"
            alt="Professional reviewing a financial brochure"
            fill
            sizes="(min-width: 1024px) 657px, 100vw"
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </div>
  );
}
