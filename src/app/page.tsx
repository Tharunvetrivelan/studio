// src/app/page.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import ServicesSection from '@/components/sections/services-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  const [activeNavItem, setActiveNavItem] = useState('home');

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    advantages: useRef<HTMLElement>(null), // Used by WhyChooseUsSection
  };

  const handleNavItemClick = (id: string) => {
    const sectionRef = sectionRefs[id as keyof typeof sectionRefs];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // setActiveNavItem(id); // Set active immediately on click
    }
  };
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // When 40% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNavItem(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRefs = sectionRefs; // Capture current value

    Object.values(currentRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(currentRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header activeNavItem={activeNavItem} onNavItemClick={handleNavItemClick} />
      <main className="flex-grow">
        <HeroSection id="home" ref={sectionRefs.home} />
        <AboutUsSection id="about" ref={sectionRefs.about} />
        <ServicesSection id="services" ref={sectionRefs.services} />
        <WhyChooseUsSection id="advantages" ref={sectionRefs.advantages} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
