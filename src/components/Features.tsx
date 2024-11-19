import React from 'react';
import { Scissors, Share2, Sparkles, Clock, Video, Instagram } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: 'Smart Clip Generation',
    description: 'AI-powered content analysis to create perfect short-form clips'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Dynamic Subtitles',
    description: 'Auto-generated, perfectly synced captions that pop'
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: 'Direct Sharing',
    description: 'Share directly to TikTok, Instagram Reels, and YouTube Shorts'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Time-Saving',
    description: 'Transform long videos into short clips in minutes'
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Portrait Optimization',
    description: 'Perfect formatting for vertical video platforms'
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: 'Multi-Platform Ready',
    description: 'Optimized for all major social media platforms'
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}