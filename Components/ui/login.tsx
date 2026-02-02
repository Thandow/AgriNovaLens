import { useState } from 'react';
import { Leaf, Mail, Lock, Eye, EyeOff, AlertCircle, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginProps {
  onLogin: (email: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const showError = (message: string) => {
    setError(message);
    setShowErrorModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShowErrorModal(false);

    // Basic validation
    if (!email || !password) {
      showError('Please fill in all fields. Email and password are required to proceed.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showError('Invalid email format. Please enter a valid email address (e.g., user@example.com)');
      return;
    }

    if (password.length < 6) {
      showError('Password is too short. Password must be at least 6 characters long for security.');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      showError('Passwords do not match. Please ensure both password fields are identical.');
      return;
    }

    setIsLoading(true);

    // Simulate authentication with validation
    setTimeout(() => {
      // Mock credential check - in real app this would be server-side
      const validEmails = ['demo@agrinova.ai', 'farmer@example.com', 'admin@agrinova.ai'];
      const validPassword = 'password123';
      
      if (isLogin) {
        // For login, check credentials
        if (!validEmails.includes(email.toLowerCase()) || password !== validPassword) {
          setIsLoading(false);
          showError('Invalid credentials. The email or password you entered is incorrect. Please try again or use the demo account.');
          return;
        }
      }
      
      setIsLoading(false);
      onLogin(email);
    }, 1000);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setShowErrorModal(false);
    setTimeout(() => {
      setIsLoading(false);
      onLogin('demo@agrinova.ai');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl">
                <Leaf className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-green-900">AgriNova Lens</h1>
                <p className="text-green-600">Intelligent Crop Disease Detection</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1702896781457-1d4f69aebf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjQ2ODA0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agriculture field"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <h2 className="text-gray-900 mb-4">Protect Your Crops with AI</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Leaf className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-900">95%+ Accuracy</p>
                    <p className="text-gray-600 text-sm">AI-powered disease detection</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Leaf className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-900">40% Loss Reduction</p>
                    <p className="text-gray-600 text-sm">Early intervention saves crops</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Leaf className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-900">24/7 Availability</p>
                    <p className="text-gray-600 text-sm">Instant diagnosis anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-green-900">AgriNova Lens</h2>
                <p className="text-green-600 text-sm">Crop Disease Detection</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-gray-900 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Sign in to access your disease detection dashboard'
                  : 'Join AgriNova Lens to protect your crops'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="farmer@example.com"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Register only) */}
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="text-sm text-green-600 hover:text-green-700"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                )}
              </button>

              {/* Demo Button */}
              {isLogin && (
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  disabled={isLoading}
                  className="w-full bg-white text-green-700 py-3 rounded-lg border-2 border-green-200 hover:bg-green-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Try Demo Account
                </button>
              )}
            </form>

            {/* Toggle Login/Register */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                    setShowErrorModal(false);
                    setPassword('');
                    setConfirmPassword('');
                  }}
                  className="text-green-600 hover:text-green-700"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {/* Terms */}
            <p className="mt-6 text-center text-xs text-gray-500">
              By continuing, you agree to AgriNova Lens'{' '}
              <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      {/* Error Modal Popup */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-[slideIn_0.3s_ease-out]">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">Authentication Error</h3>
                <p className="text-gray-700 text-sm mb-4">{error}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowErrorModal(false)}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                  {isLogin && (
                    <button
                      onClick={() => {
                        setShowErrorModal(false);
                        handleDemoLogin();
                      }}
                      className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Use Demo
                    </button>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowErrorModal(false)}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
