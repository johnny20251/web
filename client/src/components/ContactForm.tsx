import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formsubmit.co/ajax/contact@johnalite.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-mono tracking-[0.2em] text-sm mb-2 uppercase">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-bold font-oswald uppercase mb-6">
              Contact <span className="text-outline-white">John</span>
            </h3>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Email</h4>
              <p className="text-gray-400 font-mono">contact@johnalite.com</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Phone</h4>
              <p className="text-gray-400 font-mono">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Location</h4>
              <p className="text-gray-400 font-mono">New Jersey, USA</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-zinc-900 p-8 border border-white/10">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-mono tracking-widest uppercase mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-mono tracking-widest uppercase mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-mono tracking-widest uppercase mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                placeholder="Speaking Inquiry / Media Request / Other"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-mono tracking-widest uppercase mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://johnalite.com/thank-you" />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-red-700 text-white font-oswald tracking-widest text-lg py-4 rounded-none border border-primary hover:border-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </Button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-900/20 border border-green-500 text-green-400 text-center font-mono">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-900/20 border border-red-500 text-red-400 text-center font-mono">
                ✗ Error sending message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
