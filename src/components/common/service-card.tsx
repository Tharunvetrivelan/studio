// src/components/common/service-card.tsx
import React, { type FC, type ReactElement } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="group bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
      <CardHeader className="items-center text-center">
        <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block group-hover:bg-accent/20 transition-colors duration-300">
          {React.cloneElement(icon, { className: "w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" })}
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-grow">
        <CardDescription className="text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="link" className="text-primary hover:text-accent group-hover:text-accent transition-colors duration-300">
          Learn More <ChevronRight size={18} className="ml-1 transform transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
