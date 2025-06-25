'use client';
import React, { useState } from 'react';

const MenuPage = () => {

    const menuCategories = [
        {
            name: "Appetizers",
            items: [
                { id: 1, name: "Truffle Arancini", description: "Crispy risotto balls with black truffle and mozzarella", price: "$12", popular: true },
                { id: 2, name: "Crispy Calamari", description: "Lightly fried squid with lemon aioli", price: "$14" },
                { id: 3, name: "Burrata & Heirloom Tomatoes", description: "Creamy burrata with seasonal tomatoes and basil oil", price: "$16", popular: true },
                { id: 4, name: "Beef Carpaccio", description: "Thinly sliced beef with arugula, capers and truffle oil", price: "$18" },
            ]
        },
        {
            name: "Main Courses",
            items: [
                { id: 5, name: "Filet Mignon", description: "8oz grass-fed beef with roasted garlic mashed potatoes", price: "$36", popular: true },
                { id: 6, name: "Wild Mushroom Risotto", description: "Arborio rice with seasonal mushrooms and parmesan", price: "$24", vegetarian: true },
                { id: 7, name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon-dill sauce and seasonal vegetables", price: "$28" },
                { id: 8, name: "Herb-Crusted Rack of Lamb", description: "New Zealand lamb with mint jus and potato gratin", price: "$42", popular: true },
                { id: 9, name: "Roasted Vegetable Tart", description: "Seasonal vegetables in puff pastry with goat cheese", price: "$22", vegetarian: true },
            ]
        },
        {
            name: "Desserts",
            items: [
                { id: 10, name: "Chocolate Soufflé", description: "Warm chocolate soufflé with vanilla bean ice cream", price: "$14", popular: true },
                { id: 11, name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar crust", price: "$12" },
                { id: 12, name: "Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone cream", price: "$13" },
                { id: 13, name: "Berry Pavlova", description: "Crisp meringue with fresh berries and chantilly cream", price: "$14" },
            ]
        },
        {
            name: "Drinks",
            items: [
                { id: 14, name: "Signature Cocktails", description: "Ask your server for today's special creations", price: "$14" },
                { id: 15, name: "Wine Selection", description: "Curated list of red, white, and sparkling wines", price: "$12-$18" },
                { id: 16, name: "Craft Beers", description: "Local and imported selections", price: "$8" },
                { id: 17, name: "Non-Alcoholic Specialties", description: "House-made sodas and infusions", price: "$7" },
            ]
        }
    ];

    return (
        <div className={`min-h-screen relative transition-colors duration-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-gradient-to-br from-amber-50 to-white`}>

            {/* Hero Section */}
            <section className={`py-28 px-4 md:px-8 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 bg-gradient-to-r from-red-700 to-amber-600`}>
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className={`text-4xl md:text-5xl font-bold mb-4  dark:text-amber-300 text-white`}>
                        Our Seasonal Menu
                    </h1>
                    <p className={`text-xl max-w-2xl mx-auto  dark:text-gray-300 text-amber-100`}>
                        Featuring the finest ingredients sourced from local producers and artisans
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className={`inline-block px-4 py-2 rounded-full dark:bg-gray-900 dark:text-amber-400 bg-white text-red-700`}>
                            <span className="font-medium">Today{"'"}s Special:</span> Pan-Seared Scallops with Saffron Risotto
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Categories */}
            <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-6 transition-all duration-300  dark:bg-gray-800 dark:hover:bg-gray-700 bg-white hover:bg-amber-50 border border-amber-100`}
                        >
                            <div className="flex items-center mb-6">
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center  dark:bg-amber-900 dark:text-amber-400 bg-red-100 text-red-700`}>
                                    <span className="font-bold">{index + 1}</span>
                                </div>
                                <h2 className={`ml-4 text-2xl font-bold  dark:text-amber-400 text-red-800`}>
                                    {category.name}
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {category.items.map((item) => (
                                    <div key={item.id} className="group">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center">
                                                    <h3 className={`text-lg font-semibold  dark:text-white text-gray-900`}>
                                                        {item.name}
                                                    </h3>
                                                    {item.popular && (
                                                        <span className={`ml-2 px-2 py-1 text-xs rounded-full  dark:bg-amber-900 dark:text-amber-300 bg-amber-100 text-amber-800`}>
                                                            Popular
                                                        </span>
                                                    )}
                                                    {item.vegetarian && (
                                                        <span className={`ml-2 px-2 py-1 text-xs rounded-full  dark:bg-green-900 dark:text-green-300 bg-green-100 text-green-800`}>
                                                            Vegetarian
                                                        </span>
                                                    )}
                                                </div>
                                                <p className={`mt-1 text-sm  dark:text-gray-400 text-gray-600`}>
                                                    {item.description}
                                                </p>
                                            </div>
                                            <p className={`text-lg font-bold min-w-[70px] text-right  dark:text-amber-400 text-red-700`}>
                                                {item.price}
                                            </p>
                                        </div>
                                        <div className={`mt-2 h-px w-full  dark:bg-gradient-to-r dark:from-transparent dark:via-gray-700 dark:to-transparent bg-gradient-to-r from-transparent via-amber-100 to-transparent`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MenuPage;