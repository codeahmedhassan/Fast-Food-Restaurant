// app/admin/categories/page.js
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                            <FiGrid className="mr-3 text-indigo-600 dark:text-indigo-400" />
                            Menu Categories
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Manage your restaurant{"'"}s menu categories and organization
                        </p>
                    </div>

                    <button className="mt-4 md:mt-0 flex items-center justify-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300">
                        <FiPlus className="mr-2" />
                        Add New Category
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { title: 'Total Categories', value: categories.length, change: '+2 from last month', icon: <FiGrid />, color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
                        { title: 'Featured Categories', value: categories.filter(c => c.featured).length, change: '4 currently featured', icon: <FiChevronUp />, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
                        { title: 'Menu Items', value: categories.reduce((sum, cat) => sum + cat.items, 0), change: '+12 from last month', icon: <FiChevronDown />, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
                        { title: 'Active Categories', value: categories.length, change: 'All categories active', icon: <FiFilter />, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
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
                                placeholder="Search categories..."
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="flex space-x-3">
                            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>All Categories</option>
                                <option>Featured Only</option>
                                <option>Appetizers</option>
                                <option>Main Courses</option>
                                <option>Desserts</option>
                                <option>Beverages</option>
                            </select>

                            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>Sort by: Newest</option>
                                <option>Sort by: Oldest</option>
                                <option>Sort by: Name (A-Z)</option>
                                <option>Sort by: Name (Z-A)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-200 dark:border-gray-700"
                        >
                            {/* Category Image */}
                            <div className="h-48 relative overflow-hidden">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                                    <div className="text-center p-4">
                                        <div className="text-sm mb-1">Category Image</div>
                                        <div className="text-xs">Image will appear here</div>
                                    </div>
                                </div>

                                {/* Featured Badge */}
                                {category.featured && (
                                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                        <FiChevronUp className="mr-1" />
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Category Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>

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
                                    {category.description}
                                </p>

                                <div className="mt-4 flex justify-between items-center">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {category.items} menu items
                                    </div>

                                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                                        View Items
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add New Category Card */}
                    <div
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-12 text-center cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                            <FiPlus className="text-3xl text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Add New Category</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Create a new menu category to organize your dishes
                        </p>
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-10 flex items-center justify-between">
                    <div className="text-sm text-gray-700 dark:text-gray-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                        <span className="font-medium">{categories.length}</span> categories
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