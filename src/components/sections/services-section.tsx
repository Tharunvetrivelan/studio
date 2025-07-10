// src/components/sections/services-section.tsx
import type { FC, LegacyRef } from 'react';
import { HardHat, UserCheck, Globe, Smartphone, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/common/section-wrapper';
import SectionTitle from '@/components/common/section-title';
import ServiceCard from '@/components/common/service-card';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

interface ServicesSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const services = [
  {
    icon: <HardHat />,
    title: "IT Services",
    description: "We provide robust IT solutions that help businesses streamline operations, boost productivity, and stay ahead in the digital landscape. Whether you need infrastructure support, software solutions, or IT consulting, our experts are here to deliver excellence.",
  },
  {
    icon: <UserCheck />,
    title: "Recruitment Services",
    description: "From sourcing niche tech talent to managing bulk hiring drives, we offer end-to-end recruitment solutions. We connect companies with top-tier professionals in IT, non-IT, and emerging technology domains.",
  },
  {
    icon: <Globe />,
    title: "Web Development",
    description: "Our web development team crafts modern, user-friendly websites and web applications that are fast, responsive, and scalable. We handle everything from UI/UX design to backend development and deployment.",
  },
  {
    icon: <Smartphone />,
    title: "Mobile App Development",
    description: "Stay connected with your audience through seamless mobile experiences. We build feature-rich Android and iOS apps that are aligned with your brand and business objectives, using the latest tech stacks and design principles.",
  }
];

const ServicesSection: FC<ServicesSectionProps> = ({ id, ref }) => {
  const handleContactClick = () => {
    window.open('mailto:quantastictechnologies@gmail.com');
  };

  return (
    <SectionWrapper id={id} ref={ref} className="bg-secondary">
      <SectionTitle title="Our Comprehensive Services" subtitle="What We Offer" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
        <Button
          onClick={handleContactClick}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transform transition-transform hover:scale-105"
        >
          Discuss Your Project <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
