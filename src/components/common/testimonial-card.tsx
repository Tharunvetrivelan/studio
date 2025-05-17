// src/components/common/testimonial-card.tsx
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  quote: string;
  companyLogoUrl?: string;
  rating?: number;
  dataAiHint?: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ avatarUrl, name, title, quote, companyLogoUrl, rating = 5, dataAiHint }) => {
  return (
    <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <Image
          src={avatarUrl}
          alt={name}
          width={56}
          height={56}
          className="rounded-full"
          data-ai-hint={dataAiHint}
        />
        <div>
          <h4 className="text-lg font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="italic text-foreground/80 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <CardFooter className="pt-4 mt-auto flex justify-between items-center">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        {companyLogoUrl && (
           <Image src={companyLogoUrl} alt={`${name}'s company logo`} width={80} height={20} objectFit="contain" data-ai-hint="company logo" />
        )}
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
