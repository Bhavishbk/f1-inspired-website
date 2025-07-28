
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, ShieldCheck, Ruler } from 'lucide-react';
import { categories } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-[#121212] text-white">
      {/* Hero Section */}
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
  {/* Background Image with full car */}
  <img
    src="https://c4.wallpaperflare.com/wallpaper/153/789/104/renault-r-s-17-formula-one-racing-car-4k-wallpaper-preview.jpg"
    alt="Yellow Formula 1 car background"
    className="absolute inset-0 w-full h-full object-contain object-center opacity-90"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>

  {/* Hero Content */}
  <div className="relative container mx-auto px-6 text-center z-10">
    <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
      UNLEASH THE <span className="text-[#FFD700]">TRACK STYLE</span>
    </h1>
    <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
      High-octane fashion for racers, dreamers, and street legends.
    </p>
    <Link
      to="/products"
      className="inline-flex items-center bg-[#FFD700] hover:bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
    >
      Click to shop
      <ArrowRight className="ml-3 w-6 h-6" />
    </Link>
  </div>
</section>



      {/* Features Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { icon: Flame, title: 'Ignite Style', text: 'Bold aesthetics fueled by Formula 1 passion.' },
            { icon: ShieldCheck, title: 'Performance Grade', text: 'Materials tested for durability, made for speed.' },
            { icon: Ruler, title: 'Engineered Fit', text: 'Cut and measured to hug your form on every turn.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-[#DAA520] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <item.icon className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14 text-[#DAA520]">Trackside Collections</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="group">
                {category.isActive ? (
                  <Link to={`/category/${category.id}`} className="block">
                    <div className="relative overflow-hidden rounded-xl border border-[#DAA520]/20 hover:border-[#DAA520] transition-all duration-300">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-semibold text-base">{category.name}</h3>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative overflow-hidden rounded-xl opacity-50 cursor-not-allowed border border-[#DAA520]/20">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-base">{category.name}</h3>
                      <p className="text-gray-400 text-xs">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Become a Track Insider</h2>
          <p className="text-lg text-gray-400 mb-10">Join the grid. Get early access and exclusive drops.</p>
          <Link
            to="/auth/signup"
            className="inline-flex items-center bg-[#DAA520] hover:bg-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-md"
          >
            Register to race
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
