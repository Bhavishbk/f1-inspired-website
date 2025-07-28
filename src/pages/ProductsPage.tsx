


import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-tight uppercase">
            All Products
          </h1>
          <p className="text-gray-300 text-lg">
            Explore our premium Formula 1-inspired streetwear collection
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12 max-w-lg mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-lg rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-lg"
          />
        </div>

        {/* Results */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-gray-900 rounded-xl shadow-xl max-w-xl mx-auto border border-gray-700">
            <div className="text-gray-500 mb-6">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">No products found</h3>
            <p className="text-gray-400 text-lg">Try adjusting your search terms</p>
          </div>
        ) : (
          <>
            {/* Results Info */}
            <div className="mb-6 text-center">
              <p className="text-gray-300 text-lg font-medium">
                {searchQuery
                  ? `Found ${filteredProducts.length} product${filteredProducts.length === 1 ? '' : 's'} for "${searchQuery}"`
                  : `Showing all ${filteredProducts.length} products`}
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
