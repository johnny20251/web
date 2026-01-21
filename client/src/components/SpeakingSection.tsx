import React from 'react';
import { Button } from '@/components/ui/button';

const SpeakingSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-zinc-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale"
        style={{ backgroundImage: 'url(/images/speaking-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-primary font-mono tracking-[0.2em] text-sm mb-4 uppercase">Speaking Engagements</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white font-oswald uppercase mb-8 leading-none">
            Inspire <br /><span className="text-outline-white">Change</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-300 font-mono mb-12 leading-relaxed">
            "I don't just tell stories. I share the raw, unfiltered truth about choices, consequences, and the power of redemption."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="bg-black/50 backdrop-blur-sm p-8 border border-white/10">
              <h4 className="text-primary font-oswald text-xl mb-2 uppercase">Corporate</h4>
              <p className="text-gray-400 text-sm font-mono">Leadership, ethics, and decision-making under pressure.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 border border-white/10">
              <h4 className="text-primary font-oswald text-xl mb-2 uppercase">Youth Advocacy</h4>
              <p className="text-gray-400 text-sm font-mono">Anti-bullying, drug prevention, and choosing the right path.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 border border-white/10">
              <h4 className="text-primary font-oswald text-xl mb-2 uppercase">Law Enforcement</h4>
              <p className="text-gray-400 text-sm font-mono">Insights into organized crime structures and psychology.</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-black hover:bg-primary hover:text-white font-oswald tracking-widest text-lg px-12 py-8 rounded-none transition-all duration-300">
            INQUIRE FOR BOOKING
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
