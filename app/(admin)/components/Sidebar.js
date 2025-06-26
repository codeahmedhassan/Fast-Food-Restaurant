// app/admin/components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import {
  FiHome,
  FiMail,
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiBarChart2
} from 'react-icons/fi';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navItems = [
    { name: 'Dashboard', icon: <FiHome />, href: '/admin' },
    { name: 'Contacts', icon: <FiMail />, href: '/admin/contacts' },
    { name: 'Categories', icon: <FiGrid />, href: '/admin/categories' },
    { name: 'Products', icon: <FiPackage />, href: '/admin/products' },
    { name: 'Orders', icon: <FiShoppingCart />, href: '/admin/orders' },
    { name: 'Customers', icon: <FiUsers />, href: '/admin/customers' },
    { name: 'Analytics', icon: <FiBarChart2 />, href: '/admin/analytics' },
    { name: 'Settings', icon: <FiSettings />, href: '/admin/settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 md:sticky z-30 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Restaurant Admin</h2>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}