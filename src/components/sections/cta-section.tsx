// src/components/sections/cta-section.tsx
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/common/section-wrapper';

const CtaSection: FC = () => {
  return (
    <SectionWrapper id="cta" className="bg-gradient-to-r from-accent to-primary text-accent-foreground">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Ready to Find Your Next Tech Superstar or Dream Job?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
          Whether you're a company looking to build a world-class tech team or a professional seeking your next challenge, TechTalent Navigator is here to guide you. Let's build the future of tech, together.
        </p>
        <Button 
          size="lg" 
          className="bg-background text-primary hover:bg-background/90 hover:text-primary/90 py-4 px-8 text-lg font-semibold shadow-xl transform transition-transform hover:scale-105"
        >
          Get Started Today <ArrowRight size={22} className="ml-2" />
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default CtaSection;
