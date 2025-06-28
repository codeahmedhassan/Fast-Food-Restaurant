'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Menu = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSauces, setSelectedSauces] = useState([]);
    const [selectedDrinks, setSelectedDrinks] = useState([]);
    const menuItems = {
        burgers: {
            name: "Gourmet Burgers",
            headerImage: "/header.jpg",
            description: "Handcrafted burgers made with premium ingredients",
            items: [
                { id: 1, name: "Classic Cheeseburger", price: 12.99, description: "Beef patty with cheddar, lettuce, tomato", calories: 650, image: "/cheeseburger.webp", popular: true },
                { id: 2, name: "Bacon Deluxe", price: 14.99, description: "Double patty with bacon and special sauce", calories: 850, image: "/bacondeluxe.jpg", popular: true },
                { id: 3, name: "Mushroom Swiss", price: 13.99, description: "Beef patty with sautéed mushrooms", calories: 720, image: "/mushroomswiss.jpg" },
                { id: 4, name: "Chicken Burger", price: 11.99, description: "House-made chicken burger with drink", calories: 580, image: "/chicken-burger.webp" },
            ]
        },
        sides: {
            name: "Delicious Sides",
            headerImage: "/sides-header.jpg",
            description: "Perfect accompaniments to your meal",
            items: [
                { id: 5, name: "Crispy Fries", price: 4.99, description: "Golden crispy potatoes with sea salt", calories: 320, image: "/crispyfries.jpg" },
                { id: 6, name: "Onion Rings", price: 5.99, description: "Beer-battered onion rings", calories: 480, image: "/onionrings.jpg", popular: true },
                { id: 7, name: "Sweet Potato Fries", price: 5.49, description: "Cinnamon-dusted sweet potato fries", calories: 380, image: "/sweetpotatofries.jpeg" },
                { id: 8, name: "Truffle Mac & Cheese", price: 7.99, description: "Creamy macaroni with truffle oil", calories: 520, image: "/macandcheese.jpg" },
            ]
        },
        drinks: {
            name: "Refreshing Drinks",
            headerImage: "/drinks-header.jpg",
            description: "Crafted beverages to quench your thirst",
            items: [
                { id: 9, name: "Chocolate Shake", price: 6.99, description: "Rich chocolate milkshake", calories: 550, image: "/chocolateshake.jpg", popular: true },
                { id: 10, name: "Strawberry Lemonade", price: 4.49, description: "Freshly squeezed lemonade", calories: 220, image: "/strawberrylemonade.webp" },
                { id: 11, name: "Craft Soda", price: 3.99, description: "Handcrafted cola with cane sugar", calories: 180, image: "/craftsoda.jpg" },
                { id: 12, name: "Iced Mocha", price: 5.49, description: "Espresso with chocolate and cold milk", calories: 210, image: "/icedmocha.jpg" },
            ]
        }
    };

    // Add-ons data
    const sauces = [
        { id: 1, name: "BBQ Sauce", price: 0.50 },
        { id: 2, name: "Garlic Aioli", price: 0.50 },
        { id: 3, name: "Spicy Mayo", price: 0.50 },
        { id: 4, name: "Honey Mustard", price: 0.50 }
    ];

    const drinks = [
        { id: 1, name: "Coca Cola", price: 1.99 },
        { id: 2, name: "Iced Tea", price: 1.99 },
        { id: 3, name: "Lemonade", price: 2.49 },
        { id: 4, name: "Bottled Water", price: 1.00 }
    ];

    const openModal = (product) => {
        setSelectedProduct(product);
        setQuantity(1);
        setSelectedSauces([]);
        setSelectedDrinks([]);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleSauceChange = (sauceId) => {
        setSelectedSauces(prev =>
            prev.includes(sauceId)
                ? prev.filter(id => id !== sauceId)
                : [...prev, sauceId]
        );
    };

    const handleDrinkChange = (drinkId) => {
        setSelectedDrinks(prev =>
            prev.includes(drinkId)
                ? prev.filter(id => id !== drinkId)
                : [...prev, drinkId]
        );
    };

    const calculateTotal = () => {
        if (!selectedProduct) return 0;

        const basePrice = selectedProduct.price * quantity;

        const saucesTotal = sauces.reduce((sum, sauce) =>
            selectedSauces.includes(sauce.id) ? sum + sauce.price : sum, 0);

        const drinksTotal = drinks.reduce((sum, drink) =>
            selectedDrinks.includes(drink.id) ? sum + drink.price : sum, 0);

        return basePrice + saucesTotal + drinksTotal;
    };

    const handleAddToCart = () => {
        // Your cart logic here
        console.log("Added to cart:", {
            product: selectedProduct,
            quantity,
            sauces: selectedSauces,
            drinks: selectedDrinks,
            total: calculateTotal()
        });
        closeModal();
    };

    return (
        <>
            {/* Menu Categories */}
            <div className="py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-amber-400"
                        >
                            Our Complete Menu
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg"
                        >
                            Explore our diverse offerings crafted with passion and premium ingredients
                        </motion.p>
                    </div>

                    {/* Loop through all categories */}
                    {Object.entries(menuItems).map(([categoryId, category], catIndex) => (
                        <section key={categoryId} className="mb-20">
                            <motion.div
                                className="text-center mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                                    {category.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                    {category.description}
                                </p>
                            </motion.div>

                            {/* Category Header Image */}
                            <motion.div
                                className="flex justify-between mb-10 rounded-xl overflow-hidden shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 + 0.1 }}
                            >
                                <Image src={category.headerImage} className='border-2 border-dashed rounded-xl w-full h-52 md:h-80 object-cover' alt={category.name} width={1000} height={500} />
                            </motion.div>

                            {/* Menu Items Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: catIndex * 0.2 + index * 0.1 }}
                                        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 flex flex-col h-full"
                                        onClick={() => openModal(item)}
                                    >
                                        {/* Product card */}
                                        <div className="relative h-40 md:h-52 cursor-pointer">
                                            {/* Popular badge */}
                                            {item.popular && (
                                                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                                    </svg>
                                                    Popular
                                                </div>
                                            )}

                                            {/* Image gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

                                            {/* Item image placeholder */}
                                            <Image src={item.image} className='border-2 border-dashed rounded-xl w-full h-40 md:h-52 object-cover' alt={item.name} width={1000} height={500} />

                                            {/* Price tag */}
                                            <div className="absolute bottom-4 right-4 px-2 py-2 rounded-full font-bold z-20 bg-gradient-to-r text-xs from-amber-500 to-amber-600 text-white shadow-md">
                                                ${item.price.toFixed(2)}
                                            </div>

                                            {/* Calories */}
                                            <div className="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                                                {item.calories} cal
                                            </div>
                                        </div>

                                        <div className="p-4 flex flex-col flex-grow items-center justify-center text-center">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                                                    {item.name}
                                                </h3>
                                            </div>

                                            <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm flex-grow">
                                                {item.description}
                                            </p>

                                            <motion.button
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full cursor-pointer py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:opacity-90"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                </svg>
                                                Add to Order
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Product Modal */}
                                {selectedProduct && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                                    >
                                        {/* Backdrop */}
                                        <div
                                            className="absolute inset-0 bg-black/70 dark:bg-black/80"
                                            onClick={closeModal}
                                        />

                                        {/* Modal Content */}
                                        <motion.div
                                            initial={{ scale: 0.9, y: 20 }}
                                            animate={{ scale: 1, y: 0 }}
                                            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                                        >
                                            {/* Close Button */}
                                            <button
                                                onClick={closeModal}
                                                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                            <div className="p-6 md:p-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    {/* Product Image */}
                                                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                                                        <Image
                                                            src={selectedProduct.image}
                                                            alt={selectedProduct.name}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            className="border-2 border-dashed"
                                                        />
                                                        {selectedProduct.popular && (
                                                            <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                                                </svg>
                                                                Popular
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Product Details */}
                                                    <div className="flex flex-col">
                                                        <div className="mb-6">
                                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                                                {selectedProduct.name}
                                                            </h2>
                                                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                                {selectedProduct.description}
                                                            </p>
                                                            <div className="flex items-center space-x-4">
                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500">
                                                                    {selectedProduct.calories} cal
                                                                </span>
                                                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                                                    ${selectedProduct.price.toFixed(2)}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Quantity Selector */}
                                                        <div className="mb-6">
                                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                                Quantity
                                                            </h3>
                                                            <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden w-fit">
                                                                <button
                                                                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                                                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                                                    disabled={quantity <= 1}
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white w-12 text-center">
                                                                    {quantity}
                                                                </span>
                                                                <button
                                                                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                                                                    onClick={() => setQuantity(q => q + 1)}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* Sauces Add-ons */}
                                                        <div className="mb-6">
                                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                                Sauces <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">(Select multiple)</span>
                                                            </h3>
                                                            <div className="grid grid-cols-2 gap-3">
                                                                {sauces.map(sauce => (
                                                                    <label
                                                                        key={sauce.id}
                                                                        className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${selectedSauces.includes(sauce.id)
                                                                                ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-900/20'
                                                                                : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                                                            }`}
                                                                    >
                                                                        <input
                                                                            type="checkbox"
                                                                            className="h-4 w-4 text-amber-600 dark:text-amber-500 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:border-gray-600"
                                                                            checked={selectedSauces.includes(sauce.id)}
                                                                            onChange={() => handleSauceChange(sauce.id)}
                                                                            hidden
                                                                        />
                                                                        <div className={`h-4 w-4 rounded border flex items-center justify-center ${selectedSauces.includes(sauce.id)
                                                                                ? 'bg-amber-500 border-amber-500'
                                                                                : 'border-gray-400 dark:border-gray-500'
                                                                            }`}>
                                                                            {selectedSauces.includes(sauce.id) && (
                                                                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                                                </svg>
                                                                            )}
                                                                        </div>
                                                                        <span className="text-gray-700 dark:text-gray-300">{sauce.name}</span>
                                                                        <span className="ml-auto text-amber-600 dark:text-amber-500">+${sauce.price.toFixed(2)}</span>
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Drinks Add-ons */}
                                                        <div className="mb-8">
                                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                                Drinks <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">(Select multiple)</span>
                                                            </h3>
                                                            <div className="grid grid-cols-2 gap-3">
                                                                {drinks.map(drink => (
                                                                    <label
                                                                        key={drink.id}
                                                                        className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${selectedDrinks.includes(drink.id)
                                                                                ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-900/20'
                                                                                : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                                                            }`}
                                                                    >
                                                                        <input
                                                                            type="checkbox"
                                                                            className="h-4 w-4 text-amber-600 dark:text-amber-500 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:border-gray-600"
                                                                            checked={selectedDrinks.includes(drink.id)}
                                                                            onChange={() => handleDrinkChange(drink.id)}
                                                                            hidden
                                                                        />
                                                                        <div className={`h-4 w-4 rounded border flex items-center justify-center ${selectedDrinks.includes(drink.id)
                                                                                ? 'bg-amber-500 border-amber-500'
                                                                                : 'border-gray-400 dark:border-gray-500'
                                                                            }`}>
                                                                            {selectedDrinks.includes(drink.id) && (
                                                                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                                                </svg>
                                                                            )}
                                                                        </div>
                                                                        <span className="text-gray-700 dark:text-gray-300">{drink.name}</span>
                                                                        <span className="ml-auto text-amber-600 dark:text-amber-500">+${drink.price.toFixed(2)}</span>
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Total and Add to Cart */}
                                                        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                                                            <div className="flex justify-between items-center mb-6">
                                                                <span className="text-lg font-medium text-gray-900 dark:text-white">Total</span>
                                                                <span className="text-xl font-bold text-amber-600 dark:text-amber-500">
                                                                    ${calculateTotal().toFixed(2)}
                                                                </span>
                                                            </div>
                                                            <motion.button
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold hover:opacity-90 transition duration-300 shadow-lg shadow-amber-500/20 dark:shadow-amber-600/30"
                                                                onClick={handleAddToCart}
                                                            >
                                                                Add to Cart
                                                            </motion.button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu