import IndustriesMiddleSections from '@/components/Industries/Industries';
import TestimonialsSection from '@/components/marketing/TestimonialsSection';
import { ReadyToTalkCta } from '@/components/marketing/ContactCTA';

function page() {
  return (
    <div>
      <IndustriesMiddleSections />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
      <TestimonialsSection />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
      <ReadyToTalkCta />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
    </div>
  )
}

export default page