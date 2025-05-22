// src/components/sections/why-choose-us-section.tsx
import type { FC, LegacyRef } from 'react';
import { Award, TrendingUp, ClipboardEdit, MessagesSquare } from 'lucide-react';
import SectionWrapper from '@/components/common/section-wrapper';
import SectionTitle from '@/components/common/section-title';
import AdvantageCard from '@/components/common/advantage-card';

interface WhyChooseUsSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const advantages = [
  {
    icon: <Award />,
    title: "Proven Industry Expertise",
    description: "Leverage our deep understanding of the tech landscape and its evolving demands to ensure your projects are cutting-edge.",
  },
  {
    icon: <TrendingUp />,
    title: "Scalable & Cost-Effective Solutions",
    description: "We provide solutions that grow with your business while maintaining cost-efficiency and maximizing your ROI.",
  },
  {
    icon: <ClipboardEdit />,
    title: "Customized Approach",
    description: "Every project is unique. We tailor our strategies and services to meet your specific business needs and company culture.",
  },
  {
    icon: <MessagesSquare />,
    title: "Transparent Communication",
    description: "Experience clear, consistent communication and dedicated support throughout every stage of our partnership.",
  },
];

const WhyChooseUsSection: FC<WhyChooseUsSectionProps> = ({ id, ref }) => {
  return (
    <SectionWrapper id={id} ref={ref} className="bg-gray-900">
      <SectionTitle title="Why Choose Quantastic?" subtitle="Our Advantages" className="text-white" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
