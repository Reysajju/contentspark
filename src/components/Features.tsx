import { Battery, Clock, Coffee, Waves } from 'lucide-react';

const features = [
  {
    icon: Battery,
    title: 'Long Battery Life',
    description: 'Up to 100 cups per charge with our efficient motor technology'
  },
  {
    icon: Clock,
    title: 'Quick Operation',
    description: 'Perfect foam in just 15 seconds for your favorite coffee drinks'
  },
  {
    icon: Waves,
    title: 'Multiple Speeds',
    description: '3 speed settings for different foam textures and coffee styles'
  },
  {
    icon: Coffee,
    title: 'Barista Quality',
    description: 'Professional-grade results in the comfort of your home'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose BrewBeater?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 transition">
              <feature.icon className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}