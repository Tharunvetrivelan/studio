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
          Let’s work together to transform your vision into reality.
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
          Contact us today to get started! Whether you're looking for IT solutions, recruitment expertise, or cutting-edge app development, Quantastic Technologies is ready to help you achieve your goals.
        </p>
        <Button 
          asChild
          size="lg" 
          className="bg-background text-primary hover:bg-background/90 hover:text-primary/90 py-4 px-8 text-lg font-semibold shadow-xl transform transition-transform hover:scale-105"
        >
          <a href="mailto:quantastictechnologies@gmail.com">
            Contact Us Today <ArrowRight size={22} className="ml-2" />
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default CtaSection;
