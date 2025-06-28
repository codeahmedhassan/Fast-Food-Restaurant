// app/login/page.jsx
"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMail, FiPhone, FiLock, FiGithub, FiEye, FiEyeOff } from 'react-icons/fi';

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add your login logic here
  };

  const handleGitHubLogin = () => {
    console.log('GitHub login clicked');
    // Add GitHub OAuth logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 pb-20 pt-32">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-200">
            Burger Bliss
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Sign in to manage your restaurant bookings
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex mb-6">
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-2 px-4 rounded-l-lg font-medium transition-colors ${loginMethod === 'email'
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-600'
                  }`}
              >
                Email
              </button>
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-2 px-4 rounded-r-lg font-medium transition-colors ${loginMethod === 'phone'
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-600'
                  }`}
              >
                Phone
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {loginMethod === 'email' ? (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400 dark:text:text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  ) : (
                    <FiEye className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-amber-600 dark:text-amber-500 border-gray-300 dark:border-gray-600 rounded focus:ring-amber-500 dark:bg-gray-700"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:bg-amber-500 dark:hover:bg-amber-600"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleGitHubLogin}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  <FiGithub className="h-5 w-5 mr-2" />
                  GitHub
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don{"'"}t have an account?{' '}
              <Link
                href={"/signup"}
                className="font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
              >
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