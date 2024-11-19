import React from 'react';
import { useNavigate } from 'react-router-dom';
import Features from './Features';
import Specs from './Specs';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source
            src="https://player.vimeo.com/external/459014232.sd.mp4?s=2c12dab9b4bbf59e04768bec3c6d7d10f2c5c545&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Perfect Coffee Foam,
            <br />
            <span className="text-amber-500">Every Single Time</span>
          </h1>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Experience barista-quality microfoam with our revolutionary battery-powered coffee beater.
            Designed for coffee enthusiasts who demand perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/buy')}
              className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-400 transition"
            >
              Buy Now - $49.99
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <Features />
      <Specs />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Coffee Experience Today
          </h2>
          <p className="text-neutral-300 mb-8">
            Join thousands of coffee lovers who have elevated their home brewing game.
            30-day money-back guarantee.
          </p>
          <button 
            onClick={() => navigate('/buy')}
            className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-400 transition"
          >
            Get Your BrewBeater Now
          </button>
        </div>
      </section>
    </>
  );
}