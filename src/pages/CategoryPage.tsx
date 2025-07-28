


import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const category = categories.find(cat => cat.id === categoryId);
  const categoryProducts = products.filter(product => product.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-black text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Category Not Found</h1>
          <p className="text-gray-400 text-lg">The requested category does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-tight uppercase">
            {category.name}
          </h1>
          <p className="text-gray-300 text-lg">
            Premium racing-inspired {category.name.toLowerCase()}
          </p>
        </div>

        {/* Products */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-16 bg-gray-900 rounded-xl shadow-xl max-w-xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
              No products available
            </h3>
            <p className="text-gray-400 text-lg">
              Check back soon for new additions to this category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
