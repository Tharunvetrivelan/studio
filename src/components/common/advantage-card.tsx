// src/components/common/advantage-card.tsx
import React, { type FC, type ReactElement } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface AdvantageCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const AdvantageCard: FC<AdvantageCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="group bg-gray-800 border-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader className="items-center text-center">
         <div className="p-4 bg-accent/80 rounded-full mb-4 inline-block group-hover:bg-accent transition-colors duration-300">
          {React.cloneElement(icon, { className: "w-10 h-10 text-accent-foreground" })}
        </div>
        <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-gray-300 leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default AdvantageCard;
