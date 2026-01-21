import React from 'react';
import { mediaItems } from '@/data/content';
import { PlayCircle } from 'lucide-react';

const MediaSection: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-primary font-mono tracking-[0.2em] text-sm mb-2 uppercase">In The Press</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-oswald uppercase mb-6">
            Global <span className="text-gray-700">Coverage</span>
          </h3>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
          {mediaItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`
                group relative p-12 border-b border-white/10 hover:bg-zinc-900 transition-colors duration-500
                ${index % 2 === 0 ? 'md:border-r' : ''}
                ${index >= mediaItems.length - 2 ? 'md:border-b-0' : ''}
              `}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-primary tracking-widest uppercase">{item.source}</span>
                <PlayCircle className="text-gray-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold font-oswald uppercase mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h4>
              
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">
                {item.excerpt}
              </p>
              
              <a href={item.link} className="inline-block text-xs font-bold tracking-widest uppercase border-b border-primary pb-1 hover:text-primary transition-colors">
                Read Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
