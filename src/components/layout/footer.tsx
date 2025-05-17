// src/components/layout/footer.tsx
import type { FC } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Facebook, Twitter, Send } from 'lucide-react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">TechTalent</span>
              <span className="text-2xl font-medium text-white">Navigator</span>
            </Link>
            <p className="text-sm mb-4">
              Connecting top tech talent with innovative companies. We specialize in IT recruitment, ensuring the perfect match for your team.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#testimonials" className="text-sm hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="#resume-enhancer" className="text-sm hover:text-primary transition-colors">Resume Enhancer</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Our Services</h5>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Specialized Tech Recruitment</Link></li>
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Executive Search</Link></li>
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Contract Staffing</Link></li>
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Consulting Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Newsletter</h5>
            <p className="text-sm mb-3">Stay updated with our latest news and insights.</p>
            <form className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:ring-primary" 
              />
              <Button type="submit" variant="default" size="icon" className="bg-primary hover:bg-primary/90">
                <Send size={18} />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; {currentYear} TechTalent Navigator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
