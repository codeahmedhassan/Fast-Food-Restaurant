// app/admin/products/page.js
'use client';
import React from 'react';
import {
    FiPackage,
    FiPlus,
    FiEdit,
    FiTrash2,
    FiSearch,
    FiFilter,
    FiStar,
    FiDollarSign,
} from 'react-icons/fi';
import { FaFire } from "react-icons/fa";
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
    const router = useRouter();
    // Sample product data
    const products = [
        {
            id: 1,
            title: "Truffle Mushroom Risotto",
            description: "Creamy arborio rice with wild mushrooms, white truffle oil, and parmesan.",
            image: "/images/risotto.jpg",
            price: 24.99,
            calories: 650,
            popular: true,
            category: "Main Courses",
            featured: true
        },
        {
            id: 2,
            title: "Seared Scallops",
            description: "Pan-seared scallops with cauliflower puree, crispy pancetta, and microgreens.",
            image: "/images/scallops.jpg",
            price: 32.50,
            calories: 420,
            popular: true,
            category: "Appetizers",
            featured: false
        },
        {
            id: 3,
            title: "Chocolate Soufflé",
            description: "Decadent dark chocolate soufflé with vanilla bean ice cream and raspberry coulis.",
            image: "/images/souffle.jpg",
            price: 14.99,
            calories: 780,
            popular: false,
            category: "Desserts",
            featured: true
        },
        {
            id: 4,
            title: "Herb-Crusted Salmon",
            description: "Atlantic salmon with herb crust, lemon butter sauce, roasted potatoes, and asparagus.",
            image: "/images/salmon.jpg",
            price: 28.75,
            calories: 560,
            popular: true,
            category: "Main Courses",
            featured: false
        },
        {
            id: 5,
            title: "Burrata & Heirloom Tomatoes",
            description: "Creamy burrata with heirloom tomatoes, basil oil, and grilled sourdough.",
            image: "/images/burrata.jpg",
            price: 16.99,
            calories: 320,
            popular: false,
            category: "Appetizers",
            featured: true
        },
        {
            id: 6,
            title: "Filet Mignon",
            description: "8oz grass-fed filet with truffle mashed potatoes, roasted garlic, and red wine reduction.",
            image: "/images/filet.jpg",
            price: 42.99,
            calories: 720,
            popular: true,
            category: "Main Courses",
            featured: true
        },
        {
            id: 7,
            title: "Berry Pavlova",
            description: "Crisp meringue with whipped cream, fresh berries, and passionfruit sauce.",
            image: "/images/pavlova.jpg",
            price: 12.99,
            calories: 480,
            popular: false,
            category: "Desserts",
            featured: false
        },
        {
            id: 8,
            title: "Craft Cocktail Flight",
            description: "Three 3oz pours of our signature cocktails: Elderflower Spritz, Smoked Old Fashioned, and Basil Gimlet.",
            image: "/images/cocktails.jpg",
            price: 22.50,
            calories: 380,
            popular: true,
            category: "Beverages",
            featured: true
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-2 sm:p-3 md:p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-4 sm:mb-5 md:mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                            <FiPackage className="mr-2 sm:mr-3 text-indigo-600 dark:text-indigo-400 text-base sm:text-lg md:text-xl" />
                            Menu Products
                        </h1>
                        <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                            Manage your restaurant{"'"}s menu items and offerings
                        </p>
                    </div>

                    <button
                        onClick={() => router.push('/admin/products/add')}
                        className="cursor-pointer flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 text-xs sm:text-sm md:text-base bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md sm:rounded-lg transition-colors duration-300"
                    >
                        <FiPlus className="mr-1 sm:mr-2" />
                        Add Product
                    </button>
                </div>

                {/* Stats Cards - Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                    {[
                        { title: 'Total', value: products.length, change: '+5', icon: <FiPackage />, color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
                        { title: 'Popular', value: products.filter(p => p.popular).length, change: 'Favorites', icon: <FiStar />, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
                        { title: 'Avg Price', value: '$24.99', change: '+3.5%', icon: <FiDollarSign />, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
                        { title: 'Featured', value: products.filter(p => p.featured).length, change: 'Highlighted', icon: <FiFilter />, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm p-2 sm:p-3 md:p-4 lg:p-5 transition-all duration-300 hover:shadow-sm sm:hover:shadow-md"
                        >
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${stat.color} flex items-center justify-center mb-2 sm:mb-3`}>
                                <span className="text-base sm:text-lg md:text-xl">{stat.icon}</span>
                            </div>
                            <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">{stat.title}</h3>
                            <p className="mt-1 text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                            <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.change}</p>
                        </div>
                    ))}
                </div>

                {/* Controls and Search */}
                <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                                <FiSearch className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="block w-full pl-8 sm:pl-10 pr-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="flex space-x-2">
                            <select className="bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>All</option>
                                <option>Appetizers</option>
                                <option>Main Courses</option>
                                <option>Desserts</option>
                                <option>Beverages</option>
                            </select>

                            <select className="bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>Popular</option>
                                <option>Price: Low</option>
                                <option>Price: High</option>
                                <option>Calories</option>
                                <option>Newest</option>
                            </select>

                            <button className="hidden sm:flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md sm:rounded-lg transition-colors duration-300">
                                <FiFilter className="mr-1" />
                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm overflow-hidden transition-all duration-300 hover:shadow-sm sm:hover:shadow-md border border-gray-200 dark:border-gray-700 relative"
                        >
                            {/* Popular badge */}
                            {product.popular && (
                                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-yellow-500 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center z-10">
                                    <FiStar className="mr-0.5 sm:mr-1" />
                                    Popular
                                </div>
                            )}

                            {/* Featured badge */}
                            {product.featured && (
                                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-indigo-600 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center z-10">
                                    Featured
                                </div>
                            )}

                            {/* Product Image */}
                            <div className="h-32 sm:h-36 md:h-40 relative overflow-hidden">
                                <div className="bg-gray-200 border-2 border-dashed rounded-t-lg sm:rounded-t-xl w-full h-full flex items-center justify-center text-gray-400">
                                    <div className="text-center p-2 sm:p-3">
                                        <div className="text-xs sm:text-sm mb-1">Product Image</div>
                                        <div className="text-[10px] sm:text-xs truncate max-w-[120px]">{product.title}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Content */}
                            <div className="p-3 sm:p-4">
                                <div className="flex justify-between items-start">
                                    <div className="max-w-[70%]">
                                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white truncate">
                                            {product.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 truncate">
                                            {product.category}
                                        </p>
                                    </div>

                                    <div className="flex space-x-1 sm:space-x-1.5">
                                        <button className="p-1 sm:p-1.5 rounded-md sm:rounded-lg text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700">
                                            <FiEdit className="text-xs sm:text-sm md:text-base" />
                                        </button>
                                        <button className="p-1 sm:p-1.5 rounded-md sm:rounded-lg text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700">
                                            <FiTrash2 className="text-xs sm:text-sm md:text-base" />
                                        </button>
                                    </div>
                                </div>

                                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="mt-3 flex justify-between items-center">
                                    <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        <FaFire className="mr-1 text-red-500 text-xs sm:text-sm" />
                                        <span>{product.calories} cal</span>
                                    </div>

                                    <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                                        ${product.price.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add New Product Card */}
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 text-center cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300"
                        onClick={() => router.push('/admin/products/add')}
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-2 sm:mb-3">
                            <FiPlus className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                            Add New Product
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            Create a new menu item
                        </p>
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                    <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                        <span className="font-medium">{products.length}</span> products
                    </div>
                    <div className="flex space-x-2">
                        <button className="relative inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            Prev
                        </button>
                        <button className="relative inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}