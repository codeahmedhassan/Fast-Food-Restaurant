'use client'
import React, { useState } from 'react'

const Footer = () => {
    
    const footerSections = {
        Menu: {
            links: [
                { name: "Burgers", href: "#" },
                { name: "Sides", href: "#" },
                { name: "Drinks", href: "#" },
                { name: "Ice Creams", href: "#" }
            ]
        },
        Locations: {
            links: [
                { name: "Islamabad G-9", href: "#" },
                { name: "Islamabad F-10", href: "#" },
                { name: "Islamabad F-11", href: "#" },
                { name: "Rawalpindi Saddar", href: "#" }
            ]
        },
        Others: {
            links: [
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Press", href: "#" },
                { name: "Blog", href: "#" }
            ]
        }
    };


    const socialMedia = {
        facebook: [
            {
                name: "Facebook Svg",
                svg: "/facebook.svg",
                href: "https://www.facebook.com/"
            }
        ],
        instagram: [
            {
                name: "Instagram Svg",
                svg: "/instagram.svg",
                href: "https://www.instagram.com/"
            }
        ],
        linkedin: [
            {
                name: "Linkedin Svg",
                svg: "/linkedin.svg",
                href: "https://www.linkedin.com/"
            }
        ]
    }


    return (
        <footer className={`py-12 dark:bg-gray-900 dark:border-t dark:border-gray-800 bg-amber-100 border-t border-amber-200`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className={`w-10 h-10 rounded-full mr-3 flex items-center justify-center dark:bg-amber-700 dark:text-amber-300  bg-red-600 text-white`}>
                                <span className="font-bold">B</span>
                            </div>
                            <h3 className={`text-xl font-bold dark:text-amber-400 text-red-700`}>
                                Burger Bliss
                            </h3>
                        </div>
                        <p className={`text-sm dark:text-gray-400 text-gray-600`}>
                            Serving the best burgers in town since 2010. Made with love and the finest ingredients.
                        </p>
                    </div>

                    <div>
                        <h4 className={`text-lg font-bold mb-4 dark:text-amber-400 text-red-700`}>
                            Quick Links
                        </h4>
                        <ul className={`space-y-2 dark:text-gray-400 text-gray-600`}>
                            {['Menu', 'About Us', 'Locations', 'Careers', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:underline">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className={`text-lg font-bold mb-4 dark:text-amber-400 text-red-700`}>
                            Hours
                        </h4>
                        <ul className={`space-y-2 dark:text-gray-400 text-gray-600`}>
                            <li className="flex justify-between">
                                <span>Monday - Thursday</span>
                                <span>11am - 10pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Friday - Saturday</span>
                                <span>11am - 11pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>12pm - 9pm</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={`text-lg font-bold mb-4 dark:text-amber-400 text-red-700`}>
                            Contact
                        </h4>
                        <ul className={`space-y-2 dark:text-gray-400 text-gray-600`}>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Food Street, Culinary City</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@burgerbliss.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`mt-12 pt-6 text-center text-sm dark:text-gray-500 dark:border-t dark:border-gray-800 text-gray-600 border-t border-amber-200`}>
                    © {new Date().getFullYear()} Burger Bliss. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer