'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ModeToggle';


const Navbar = () => {

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/menu' },
        { name: 'Our location', href: '/location' },
        { name: 'Contact', href: '/contact' },
    ]
    return (
        <header className={`fixed top-0 w-full z-50 py-4 px-4 md:px-8 backdrop-blur-md dark:bg-gray-900/80 dark:border-b dark:border-gray-800 bg-amber-50/80 border-b border-amber-200`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full mr-3 flex items-center justify-center dark:bg-amber-700 dark:text-amber-300 bg-red-600 text-white`}>
                        <span className="font-bold text-xl">B</span>
                    </div>
                    <h1 className={`text-2xl font-bold dark:text-amber-400 text-red-700`}>Burger Bliss</h1>
                </div>

                <nav className="hidden md:flex space-x-8">
                    {links.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`font-medium transition-colors dark:text-gray-300 dark:hover:text-amber-400 text-gray-700 hover:text-red-600`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    

                    <button className={`px-4 py-2 rounded-full font-medium transition-colors dark:bg-amber-600 dark:text-white dark:hover:bg-amber-700 bg-red-600 text-white hover:bg-red-700`}>
                        Login
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar