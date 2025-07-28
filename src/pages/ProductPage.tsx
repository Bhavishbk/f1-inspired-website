

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Search } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const product = products.find(p => p.id === productId);

  const filteredProducts = products.filter(p =>
    p.id !== productId && (
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white py-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Product Not Found</h1>
        <p className="text-gray-400 mb-6">The requested F1-themed item is unavailable.</p>
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Collection
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collection
          </Link>
        </div>

        {/* Product Section */}
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-yellow-400">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative bg-black">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 md:h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-2xl">OUT OF STOCK</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-10 flex flex-col justify-center">
              <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-wide uppercase">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-white mb-6">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mb-10">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center py-4 px-6 rounded-full font-semibold transition-all text-black text-lg ${
                    product.inStock
                      ? 'bg-yellow-400 hover:bg-yellow-500 shadow-lg'
                      : 'bg-gray-600 cursor-not-allowed text-gray-300'
                  }`}
                >
                  <ShoppingCart className="w-6 h-6 mr-2" />
                  {product.inStock ? 'Add to Garage' : 'Unavailable'}
                </button>

                <button className="p-4 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
                  <Heart className="w-6 h-6" />
                </button>

                <button className="p-4 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>

              {/* Features */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Race-Inspired Features
                </h3>
                <ul className="text-gray-300 space-y-2 text-lg">
                  <li>• Aero-grade cotton-blend construction</li>
                  <li>• Inspired by iconic F1 teams and circuits</li>
                  <li>• Lightweight fit for track-day comfort</li>
                  <li>• Precision-stitched durability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Explore More */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
            Explore More Gear
          </h2>

          {/* Search */}
          <div className="relative mb-10 max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search pitlane items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 text-white border border-yellow-400 rounded-full focus:ring-2 focus:ring-yellow-400 text-lg"
            />
          </div>

          {searchQuery && filteredProducts.length === 0 ? (
            <div className="text-center py-10">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No related items found</h3>
              <p className="text-gray-400">Try a different keyword or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {(searchQuery ? filteredProducts : products.filter(p => p.id !== productId).slice(0, 4)).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
