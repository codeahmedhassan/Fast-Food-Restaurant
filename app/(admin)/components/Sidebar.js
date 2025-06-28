'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  FiHome,
  FiMail,
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiBarChart2,
} from 'react-icons/fi';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: <FiHome />, href: '/admin' },
    { name: 'Contacts', icon: <FiMail />, href: '/admin/contacts' },
    { name: 'Categories', icon: <FiGrid />, href: '/admin/categories' },
    { name: 'Products', icon: <FiPackage />, href: '/admin/products' },
    { name: 'Orders', icon: <FiShoppingCart />, href: '/admin/orders' },
    { name: 'Team', icon: <FiUsers />, href: '/admin/team' },
    { name: 'Analytics', icon: <FiBarChart2 />, href: '/admin/analytics' },
    { name: 'Settings', icon: <FiSettings />, href: '/admin/settings' },
  ];

  return (
    <>
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
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Restaurant Admin
          </h2>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(item.href);

              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (window.innerWidth < 768) setSidebarOpen(false);
                    }}
                    className={`flex items-center p-3 rounded-lg transition-colors ${isActive
                        ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-white font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400'
                      }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}