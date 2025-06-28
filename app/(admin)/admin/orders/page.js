// app/admin/orders/page.js
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
    FiShoppingCart,
    FiPlus,
    FiSearch,
    FiFilter,
    FiClock,
    FiCheckCircle,
    FiXCircle,
    FiTruck,
    FiDollarSign,
    FiUser
} from 'react-icons/fi';

export default function OrdersPage() {
    const router = useRouter();
    // Sample order data
    const orders = [
        {
            id: "ORD-001",
            customer: "Sarah Johnson",
            items: [
                { name: "Truffle Mushroom Risotto", qty: 1 },
                { name: "House Salad", qty: 1 },
                { name: "Sparkling Water", qty: 2 }
            ],
            total: 42.97,
            date: "2023-10-15 18:30",
            status: "completed",
            payment: "Credit Card",
            type: "Delivery"
        },
        {
            id: "ORD-002",
            customer: "Michael Chen",
            items: [
                { name: "Herb-Crusted Salmon", qty: 1 },
                { name: "Garlic Mashed Potatoes", qty: 1 },
                { name: "Red Wine", qty: 1 }
            ],
            total: 56.50,
            date: "2023-10-15 19:15",
            status: "preparing",
            payment: "PayPal",
            type: "Pickup"
        },
        {
            id: "ORD-003",
            customer: "Emma Rodriguez",
            items: [
                { name: "Filet Mignon", qty: 2 },
                { name: "Truffle Fries", qty: 1 },
                { name: "Chocolate Soufflé", qty: 1 },
                { name: "Craft Cocktail Flight", qty: 1 }
            ],
            total: 128.45,
            date: "2023-10-14 20:00",
            status: "pending",
            payment: "Credit Card",
            type: "Dine-in"
        },
        {
            id: "ORD-004",
            customer: "James Wilson",
            items: [
                { name: "Burrata & Heirloom Tomatoes", qty: 1 },
                { name: "Vegetable Risotto", qty: 1 },
                { name: "Berry Pavlova", qty: 1 }
            ],
            total: 48.75,
            date: "2023-10-14 19:00",
            status: "delivered",
            payment: "Cash",
            type: "Delivery"
        },
        {
            id: "ORD-005",
            customer: "Olivia Thompson",
            items: [
                { name: "Seared Scallops", qty: 1 },
                { name: "Caesar Salad", qty: 1 },
                { name: "Sparkling Water", qty: 1 }
            ],
            total: 38.99,
            date: "2023-10-13 18:45",
            status: "cancelled",
            payment: "Credit Card",
            type: "Pickup"
        },
        {
            id: "ORD-006",
            customer: "David Kim",
            items: [
                { name: "Kids Pasta", qty: 2 },
                { name: "Chicken Parmesan", qty: 1 },
                { name: "Tiramisu", qty: 1 }
            ],
            total: 62.30,
            date: "2023-10-13 19:30",
            status: "completed",
            payment: "Credit Card",
            type: "Dine-in"
        },
    ];

    // Status badge component
    // Status badge component
    const StatusBadge = ({ status }) => {
        const statusStyles = {
            pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
            preparing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            delivered: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
            cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        };

        const statusText = {
            pending: "Pending",
            preparing: "Preparing",
            completed: "Completed",
            delivered: "Delivered",
            cancelled: "Cancelled",
        };

        const statusIcons = {
            pending: <FiClock className="mr-1 text-[10px] sm:text-xs" />,
            preparing: <FiClock className="mr-1 text-[10px] sm:text-xs" />,
            completed: <FiCheckCircle className="mr-1 text-[10px] sm:text-xs" />,
            delivered: <FiTruck className="mr-1 text-[10px] sm:text-xs" />,
            cancelled: <FiXCircle className="mr-1 text-[10px] sm:text-xs" />,
        };

        return (
            <span className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center ${statusStyles[status]}`}>
                {statusIcons[status]}
                {statusText[status]}
            </span>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-2 sm:p-3 md:p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-4 sm:mb-5 md:mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                            <FiShoppingCart className="mr-2 sm:mr-3 text-indigo-600 dark:text-indigo-400 text-base sm:text-lg md:text-xl" />
                            Order Management
                        </h1>
                        <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                            Track and manage all customer orders
                        </p>
                    </div>

                    <button
                        onClick={() => router.push('/admin/orders/add')}
                        className="cursor-pointer flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 text-xs sm:text-sm md:text-base bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md sm:rounded-lg transition-colors duration-300"
                    >
                        <FiPlus className="mr-1 sm:mr-2" />
                        Add Order
                    </button>
                </div>

                {/* Stats Cards - Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                    {[
                        { title: 'Orders', value: 42, change: '+12%', icon: <FiShoppingCart />, color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
                        { title: 'Revenue', value: '$1,842', change: '+8.5%', icon: <FiDollarSign />, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
                        { title: 'Pending', value: 8, change: 'Attention', icon: <FiClock />, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
                        { title: 'Customers', value: 24, change: '+3 new', icon: <FiUser />, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm p-2 sm:p-3 md:p-4 transition-all duration-300 hover:shadow-sm sm:hover:shadow-md"
                        >
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${stat.color} flex items-center justify-center mb-2 sm:mb-3`}>
                                <span className="text-base sm:text-lg">{stat.icon}</span>
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
                                <FiSearch className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search orders..."
                                className="block w-full pl-8 sm:pl-10 pr-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 sm:flex gap-2">
                            <select className="bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>All Status</option>
                                <option>Pending</option>
                                <option>Preparing</option>
                                <option>Completed</option>
                                <option>Delivered</option>
                                <option>Cancelled</option>
                            </select>

                            <select className="bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>Today</option>
                                <option>Yesterday</option>
                                <option>Last 7 Days</option>
                                <option>This Month</option>
                            </select>

                            <select className="hidden sm:block bg-white dark:bg-gray-800 text-xs sm:text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md sm:rounded-lg py-1 sm:py-2 px-2 sm:px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option>All Types</option>
                                <option>Delivery</option>
                                <option>Pickup</option>
                                <option>Dine-in</option>
                            </select>

                            <button className="hidden sm:flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md sm:rounded-lg transition-colors duration-300">
                                <FiFilter className="mr-1" />
                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Orders List */}
                <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm overflow-hidden">
                    {/* Table Header - Desktop */}
                    <div className="hidden sm:grid grid-cols-12 gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-gray-700 text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        <div className="col-span-2">Order ID</div>
                        <div className="col-span-2">Customer</div>
                        <div className="col-span-3">Items</div>
                        <div className="col-span-1">Total</div>
                        <div className="col-span-2">Date & Time</div>
                        <div className="col-span-2">Status</div>
                    </div>

                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                                {/* Desktop View */}
                                <div className="hidden sm:grid grid-cols-12 gap-2 items-center">
                                    <div className="col-span-2">
                                        <div className="font-medium text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 truncate">{order.id}</div>
                                        <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{order.type}</div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="font-medium text-xs sm:text-sm text-gray-900 dark:text-white truncate">{order.customer}</div>
                                        <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">{order.payment}</div>
                                    </div>

                                    <div className="col-span-3">
                                        <div className="text-[10px] sm:text-xs text-gray-900 dark:text-gray-200">
                                            {order.items.slice(0, 2).map((item, idx) => (
                                                <div key={idx} className="flex truncate">
                                                    <span>{item.qty}x {item.name}</span>
                                                </div>
                                            ))}
                                            {order.items.length > 2 && (
                                                <div className="text-indigo-600 dark:text-indigo-400 mt-1 text-[10px] sm:text-xs">
                                                    +{order.items.length - 2} more
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-span-1 font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                                        ${order.total.toFixed(2)}
                                    </div>

                                    <div className="col-span-2">
                                        <div className="text-[10px] sm:text-xs text-gray-900 dark:text-white">
                                            {new Date(order.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                        <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                                            {new Date(order.date).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <StatusBadge status={order.status} />
                                    </div>
                                </div>

                                {/* Mobile View */}
                                <div className="sm:hidden">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-bold text-xs text-indigo-600 dark:text-indigo-400">{order.id}</div>
                                            <div className="font-medium text-sm text-gray-900 dark:text-white mt-1">{order.customer}</div>
                                        </div>
                                        <StatusBadge status={order.status} />
                                    </div>

                                    <div className="mt-3 grid grid-cols-2 gap-3">
                                        <div>
                                            <div className="text-[10px] text-gray-500 dark:text-gray-400">Type</div>
                                            <div className="text-xs font-medium text-gray-900 dark:text-white">{order.type}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-500 dark:text-gray-400">Payment</div>
                                            <div className="text-xs font-medium text-gray-900 dark:text-white">{order.payment}</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <div className="text-[10px] text-gray-500 dark:text-gray-400">Items</div>
                                        <div className="text-xs text-gray-900 dark:text-gray-200 mt-1">
                                            {order.items.slice(0, 2).map((item, idx) => (
                                                <div key={idx} className="flex truncate">
                                                    <span>{item.qty}x {item.name}</span>
                                                </div>
                                            ))}
                                            {order.items.length > 2 && (
                                                <div className="text-indigo-600 dark:text-indigo-400 mt-1 text-[10px]">
                                                    +{order.items.length - 2} more items
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-3 grid grid-cols-2 gap-3">
                                        <div>
                                            <div className="text-[10px] text-gray-500 dark:text-gray-400">Date & Time</div>
                                            <div className="text-xs font-medium text-gray-900 dark:text-white">
                                                {new Date(order.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                                <span className="text-gray-500 dark:text-gray-400 ml-1">
                                                    {new Date(order.date).toLocaleTimeString('en-US', {
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-500 dark:text-gray-400">Total</div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white">
                                                ${order.total.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex space-x-2">
                                        <button className="flex-1 py-2 px-3 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-300">
                                            View Details
                                        </button>
                                        <button className="py-2 px-3 text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md transition-colors duration-300">
                                            Actions
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="bg-white dark:bg-gray-800 px-3 sm:px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                            <span className="font-medium">42</span> orders
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
        </div>
    );
}