import React from 'react';
import { Package, RefreshCw, Clock, CheckCircle } from 'lucide-react';

export default function ReturnPolicy() {
  const policies = [
    {
      icon: Clock,
      title: "30-Day Window",
      description: "Return your BrewBeater within 30 days of purchase for a full refund"
    },
    {
      icon: Package,
      title: "Original Packaging",
      description: "Product must be returned in original packaging with all accessories"
    },
    {
      icon: RefreshCw,
      title: "Free Returns",
      description: "We cover return shipping costs within the continental US"
    },
    {
      icon: CheckCircle,
      title: "Easy Process",
      description: "Simple online return initiation with instant label generation"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Return Policy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {policies.map((policy) => (
            <div key={policy.title} className="bg-neutral-800 p-6 rounded-xl">
              <policy.icon className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{policy.title}</h3>
              <p className="text-neutral-400">{policy.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-neutral-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Return Process</h2>
            <ol className="list-decimal list-inside space-y-4 text-neutral-300">
              <li>Initiate your return through our online portal or customer service</li>
              <li>Receive a prepaid return shipping label via email</li>
              <li>Pack your BrewBeater in its original packaging</li>
              <li>Drop off the package at any authorized shipping location</li>
              <li>Receive your refund within 5-7 business days of return receipt</li>
            </ol>
          </section>

          <section className="bg-neutral-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Conditions</h2>
            <ul className="list-disc list-inside space-y-4 text-neutral-300">
              <li>Product must be unused and in original condition</li>
              <li>All original accessories must be included</li>
              <li>Proof of purchase required</li>
              <li>Return shipping covered only within continental US</li>
              <li>Damaged or modified products may not be eligible for return</li>
            </ul>
          </section>

          <section className="bg-neutral-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-neutral-300 mb-4">
              Need help with your return? Our customer service team is here to assist you.
            </p>
            <div className="space-y-2">
              <p className="text-neutral-300">Email: support@brewbeater.com</p>
              <p className="text-neutral-300">Phone: 1-800-BREW-BEAT</p>
              <p className="text-neutral-300">Hours: Monday - Friday, 9AM - 5PM EST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}