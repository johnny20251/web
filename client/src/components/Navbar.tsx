import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'BIOGRAPHY', href: '/biography' },
    { name: 'BOOKS', href: '/books' },
    { name: 'FILM & TV', href: '/media' },
    { name: 'SPEAKING', href: '/speaking' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl md:text-3xl font-bold tracking-tighter text-white hover:text-primary transition-colors duration-300 font-oswald uppercase">
            John <span className="text-primary">Alite</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  'text-sm font-medium tracking-widest hover:text-primary transition-colors duration-300 relative group font-mono',
                  location === link.href ? 'text-primary' : 'text-gray-300'
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <a
              className="text-2xl font-bold tracking-widest text-white hover:text-primary transition-colors duration-300 font-oswald"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
