// src/components/common/section-wrapper.tsx
import type { FC, HTMLAttributes, LegacyRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id: string;
  className?: string;
  ref?: LegacyRef<HTMLElement>;
  children: React.ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ id, className, children, ref, ...props }) => {
  return (
    <section id={id} ref={ref} className={cn('py-16 md:py-24', className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
