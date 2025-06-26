// app/admin/page.js
import React from 'react';

export default function AdminPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 md:p-8 text-white shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Admin Dashboard</h1>
                <p className="text-lg opacity-90">
                    Manage your restaurant operations efficiently with our comprehensive admin tools.
                    Monitor orders, update menu items, and track customer interactions all in one place.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                    { title: 'Total Orders', value: '1,248', change: '+12%' },
                    { title: 'Menu Items', value: '86', change: '+5' },
                    { title: 'Customer Reviews', value: '4.8/5', change: '+0.2' },
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</h3>
                        <div className="flex items-baseline mt-2">
                            <span className="text-2xl font-bold">{stat.value}</span>
                            <span className="ml-2 text-sm text-green-500">{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <ul className="space-y-4">
                    {[
                        { action: 'New order received', time: '5 mins ago' },
                        { action: 'Menu item updated', time: '1 hour ago' },
                        { action: 'New customer review', time: '2 hours ago' },
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-3">
                                <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
                            </div>
                            <div>
                                <p>{item.action}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}