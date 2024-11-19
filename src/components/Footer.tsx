import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
            onClick={() => navigate('/')}
          >
            <Coffee className="h-6 w-6 text-amber-500" />
            <span className="text-white font-bold text-lg">BrewBeater</span>
          </div>
          <p className="text-neutral-400">
            Revolutionizing your coffee experience, one foam at a time.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-neutral-400 hover:text-amber-500 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-amber-500 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-amber-500 transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="text-neutral-400 hover:text-amber-500 transition">Features</a></li>
            <li><a href="#specs" className="text-neutral-400 hover:text-amber-500 transition">Specifications</a></li>
            <li><a onClick={() => navigate('/buy')} className="text-neutral-400 hover:text-amber-500 transition cursor-pointer">Shop Now</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition">FAQ</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition">Shipping</a></li>
            <li><a onClick={() => navigate('/return-policy')} className="text-neutral-400 hover:text-amber-500 transition cursor-pointer">Returns</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-neutral-400 mb-4">Stay updated with our latest offers and tips.</p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-amber-500 focus:outline-none"
            />
            <button className="w-full bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-neutral-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500">© 2024 BrewBeater. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-amber-500 transition">Privacy Policy</a>
            <a onClick={() => navigate('/return-policy')} className="text-neutral-500 hover:text-amber-500 transition cursor-pointer">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}