// src/components/layout/footer.tsx
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter } from 'lucide-react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://cdn.discordapp.com/attachments/1168222654570975284/1374410831105888376/cover.png?ex=682df355&is=682ca1d5&hm=27fb8b0e9d1b1a90e05259fba39c094f673034b840a1ae26bfb2bc2ae377d0c0&";

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link href="/" className="flex items-center justify-center lg:justify-start mb-4">
              <Image src={logoUrl} alt="Quantastic Logo" width={180} height={45} />
            </Link>
            <p className="text-sm">
              Your fantastic app for talent navigation. We specialize in connecting talent with opportunities.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center lg:text-left">
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
          <div className="text-center lg:text-left">
            <h5 className="text-lg font-semibold text-white mb-4">Our Services</h5>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">IT Services</Link></li>
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Recruitment Services</Link></li>
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Mobile App Development</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="text-center lg:text-left">
            <h5 className="text-lg font-semibold text-white mb-4">Connect With Us</h5>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <Link href="https://www.facebook.com/profile.php?id=61577022924826" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors group">
                <Facebook size={20} className="group-hover:text-accent group-hover:scale-125 transition-all duration-200 ease-in-out" />
              </Link>
              <Link href="https://x.com/QuantasticT" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors group">
                <Twitter size={20} className="group-hover:text-accent group-hover:scale-125 transition-all duration-200 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; {currentYear} Quantastic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
