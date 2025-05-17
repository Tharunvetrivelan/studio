// src/components/sections/about-us-section.tsx
import type { FC, LegacyRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, Target, Users, Zap } from 'lucide-react';
import SectionWrapper from '@/components/common/section-wrapper';
import SectionTitle from '@/components/common/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutUsSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const missionPoints = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Our Mission",
    description: "To empower businesses by connecting them with exceptional tech talent and to help professionals achieve their career aspirations in the dynamic IT landscape."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Our Vision",
    description: "To be the leading and most trusted IT recruitment partner, recognized for our expertise, integrity, and commitment to fostering successful, long-term relationships."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Our Values",
    description: "Integrity, Excellence, Collaboration, Innovation, and Client-Centricity. These principles guide every interaction and decision we make."
  }
];

const AboutUsSection: FC<AboutUsSectionProps> = ({ id, ref }) => {
  return (
    <SectionWrapper id={id} ref={ref} className="bg-background">
      <SectionTitle title="Your Tech Talent Partner" subtitle="About Us" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow-xl group">
          <Image
            src="https://placehold.co/600x450/3F51B5/FFFFFF.png?text=TechTalent+Team"
            alt="TechTalent Navigator Team"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-110"
            data-ai-hint="team collaboration"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            Driving Success Through Strategic Talent Acquisition
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            TechTalent Navigator is more than just a recruitment agency. We are your strategic partner in building high-performing tech teams. With years of experience in the IT industry, we understand the nuances of technical roles and the culture of innovation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our approach is tailored, transparent, and results-driven. We leverage our extensive network and deep market insights to connect you with candidates who not only possess the right skills but also align with your company's vision and values.
          </p>
          <Button variant="link" className="text-primary hover:text-primary/80 px-0 text-lg group">
            Learn More About Our Approach
            <ChevronRight size={24} className="ml-2 transform transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {missionPoints.map((point, index) => (
          <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="p-3 bg-primary/10 rounded-full">
                {point.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-primary">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutUsSection;
