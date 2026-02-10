import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProblemStatement from "@/components/ProblemStatement";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import OurStory from "@/components/OurStory";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      {/* Chapter 1: The Hook */}
      <Hero />
      <TrustStrip />

      {/* Chapter 2: The Problem */}
      <ProblemStatement />

      {/* Chapter 3: The Solution */}
      <Services />

      {/* Chapter 4: The Method */}
      <Process />

      {/* Chapter 5: The Proof */}
      <CaseStudies />

      {/* Chapter 6: The People */}
      <OurStory />
      <Testimonials />

      {/* Chapter 7: The Invitation */}
      <FinalCTA />
    </>
  );
}
