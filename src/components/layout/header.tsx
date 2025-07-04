// src/components/layout/header.tsx
"use client";

import type { FC } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'advantages', label: 'Why Choose Us' },
];

interface HeaderProps {
  activeNavItem: string;
  onNavItemClick: (id: string) => void;
}

const Header: FC<HeaderProps> = ({ activeNavItem, onNavItemClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoUrl = "/studio/quantastic-logo.png";
  
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
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-white/75 backdrop-blur-md ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center group relative -translate-x-[40px]" onClick={() => onNavItemClick('home')}>
            <Image 
              src={logoUrl} 
              alt="Quantastic Logo" 
              width={160} 
              height={40} 
              priority 
              className="rounded-lg border-2 border-primary/20 p-0.5 group-hover:border-primary/60 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-accent/40 transition-all duration-300 ease-in-out"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-2">
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

            <div className="flex items-center space-x-3">
              <Link href="https://www.facebook.com/profile.php?id=61577022924826" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/70 group">
                <Facebook size={20} className="group-hover:text-accent group-hover:scale-125 transition-all duration-200 ease-in-out" />
              </Link>
              <Link href="https://x.com/QuantasticT" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-foreground/70 group">
                <Twitter size={20} className="group-hover:text-accent group-hover:scale-125 transition-all duration-200 ease-in-out" />
              </Link>
            </div>
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
                  <Link href="/" className="flex items-center self-start mb-4 group" onClick={() => handleMobileLinkClick('home')}>
                     <Image 
                        src={logoUrl} 
                        alt="Quantastic Logo" 
                        width={160} 
                        height={40} 
                        priority 
                        className="rounded-lg border-2 border-primary/20 p-0.5 group-hover:border-primary/60 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-accent/40 transition-all duration-300 ease-in-out"
                      />
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
                    <Link href="https://www.facebook.com/profile.php?id=61577022924826" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/70 group">
                      <Facebook size={24} className="group-hover:text-accent group-hover:scale-125 transition-all duration-200 ease-in-out" />
                    </Link>
                    <Link href="https://x.com/QuantasticT" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-foreground/70 group">
                      <Twitter size={24} className="group-hover:text-accent group-hover:scale-125 transition-all duration-200 ease-in-out" />
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
