import React from 'react';

const AddCategoryPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Add New Category
                    </h1>
                    <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                        Create a new category to organize your content
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
                    <div className="p-6 sm:p-8">
                        {/* Image Upload */}
                        <div className="mb-8">
                            <label className="block text-lg font-medium text-gray-900 dark:text-white mb-3">
                                Category Image
                            </label>
                            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl">
                                <div className="space-y-3 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none"
                                        >
                                            <span className="px-4 py-2">Upload an image</span>
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
                                Category Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                                placeholder="Enter category title"
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
                                rows={4}
                                className="w-full px-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                                placeholder="Write a brief description..."
                            ></textarea>
                        </div>

                        {/* Featured Toggle */}
                        <div className="flex items-center mb-8">
                            <div className="flex items-center h-5">
                                <input
                                    id="is-featured"
                                    type="checkbox"
                                    className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </div>
                            <label
                                htmlFor="is-featured"
                                className="ml-3 text-lg font-medium text-gray-900 dark:text-white"
                            >
                                Mark as Featured Category
                            </label>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-12">
                            <button
                                type="button"
                                className="px-6 py-3.5 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 dark:focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex-1 text-center flex items-center justify-center"
                            >
                                Create Category
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
            </div>
        </div>
    );
};

export default AddCategoryPage;