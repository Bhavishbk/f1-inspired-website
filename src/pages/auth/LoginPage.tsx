
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle =
    'w-full pl-10 pr-12 py-3 bg-[#2a2a2a] text-white border border-[#DAA520]/40 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent placeholder-gray-400';
  const buttonStyle =
    'w-full bg-[#DAA520] hover:bg-yellow-600 text-black py-3 rounded-lg font-semibold transition';
  const cardStyle =
    'bg-[#1a1a1a] border border-[#DAA520]/30 rounded-xl shadow-lg p-8 text-white';

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className={cardStyle}>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#DAA520]">Welcome Back</h1>
            <p className="text-gray-400 mt-2">Sign in to your F1 Racing account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-gray-400">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-500 text-[#DAA520] focus:ring-[#DAA520] bg-[#2a2a2a]"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>

              <Link
                to="/auth/forgot-password"
                className="text-sm hover:text-[#DAA520]"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className={buttonStyle}>
              Sign In
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/auth/signup" className="text-[#DAA520] hover:text-yellow-600 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
