import React from 'react';
import { books } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BooksSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-primary font-mono tracking-[0.2em] text-sm mb-2 uppercase">Published Works</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white font-oswald uppercase">
              The <span className="text-outline-white">Truth</span> Unveiled
            </h3>
          </div>
          <Button variant="link" className="text-white hover:text-primary font-mono mt-4 md:mt-0 group">
            VIEW ALL BOOKS <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="group relative">
              <div className="aspect-[2/3] overflow-hidden bg-gray-900 mb-6 relative shadow-2xl">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black to-transparent z-20">
                  <Button size="sm" className="w-full bg-primary hover:bg-red-700 text-white font-oswald tracking-widest rounded-none">
                    BUY NOW
                  </Button>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-white font-oswald uppercase mb-2 group-hover:text-primary transition-colors">
                {book.title}
              </h4>
              <p className="text-gray-400 font-mono text-sm leading-relaxed line-clamp-3">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
