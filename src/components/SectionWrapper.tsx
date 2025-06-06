"use client";

import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  noTopBorder?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  title,
  titleClassName,
  id,
  noTopBorder = false,
  ...props
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden fade-in-section',
        { 'is-visible': isVisible },
        !noTopBorder && 'before:content-[\'\'] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-primary before:via-accent before:to-orange-400',
        'bg-card my-8 rounded-xl shadow-xl max-w-screen-xl mx-auto',
        className
      )}
      {...props}
    >
      <div className="container mx-auto">
        {title && (
          <h2
            className={cn(
              'text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary relative section-title-underline font-headline',
              titleClassName
            )}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
