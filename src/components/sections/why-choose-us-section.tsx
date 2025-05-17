// src/components/sections/why-choose-us-section.tsx
import type { FC, LegacyRef } from 'react';
import { Briefcase, Award, Laptop } from 'lucide-react';
import SectionWrapper from '@/components/common/section-wrapper';
import SectionTitle from '@/components/common/section-title';
import AdvantageCard from '@/components/common/advantage-card';

interface WhyChooseUsSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const advantages = [
  {
    icon: <Briefcase />,
    title: "Industry Expertise",
    description: "Deep understanding of the tech landscape and its evolving demands, ensuring we find talent that's truly cutting-edge.",
  },
  {
    icon: <Award />,
    title: "Proven Track Record",
    description: "A history of successful placements and satisfied clients, demonstrating our ability to deliver results consistently.",
  },
  {
    icon: <Laptop />,
    title: "Tailored Approach",
    description: "Customized recruitment strategies designed to meet your unique business needs and company culture.",
  },
];

const WhyChooseUsSection: FC<WhyChooseUsSectionProps> = ({ id, ref }) => {
  return (
    <SectionWrapper id={id} ref={ref} className="bg-gray-900">
      <SectionTitle title="Why Companies Choose Us" subtitle="Our Advantages" className="text-white" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <AdvantageCard
            key={index}
            icon={advantage.icon}
            title={advantage.title}
            description={advantage.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUsSection;
