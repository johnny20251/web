import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BooksSection from '@/components/BooksSection';
import MediaSection from '@/components/MediaSection';
import SpeakingSection from '@/components/SpeakingSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BooksSection />
        <SpeakingSection />
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
