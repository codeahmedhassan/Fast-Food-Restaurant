// app/admin/products/page.js
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

export default function ProductsPage() {
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                            <FiPackage className="mr-3 text-indigo-600 dark:text-indigo-400" />
                            Menu Products
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Manage your restaurant{"'"}s menu items and offerings
                        </p>
                    </div>

                    <button className="mt-4 md:mt-0 flex items-center justify-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300">
                        <FiPlus className="mr-2" />
                        Add New Product
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { title: 'Total Products', value: products.length, change: '+5 from last month', icon: <FiPackage />, color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
                        { title: 'Popular Items', value: products.filter(p => p.popular).length, change: 'Customer favorites', icon: <FiStar />, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
                        { title: 'Average Price', value: '$24.99', change: '+3.5% from last quarter', icon: <FiDollarSign />, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
                        { title: 'Featured Items', value: products.filter(p => p.featured).length, change: 'Highlighted on menu', icon: <FiFilter />, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md"
                        >
                            <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mb-4`}>
                                <span className="text-xl">{stat.icon}</span>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{stat.title}</h3>
                            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.change}</p>
                        </div>
                    ))}
                </div>

                {/* Controls and Search */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-8 p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="relative flex-grow max-w-lg">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="flex space-x-3">
                            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>All Categories</option>
                                <option>Appetizers</option>
                                <option>Main Courses</option>
                                <option>Desserts</option>
                                <option>Beverages</option>
                            </select>

                            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>Sort by: Popularity</option>
                                <option>Sort by: Price (Low to High)</option>
                                <option>Sort by: Price (High to Low)</option>
                                <option>Sort by: Calories</option>
                                <option>Sort by: Newest</option>
                            </select>

                            <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300">
                                <FiFilter className="mr-2" />
                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-200 dark:border-gray-700 relative"
                        >
                            {/* Popular badge */}
                            {product.popular && (
                                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center z-10">
                                    <FiStar className="mr-1" />
                                    Popular
                                </div>
                            )}

                            {/* Featured badge */}
                            {product.featured && (
                                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center z-10">
                                    Featured
                                </div>
                            )}

                            {/* Product Image */}
                            <div className="h-48 relative overflow-hidden">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                                    <div className="text-center p-4">
                                        <div className="text-sm mb-1">Product Image</div>
                                        <div className="text-xs">{product.title}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Content */}
                            <div className="p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</h3>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400">{product.category}</p>
                                    </div>

                                    <div className="flex space-x-2">
                                        <button className="p-2 rounded-lg text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700">
                                            <FiEdit />
                                        </button>
                                        <button className="p-2 rounded-lg text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700">
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>

                                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="mt-4 flex justify-between items-center">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <FaFire className="mr-1 text-red-500" />
                                        <span>{product.calories} cal</span>
                                    </div>

                                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                                        ${product.price.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add New Product Card */}
                    <div
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-12 text-center cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                            <FiPlus className="text-3xl text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Add New Product</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Create a new menu item to expand your offerings
                        </p>
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-700 dark:text-gray-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                        <span className="font-medium">{products.length}</span> products
                    </div>
                    <div className="flex space-x-2">
                        <button className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            Previous
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}