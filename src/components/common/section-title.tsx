// src/components/common/section-title.tsx
import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle, className, align = 'center' }) => {
  return (
    <div className={cn('mb-12 md:mb-16', className, {
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
    })}>
      {subtitle && (
        <p className="text-base font-semibold text-primary uppercase tracking-wider mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent transform group-hover:w-full transition-all duration-300 {align === 'center' ? 'mx-auto' : ''}"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
