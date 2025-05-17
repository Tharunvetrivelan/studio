// src/components/sections/stats-section.tsx
import type { FC, LegacyRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionWrapper from '@/components/common/section-wrapper';
import SectionTitle from '@/components/common/section-title';

interface StatsSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const stats = [
  { value: "95%", label: "Client Retention Rate" },
  { value: "2,500+", label: "Tech Professionals Placed" },
  { value: "48hrs", label: "Average Time to First Shortlist" },
];

const StatsSection: FC<StatsSectionProps> = ({ id, ref }) => {
  return (
    <SectionWrapper id={id} ref={ref} className="bg-background">
      <SectionTitle title="Our Impact by the Numbers" subtitle="Key Statistics" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardContent className="p-8">
              <p className="text-5xl font-extrabold text-primary mb-3">{stat.value}</p>
              <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default StatsSection;
