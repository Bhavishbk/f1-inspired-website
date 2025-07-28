
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const location = useLocation();
  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-[#8B0000] via-[#660000] to-[#4B0000] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
     <Link
  to="/"
  className="text-4xl tracking-tight text-[#FFD700] hover:scale-105 transition-transform"
  style={{
    fontFamily: "'Russo One', sans-serif",
    letterSpacing: '-0.05em',
    fontWeight: '900',
    textTransform: 'uppercase'
  }}
>
  F<span className="text-red-600">1</span>
</Link>



          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-lg font-semibold">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Shop' },
              { path: '/category/tees', label: 'Racing Tees' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 
                hover:bg-white/10 hover:text-[#FFD700] ${
                  (link.path === '/' && isActive('/')) ||
                  (link.path.includes('/category') &&
                    location.pathname.includes('/category')) ||
                  isActive(link.path)
                    ? 'text-[#FFD700] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FFD700] after:rounded-full'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            {/* User */}
            <Link
              to="/auth/login"
              className="hover:text-[#FFD700] transition-colors hover:scale-110"
            >
              <User className="w-6 h-6" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative hover:text-[#FFD700] transition-colors hover:scale-110"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FFD700] text-black font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button className="md:hidden hover:text-[#FFD700] transition-colors hover:scale-110">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
