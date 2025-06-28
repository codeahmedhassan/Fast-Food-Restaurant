'use client'
import React, { useState } from 'react';

const AddProductPage = () => {
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPopular, setIsPopular] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const categories = [
    { id: '1', name: 'Burgers' },
    { id: '2', name: 'Pizzas' },
    { id: '3', name: 'Sushi' },
    { id: '4', name: 'Salads' },
    { id: '5', name: 'Desserts' },
    { id: '6', name: 'Drinks' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl bg-clip-text   bg-gradient-to-r from-indigo-600 to-purple-600">
            Add New Product
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Add delicious items to your menu with all the necessary details
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                {/* Image Upload */}
                <div className="mb-8">
                  <label className="block text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Product Image
                  </label>
                  <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300">
                    <div className="space-y-3 text-center">
                      <div className="mx-auto h-20 w-20 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <svg
                          className="h-10 w-10 text-indigo-600 dark:text-indigo-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none"
                        >
                          <span className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30">Upload an image</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                          />
                        </label>
                        <p className="pl-1 mt-2 sm:mt-0">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Title Input */}
                <div className="mb-8">
                  <label
                    htmlFor="title"
                    className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                  >
                    Product Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                    placeholder="e.g., Gourmet Burger"
                  />
                </div>

                {/* Description Textarea */}
                <div className="mb-8">
                  <label
                    htmlFor="description"
                    className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                    placeholder="Describe your delicious product..."
                  ></textarea>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Category Select */}
                <div className="mb-8">
                  <label
                    htmlFor="category"
                    className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                  >
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors appearance-none pr-10"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 dark:text-gray-300">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Price and Calories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                    >
                      Price ($)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 dark:text-gray-400 sm:text-lg">$</span>
                      </div>
                      <input
                        type="number"
                        id="price"
                        className="w-full pl-8 pr-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                        placeholder="0.00"
                        step="0.01"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="calories"
                      className="block text-lg font-medium text-gray-900 dark:text-white mb-3"
                    >
                      Calories
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="calories"
                        className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                        placeholder="e.g., 450"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 dark:text-gray-400 sm:text-lg">kcal</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toggles */}
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex items-center h-5">
                      <input
                        id="is-featured"
                        type="checkbox"
                        checked={isFeatured}
                        onChange={() => setIsFeatured(!isFeatured)}
                        className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <label
                      htmlFor="is-featured"
                      className="ml-3 text-lg font-medium text-gray-900 dark:text-white flex items-center"
                    >
                      Featured Product
                      {isFeatured && (
                        <span className="ml-2 px-2 py-1 text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full">
                          Promoted
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center h-5">
                      <input
                        id="is-popular"
                        type="checkbox"
                        checked={isPopular}
                        onChange={() => setIsPopular(!isPopular)}
                        className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <label
                      htmlFor="is-popular"
                      className="ml-3 text-lg font-medium text-gray-900 dark:text-white flex items-center"
                    >
                      Popular Item
                      {isPopular && (
                        <span className="ml-2 px-2 py-1 text-xs font-bold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full">
                          Hot
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button
                type="button"
                className="px-6 py-3.5 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 dark:focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex-1 text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Create Product
              </button>
              <button
                type="button"
                className="px-6 py-3.5 text-lg font-semibold bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Add delicious products to your menu and watch your sales grow!</p>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;