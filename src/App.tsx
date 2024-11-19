import React from 'react';
import { Sparkles } from 'lucide-react';
import UploadSection from './components/UploadSection';
import Features from './components/Features';
import ProcessingStatus from './components/ProcessingStatus';
import VideoResults from './components/VideoResults';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="w-full py-6 px-4 border-b bg-white/80 backdrop-blur-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ContentSpark
            </span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </header>

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Content with AI
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Upload your long-form videos and let our AI transform them into engaging short-form content for TikTok, Instagram Reels, and YouTube Shorts.
            </p>
            
            <div className="relative w-full max-w-4xl mx-auto mb-16">
              <img
                src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=2000&q=80"
                alt="Video editing dashboard"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>

            <UploadSection />
            <VideoResults />
          </div>

          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Transform Your Content Workflow</h2>
            <Features />
          </section>
        </div>
      </main>

      <ProcessingStatus />

      <footer className="bg-gray-50 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 ContentSpark. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}