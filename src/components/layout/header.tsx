// src/components/layout/header.tsx
"use client";

import type { FC } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, Facebook, Twitter, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Success Stories' },
  { id: 'resume-enhancer', label: 'Resume Enhancer' },
];

interface HeaderProps {
  activeNavItem: string;
  onNavItemClick: (id: string) => void;
}

const Header: FC<HeaderProps> = ({ activeNavItem, onNavItemClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (id: string) => {
    onNavItemClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => onNavItemClick('home')}>
            <span className="text-2xl font-bold text-primary">TechTalent</span>
            <span className="text-2xl font-medium text-foreground">Navigator</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => onNavItemClick(item.id)}
                className={`font-medium transition-colors ${
                  activeNavItem === item.id
                    ? 'text-primary hover:text-primary/90'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-foreground/70 hover:text-primary transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-foreground/70 hover:text-primary transition-colors">
              <Twitter size={20} />
            </Link>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col space-y-6">
                  <Link href="/" className="flex items-center self-start mb-4" onClick={() => handleMobileLinkClick('home')}>
                     <span className="text-2xl font-bold text-primary">TechTalent</span>
                     <span className="text-2xl font-medium text-foreground">Navigator</span>
                  </Link>
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => handleMobileLinkClick(item.id)}
                      className={`w-full justify-start text-lg font-medium transition-colors ${
                        activeNavItem === item.id
                          ? 'text-primary hover:text-primary/90'
                          : 'text-foreground/70 hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <div className="flex items-center space-x-4 pt-6 border-t">
                    <Link href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors">
                      <Linkedin size={24} />
                    </Link>
                    <Link href="#" aria-label="Facebook" className="text-foreground/70 hover:text-primary transition-colors">
                      <Facebook size={24} />
                    </Link>
                    <Link href="#" aria-label="Twitter" className="text-foreground/70 hover:text-primary transition-colors">
                      <Twitter size={24} />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
