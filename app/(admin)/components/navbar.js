// app/admin/components/Navbar.js
import { ModeToggle } from '@/components/ModeToggle';
import React from 'react';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar({setDarkMode, sidebarOpen, setSidebarOpen }) {
  return (
    <header className=" top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Restaurant Admin
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <ModeToggle />
          
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
              A
            </div>
            <span className="font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}