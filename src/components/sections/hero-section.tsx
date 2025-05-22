// src/components/sections/hero-section.tsx
import type { FC, LegacyRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/common/section-wrapper';

interface HeroSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const HeroSection: FC<HeroSectionProps> = ({ id, ref }) => {
  return (
    <SectionWrapper id={id} ref={ref} className="bg-gradient-to-br from-gray-900 via-primary/80 to-gray-900 text-white relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/40 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Connecting Top Tech Talent With <span className="text-accent">Innovative</span> Companies
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          At Quantastic Technologies, we specialize in delivering comprehensive IT services, recruitment solutions, and end-to-end web and mobile application development tailored to meet your business goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto shadow-lg transform transition-transform hover:scale-105">
            Explore Our Services <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto shadow-lg transform transition-transform hover:scale-105">
            Contact Us <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
