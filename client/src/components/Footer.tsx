import React from 'react';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <span className="text-3xl font-bold tracking-tighter font-oswald uppercase mb-6 block cursor-pointer">
                John <span className="text-primary">Alite</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md font-mono text-sm leading-relaxed">
              From the streets to the stage. The official platform of John Alite—author, speaker, and advocate for change.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-oswald tracking-widest text-primary">NAVIGATION</h4>
            <ul className="space-y-4 font-mono text-sm text-gray-400">
              <li><Link href="/biography"><span className="hover:text-white transition-colors cursor-pointer">Biography</span></Link></li>
              <li><Link href="/books"><span className="hover:text-white transition-colors cursor-pointer">Books</span></Link></li>
              <li><Link href="/media"><span className="hover:text-white transition-colors cursor-pointer">Film & TV</span></Link></li>
              <li><Link href="/speaking"><span className="hover:text-white transition-colors cursor-pointer">Speaking</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-white transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-oswald tracking-widest text-primary">CONNECT</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube size={20} /></a>
            </div>
            <a href="mailto:contact@johnalite.com" className="flex items-center text-gray-400 hover:text-white transition-colors font-mono text-sm">
              <Mail size={16} className="mr-2" /> contact@johnalite.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>&copy; {new Date().getFullYear()} John Alite. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
