'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from './ui/button';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter()
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Our location', href: '/location' },
    ]
    const [sheetOpen, setSheetOpen] = useState(false);
    const pathname = usePathname();
    const isAdmin = pathname.startsWith('/admin');
    return (
        <>
            {!isAdmin && < header className={`fixed top-0 w-full z-50 py-4 px-4 md:px-8 backdrop-blur-md dark:bg-gray-900/80 dark:border-b dark:border-gray-800 bg-amber-50/80 border-b border-amber-200`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center cursor-pointer" onClick={() => { router.push('/') }}>
                        <div className={`w-12 h-12 rounded-full mr-3 flex items-center justify-center dark:bg-amber-700 dark:text-amber-300 bg-red-600 text-white`}>
                            <span className="font-bold text-xl">B</span>
                        </div>
                        <h1 className={`text-2xl font-bold dark:text-amber-400 text-red-700`}>Burger Bliss</h1>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <div className='hidden md:flex relative cartImage rounded-full bg-white p-2 cursor-pointer' onClick={() => { router.push('/cart') }}>
                            <div className='absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center'>
                                2
                            </div>
                            <Image src="/cart.svg" alt="cart" width={20} height={20} />
                        </div>

                        <ModeToggle />

                        <div className="md:hidden">

                            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                                <SheetTrigger>
                                    <Image
                                        src="/menu.svg"
                                        className="dark:invert mt-2"
                                        width={30}
                                        height={30}
                                        alt="Menu Icon"
                                    />
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetDescription>
                                            <Button
                                                className={`mt-20 w-full ${pathname === '/cart'
                                                        ? 'bg-red-700 text-white'
                                                        : 'bg-red-600 text-white hover:bg-red-700 dark:bg-amber-600 dark:hover:bg-amber-700 dark:text-white'
                                                    }`}
                                                onClick={() => {
                                                    router.push('/cart');
                                                    setSheetOpen(false);
                                                }}
                                            >
                                                Cart
                                            </Button>

                                            {links.map((link) => (
                                                <Button
                                                    key={link.href}
                                                    className={`mt-4 w-full ${pathname === link.href
                                                            ? 'bg-red-700 text-white'
                                                            : 'bg-red-600 text-white hover:bg-red-700 dark:bg-amber-600 dark:hover:bg-amber-700 dark:text-white'
                                                        }`}
                                                    onClick={() => {
                                                        router.push(link.href);
                                                        setSheetOpen(false);
                                                    }}
                                                >
                                                    {link.name}
                                                </Button>
                                            ))}

                                            <Button
                                                className={`mt-4 w-full ${pathname === '/login'
                                                        ? 'bg-red-700 text-white'
                                                        : 'bg-red-600 text-white hover:bg-red-700 dark:bg-amber-600 dark:hover:bg-amber-700 dark:text-white'
                                                    }`}
                                                onClick={() => {
                                                    router.push('/login');
                                                    setSheetOpen(false);
                                                }}
                                            >
                                                Login
                                            </Button>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>

                        </div>


                        <button className={`hidden md:flex px-4 py-2 rounded-full font-medium transition-colors dark:bg-amber-600 dark:text-white dark:hover:bg-amber-700 bg-red-600 text-white hover:bg-red-700 cursor-pointer`} onClick={() => { router.push('/login') }}>
                            Login
                        </button>
                    </div>
                </div>
            </header >
            }
        </>
    )
}

export default Navbar