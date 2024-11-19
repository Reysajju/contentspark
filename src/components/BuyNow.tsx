import { useState } from 'react';
import { ShoppingCart, Package, CreditCard } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

const product: Product = {
  id: 'brewbeater-pro',
  name: 'BrewBeater Pro',
  price: 49.99,
  description: 'Professional-grade battery-powered coffee beater with 3 speed settings'
};

export default function BuyNow() {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Order placed successfully! This is a demo.');
    } catch (error) {
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-neutral-800 rounded-2xl p-8 aspect-square flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1522992319-0365e5f11656?auto=format&fit=crop&w=800&q=80"
              alt="BrewBeater Pro"
              className="max-w-full max-h-full object-cover rounded-xl"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-2xl text-amber-500">${product.price}</p>
            </div>

            <p className="text-neutral-300">{product.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-white">Quantity:</label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="bg-neutral-800 text-white px-4 py-2 rounded-lg border border-neutral-700 focus:border-amber-500 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleBuy}
                disabled={loading}
                className="w-full bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  'Processing...'
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Buy Now - ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 border-t border-neutral-800 pt-8">
              <div className="flex items-start gap-4">
                <Package className="h-6 w-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Free Shipping</h3>
                  <p className="text-neutral-400">Delivered within 3-5 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CreditCard className="h-6 w-6 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Secure Payment</h3>
                  <p className="text-neutral-400">All major credit cards accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}