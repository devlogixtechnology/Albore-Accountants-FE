import type { WorkflowStep } from "@/data/services/types";

interface ServiceWorkflowProps {
  heading?: string;
  steps: WorkflowStep[];
}

export default function ServiceWorkflow({
  heading = "Bookkeeping Work-Flow",
  steps = [],
}: ServiceWorkflowProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section
      aria-labelledby="workflow-heading"
      className="relative w-full bg-[#3d0f17] text-white py-12 sm:py-16 my-8 sm:my-12 shadow-2xl overflow-hidden"
    >
      {/* Subtle geometric line art background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M-100 200 L1300 100" stroke="#b08d57" strokeWidth="1" />
        <path d="M200 400 L1000 -100" stroke="#b08d57" strokeWidth="1" />
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="workflow-heading"
          className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-center text-white mb-12 sm:mb-14 tracking-tight"
        >
          {heading}
        </h2>

        {/* Stepper Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-5xl mx-auto">
          {/* Horizontal Dashed Connecting Line (Desktop) */}
          <div
            className="hidden md:block absolute top-[27px] left-[10%] right-[10%] border-t-2 border-dashed border-[#b08d57] z-0"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-col items-center text-center flex-1 w-full sm:w-auto"
            >
              {/* Step Circle with Thin Gold Border */}
              <div className="w-14 h-14 rounded-full bg-[#52131e] border border-[#b08d57] text-white font-bold flex items-center justify-center text-xl shadow-lg transition-transform duration-300 hover:scale-110">
                {step.step}
              </div>

              {/* Step Label in Gold Quotes */}
              <p className="font-body text-xs sm:text-sm md:text-base text-[#c5a880] mt-4 font-semibold tracking-wide">
                &ldquo;{step.label}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ServiceWorkflow };

