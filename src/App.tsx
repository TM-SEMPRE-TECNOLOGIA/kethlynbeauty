import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { SocialProof } from './components/SocialProof';
import { Trajectory } from './components/Trajectory';
import { LookbookMarquee } from './components/LookbookMarquee';
import { Services } from './components/Services';
import { BiosafetyGallery } from './components/BiosafetyGallery';
import { MethodDifferentials } from './components/MethodDifferentials';
import { Testimonials } from './components/Testimonials';
import { InstagramFeed } from './components/InstagramFeed';
import { FAQ } from './components/FAQ';
import { LocationCTA } from './components/LocationCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-nude text-brand-espresso flex flex-col selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <MarqueeTicker />
        <SocialProof />
        <Trajectory />
        <LookbookMarquee />
        <Services />
        <BiosafetyGallery />
        <MethodDifferentials />
        <Testimonials />
        <InstagramFeed />
        <FAQ />
        <LocationCTA />
      </main>

      {/* Footer & Floating CTAs */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
