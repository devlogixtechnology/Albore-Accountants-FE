import IndustriesMiddleSections from '@/components/marketing/Industries/Industries';
import TestimonialsSection from '@/components/marketing/TestimonialsSection';
import CtaBanner from '@/components/ui/CtaBanner';

function page() {
  return (
    <div>
      <IndustriesMiddleSections />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
      <TestimonialsSection />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
      <CtaBanner />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
    </div>
  )
}

export default page