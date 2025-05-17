// src/components/sections/testimonials-section.tsx
import type { FC, LegacyRef } from 'react';
import SectionWrapper from '@/components/common/section-wrapper';
import SectionTitle from '@/components/common/section-title';
import TestimonialCard from '@/components/common/testimonial-card';

interface TestimonialsSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const testimonials = [
  {
    avatarUrl: "https://placehold.co/56x56/9575CD/FFFFFF.png?text=JS",
    name: "Jane Smith",
    title: "CTO, Innovate Solutions",
    quote: "TechTalent Navigator understood our unique needs and delivered exceptional candidates quickly. Their professionalism and expertise are unmatched.",
    companyLogoUrl: "https://placehold.co/80x20/CCCCCC/FFFFFF.png?text=InnovateCo",
    dataAiHint: "professional woman",
    rating: 5,
  },
  {
    avatarUrl: "https://placehold.co/56x56/3F51B5/FFFFFF.png?text=MD",
    name: "Michael Doe",
    title: "Lead Developer, FutureTech",
    quote: "The team at TechTalent helped me find the perfect role that aligned with my career goals. The process was smooth and transparent.",
    companyLogoUrl: "https://placehold.co/80x20/CCCCCC/FFFFFF.png?text=FutureTech",
    dataAiHint: "smiling man",
    rating: 5,
  },
];

const TestimonialsSection: FC<TestimonialsSectionProps> = ({ id, ref }) => {
  return (
    <SectionWrapper id={id} ref={ref} className="bg-secondary">
      <SectionTitle title="What Our Clients & Candidates Say" subtitle="Success Stories" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            avatarUrl={testimonial.avatarUrl}
            name={testimonial.name}
            title={testimonial.title}
            quote={testimonial.quote}
            companyLogoUrl={testimonial.companyLogoUrl}
            dataAiHint={testimonial.dataAiHint}
            rating={testimonial.rating}
          />
        ))}
      </div>
      {/* Pagination Dots (Visual Only) */}
      <div className="flex justify-center space-x-2 mt-12">
        <span className="w-3 h-3 bg-primary rounded-full cursor-pointer"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-primary/70 transition-colors"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-primary/70 transition-colors"></span>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
