// app/admin/categories/page.js
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
    FiGrid,
    FiPlus,
    FiEdit,
    FiTrash2,
    FiSearch,
    FiFilter,
    FiChevronDown,
    FiChevronUp
} from 'react-icons/fi';

export default function CategoriesPage() {
    const router = useRouter();
    // Sample category data
    const categories = [
        {
            id: 1,
            title: "Appetizers",
            description: "Light bites to start your meal, featuring fresh ingredients and vibrant flavors.",
            image: "/images/appetizers.jpg",
            items: 12,
            featured: true
        },
        {
            id: 2,
            title: "Main Courses",
            description: "Heart of our menu with chef's specialties and signature dishes for a satisfying meal.",
            image: "/images/main-courses.jpg",
            items: 18,
            featured: true
        },
        {
            id: 3,
            title: "Desserts",
            description: "Sweet endings to your dining experience, crafted with artisanal techniques.",
            image: "/images/desserts.jpg",
            items: 8,
            featured: false
        },
        {
            id: 4,
            title: "Drinks & Beverages",
            description: "Refreshing selections including cocktails, wines, and specialty coffees.",
            image: "/images/beverages.jpg",
            items: 22,
            featured: true
        },
        {
            id: 5,
            title: "Vegetarian Specials",
            description: "Plant-based creations that celebrate seasonal produce and bold flavors.",
            image: "/images/vegetarian.jpg",
            items: 9,
            featured: false
        },
        {
            id: 6,
            title: "Seafood Selection",
            description: "Ocean-fresh catches prepared with coastal-inspired techniques.",
            image: "/images/seafood.jpg",
            items: 7,
            featured: true
        },
        {
            id: 7,
            title: "Chef's Recommendations",
            description: "Curated dishes showcasing the best of our seasonal offerings.",
            image: "/images/chef-specials.jpg",
            items: 5,
            featured: true
        },
        {
            id: 8,
            title: "Kids Menu",
            description: "Delicious and nutritious options designed for our younger guests.",
            image: "/images/kids-menu.jpg",
            items: 6,
            featured: false
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-2 sm:p-3 md:p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                            <FiGrid className="mr-2 sm:mr-3 text-indigo-600 dark:text-indigo-400 text-base sm:text-lg md:text-xl" />
                            Menu Categories
                        </h1>
                        <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                            Manage your restaurant{"'"}s menu organization
                        </p>
                    </div>

                    <button
                        className="cursor-pointer flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 text-xs sm:text-sm md:text-base bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md sm:rounded-lg transition-colors duration-300"
                        onClick={() => router.push('/admin/categories/add')}
                    >
                        <FiPlus className="mr-1 sm:mr-2" />
                        Add Category
                    </button>
                </div>

                {/* Stats Cards - Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                    {[
                        { title: 'Total', value: categories.length, change: '+2', icon: <FiGrid />, color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
                        { title: 'Featured', value: categories.filter(c => c.featured).length, change: '4', icon: <FiChevronUp />, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
                        { title: 'Menu Items', value: categories.reduce((sum, cat) => sum + cat.items, 0), change: '+12', icon: <FiChevronDown />, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
                        { title: 'Active', value: categories.length, change: 'All', icon: <FiFilter />, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm p-2 sm:p-3 md:p-4 lg:p-6 transition-all duration-300 hover:shadow-sm sm:hover:shadow-md"
                        >
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${stat.color} flex items-center justify-center mb-2 sm:mb-3 md:mb-4`}>
                                <span className="text-base sm:text-lg md:text-xl">{stat.icon}</span>
                            </div>
                            <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white truncate">{stat.title}</h3>
                            <p className="mt-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                            <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.change}</p>
                        </div>
                    ))}
                </div>

                {/* Controls and Search */}
                <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm mb-4 sm:mb-5 md:mb-6 lg:mb-8 p-3 sm:p-4 md:p-5 lg:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                                <FiSearch className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search categories..."
                                className="block w-full pl-8 sm:pl-10 pr-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="flex space-x-2 sm:space-x-3">
                            <select className="bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>All</option>
                                <option>Featured</option>
                                <option>Appetizers</option>
                                <option>Main Courses</option>
                                <option>Desserts</option>
                                <option>Beverages</option>
                            </select>

                            <select className="bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>Newest</option>
                                <option>Oldest</option>
                                <option>A-Z</option>
                                <option>Z-A</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm overflow-hidden transition-all duration-300 hover:shadow-sm sm:hover:shadow-md border border-gray-200 dark:border-gray-700"
                        >
                            {/* Category Image */}
                            <div className="h-32 sm:h-36 md:h-40 lg:h-48 relative overflow-hidden">
                                <div className="bg-gray-200 border-2 border-dashed rounded-t-lg sm:rounded-t-xl w-full h-full flex items-center justify-center text-gray-400">
                                    <div className="text-center p-2 sm:p-3">
                                        <div className="text-xs sm:text-sm mb-1">Category Image</div>
                                        <div className="text-[10px] sm:text-xs">Image will appear here</div>
                                    </div>
                                </div>

                                {/* Featured Badge */}
                                {category.featured && (
                                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-yellow-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center">
                                        <FiChevronUp className="mr-0.5 sm:mr-1" />
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Category Content */}
                            <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white truncate max-w-[70%]">
                                        {category.title}
                                    </h3>

                                    <div className="flex space-x-1 sm:space-x-2">
                                        <button className="p-1 sm:p-1.5 rounded-md sm:rounded-lg text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700">
                                            <FiEdit className="text-sm sm:text-base" />
                                        </button>
                                        <button className="p-1 sm:p-1.5 rounded-md sm:rounded-lg text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700">
                                            <FiTrash2 className="text-sm sm:text-base" />
                                        </button>
                                    </div>
                                </div>

                                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                    {category.description}
                                </p>

                                <div className="mt-3 flex justify-between items-center">
                                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        {category.items} items
                                    </div>

                                    <button className="text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                                        View Items
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add New Category Card */}
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 text-center cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300"
                        onClick={() => router.push('/admin/categories/add')}
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                            <FiPlus className="text-xl sm:text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                            Add New Category
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            Create a new menu category
                        </p>
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                    <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                        <span className="font-medium">{categories.length}</span> categories
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