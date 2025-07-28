
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { state, updateQuantity, removeFromCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] py-12 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold mb-8 text-[#DAA520]">Your Garage</h1>
          <div className="py-16">
            <ShoppingBag className="w-20 h-20 text-gray-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-3">Empty</h3>
            <p className="text-gray-400 mb-8">Add some F1 gear to get the engines running!</p>
            <Link
              to="/products"
              className="inline-flex items-center bg-[#DAA520] hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-12 text-[#DAA520]">Your items</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center bg-[#2a2a2a] rounded-xl shadow-md hover:shadow-xl border border-[#DAA520]/30 p-6 transition"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 ml-6">
                  <h3 className="text-xl font-semibold text-[#DAA520]">{item.product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Premium racing wear for ultimate street performance.
                  </p>
                  <p className="text-white font-bold">${item.product.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="p-2 hover:bg-[#333] rounded"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="w-8 text-center font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="p-2 hover:bg-[#333] rounded"
                  >
                    <Plus className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-4 p-2 text-red-500 hover:bg-[#333] rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-[#2a2a2a] rounded-xl shadow-md p-6 border border-[#DAA520]/30">
              <h2 className="text-2xl font-semibold mb-6 text-[#DAA520]">Order Summary</h2>

              <div className="space-y-3 mb-6">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm text-gray-300">
                    <span>{item.product.name} × {item.quantity}</span>
                    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#DAA520]/30 pt-4 mb-6">
                <div className="flex justify-between items-center text-xl font-bold text-white">
                  <span>Total</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-[#DAA520] hover:bg-yellow-600 text-black py-3 rounded-lg font-semibold transition mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center text-gray-400 hover:text-[#DAA520] transition"
              >
                Thankyou and Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
