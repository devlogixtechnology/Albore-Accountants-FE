import IndustriesMiddleSections from "@/components/marketing/Industries/Industries";
import CtaBanner from "@/components/ui/CtaBanner";

export default function IndustriesPage() {
  return (
    <div>
      <IndustriesMiddleSections />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
      <CtaBanner />
      <div className="h-6 bg-white sm:h-8" aria-hidden="true" />
    </div>
  );
}