import React from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

