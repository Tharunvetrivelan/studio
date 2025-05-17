// src/components/sections/services-section.tsx
import type { FC, LegacyRef } from 'react';
import { Search, Code, Users, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/common/section-wrapper';
import SectionTitle from '@/components/common/section-title';
import ServiceCard from '@/components/common/service-card';
import { Button } from '@/components/ui/button';

interface ServicesSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const services = [
  {
    icon: <Search />,
    title: "Specialized Tech Recruitment",
    description: "Finding niche talent for specific technology stacks and roles, from software engineers to cybersecurity experts.",
  },
  {
    icon: <Code />,
    title: "Executive Search",
    description: "Identifying and attracting top-tier leadership for your technology departments, including CTOs, VPs of Engineering, and IT Directors.",
  },
  {
    icon: <Users />,
    title: "Contract & Project Staffing",
    description: "Providing flexible staffing solutions with skilled IT professionals for short-term projects or long-term contract engagements.",
  },
];

const ServicesSection: FC<ServicesSectionProps> = ({ id, ref }) => {
  return (
    <SectionWrapper id={id} ref={ref} className="bg-secondary">
      <SectionTitle title="Our IT Recruitment Services" subtitle="What We Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="text-center">
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transform transition-transform hover:scale-105">
          View All Services <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
