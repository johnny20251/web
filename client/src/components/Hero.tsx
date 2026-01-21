import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(/images/john-alite-interview.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <div className="container relative z-20 px-4 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          <h2 className="text-primary font-mono tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            The Official Website
          </h2>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-oswald tracking-tighter leading-[0.9] mb-6">
            JOHN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">ALITE</span>
          </h1>

          <div className="h-1 w-24 bg-primary mb-8 mx-auto md:mx-0"></div>

          <p className="text-gray-300 text-lg md:text-2xl font-mono max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
            From the highest ranks of the <span className="text-white font-bold">Gambino Crime Family</span> to a powerful voice for <span className="text-primary font-bold">Redemption & Justice</span>.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
            <Link href="/speaking">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-oswald tracking-widest text-lg px-8 py-6 rounded-none border border-primary hover:border-red-500 transition-all duration-300 shadow-[0_0_20px_rgba(193,1,1,0.3)] hover:shadow-[0_0_40px_rgba(193,1,1,0.6)]">
                BOOK SPEAKING
              </Button>
            </Link>
            <Link href="/biography">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white font-oswald tracking-widest text-lg px-8 py-6 rounded-none transition-all duration-300">
                READ THE STORY
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-gray-500 font-mono text-xs tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
